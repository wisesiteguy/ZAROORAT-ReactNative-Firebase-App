/* eslint-disable prettier/prettier */

import React, {createContext, useState} from 'react';
import auth  from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async(email,password) => {
            try {
                await auth().signInWithEmailAndPassword(email,password);
            } catch (e){
                console.log(e);
            }
        },
        register: async(email,password, firstName,phoneNo) => {
            try {
                await auth().createUserWithEmailAndPassword(email,password)
                .then(() => {
                    firestore().collection('users').doc(auth().currentUser.uid)
                    .set({
                        fname: firstName,
                        email: email,
                        phone: phoneNo,
                        userImg : null,
                        createdAt: firestore.Timestamp.fromDate(new Date()),
                        userId : auth().currentUser.uid
                    })
                    .then(()=>{
                      database()
                        .ref('/users/' + auth().currentUser.uid)
                        .set(
                          {
                            id : auth().currentUser.uid,
                            fname: firstName,
                            userImg : null,
                        }
                      ).catch(error => {
                        console.log('Something went wrong with added user to firestore: ', error);
                    });
                    })
                    .catch(error => {
                        console.log('Something went wrong with added user to firestore: ', error);
                    });
                  })
                  //we need to catch the whole sign up process if it fails too.
                  .catch(error => {
                      console.log('Something went wrong with sign up: ', error);
                  });
                } catch (e) {
                  console.log(e);
                }
        }, logout: async() => {
            try {
                await auth().signOut();
            } catch (e){
                console.log(e);
            }
        },
      }} >
        {children}
      </AuthContext.Provider>
  );
};
