/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */

import {View, Text, TouchableOpacity,StyleSheet,Image, DatePickerIOSBase } from 'react-native';
import React, { useState, useCallback, useEffect, useContext} from 'react';
import { GiftedChat ,Bubble, InputToolbar} from 'react-native-gifted-chat';
import Header from '../components/Header';
import { AuthContext } from '../navigation/authProvider';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/database';



export default function ChatScreen({route, navigation}) {
    const item =  route.params;
    const {user, logout} = useContext(AuthContext);

    const [messages, setMessages] = useState([]);


    const getAllMessages = async()=>{
        console.log("GET MSGS FUNCTION")
        const doctId = item.userId > user.uid ? user.uid +'-'+ item.userId : item.userId +'-'+ user.uid;
        const querySnapshot = await firestore().collection('chatRooms')
        .doc(doctId).collection('messages')
        .orderBy('createdAt','desc')
        .get();

        const allMsgs =  querySnapshot.docs.map(docSnap=>{
            console.log("DOCUMENTTTTTTT"+docSnap)
            return {

                ...docSnap.data(),
                createdAt:docSnap.data().createdAt.toDate()
            };
        });
        setMessages(allMsgs);
    };


    useEffect(() => {
        // getAllMessages();
        const doctId = item.userId > user.uid ? user.uid +'-'+ item.userId : item.userId +'-'+ user.uid;
        const messageRef =  firestore().collection('chatRooms')
        .doc(doctId).collection('messages')
        .orderBy('createdAt','desc');

        messageRef.onSnapshot((querySnapshot)=>{
            const allMsgs =  querySnapshot.docs.map(docSnap=>{
                const data = docSnap.data();
                if (data.createdAt){
                    return {
    
                        ...docSnap.data(),
                        createdAt:docSnap.data().createdAt.toDate()
                    };    
                } else {
                    return {
                        ...docSnap.data(),
                        createdAt:new Date()
                    };
                }
                
            });
            setMessages(allMsgs);
        })
      }, []);
    
    const onSend = (messagesArr = []) => {
        const msg = messagesArr[0];
        const myMsg = {
            ...msg,
            sentBy : user.uid,
            sentTo : item.userId,
            createdAt : new Date(),

        };
        setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
        const doctId = item.userId > user.uid ? user.uid +'-'+ item.userId : item.userId +'-'+ user.uid;
        firestore().collection('chatRooms')
        .doc(doctId)
        .collection('messages')
        .add({...myMsg,createdAt: firebase.firestore.FieldValue.serverTimestamp()});

      };
    

  return (
    <View style={{flex:1, backgroundColor: '#e5e5e5'}}>
        <Header title="none" type={'arrow-left'} navigation={navigation}/>
        <View style={{ padding: 25, backgroundColor: '#e5e5e5'}}>
        <Text style={{fontFamily: 'Montserrat-ExtraBold', fontWeight: 'bold', fontSize: 32, marginTop: 15, color: '#2c2c2c'}}>Chat With,</Text>
        <Text style={{fontFamily: 'Montserrat-Italic-VariableFont_wght', fontWeight: 'bold', fontSize: 32,  marginBottom: 0, color: '#2c2c2c'}}>{item.fname}</Text>
        </View>
        <View style={{flex:0.25}}>
                        <Image style={{height: 60, width: 60, marginLeft: 15 ,marginRight: 3, borderRadius: 30}} 
                        source={{
                            uri: item
                                ? item.userImg ||
                                'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
                                : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
                            }} />
                    </View>
        
        <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: user.uid,
                }}
                renderBubble = {(props)=>{
                    return <Bubble
                    style={{marginBottom: 120}}

                        {...props}
                        wrapperStyle={{
                          right: {
                            backgroundColor: '#00cc66'
                          },

                          left: {
                            backgroundColor: '#DBE071'
                          }
                        }}
                      />
                }}

                renderInputToolbar={(props)=>{
                    return <InputToolbar 
                                {...props} 
                                containerStyle={{borderTopWidth: 1.5, borderTopColor: '#00cc66', marginBottom:70}} 
                                textInputStyle={{ color: "black" }} />
                }} 
            />
        
    </View>
  );
};