/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { AuthContext } from '../navigation/authProvider';
import React, { useContext, useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';


export default function DisplayAdsDiscScreen({route, navigation}) {
  const item =  route.params;
  const {user} = useContext(AuthContext);
  const [users,setUsers]= useState(null);
    const getUsers = async()=>{
        const querySanp = await firestore().collection('post').doc(item.userId).get().then((snapshot) => {
          console.log(snapshot.data())});
        // const getAllUsers = querySanp.map(docSnap => docSnap.data());
        console.log(querySanp);
        setUsers(querySanp);
    };

    const submitAd = async () =>{
      // getUsers()
      console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww")
      firestore()
        .collection('saved')
        .add({
          userId : user.uid,
          title : item.title,
          postImg : item.postImg,
          category : item.category,
          price : item.price,
          discription : item.discription,
          postTime : item.postTime,
        })
        .then(() => {
          console.log('User added!');
          Alert.alert('Ad Saved!',
                    'Ad Saved Sucessfully');
        })
        .catch((e)=>{
          Alert.alert('Ad Saved!',
                    'Ad Saved Sucessfully');
        });
    };

  return (
    <View style={{flex: 1, padding:25 , paddingBottom:0 ,paddingTop:10 , backgroundColor: '#e5e5e5'}}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Image
          style={{width: '80%', height: 250, borderRadius: 20}}
          source={{uri: item.postImg}} />
      </View>

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 28,
          marginTop: 10,
          color: '#2c2c2c',
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 22,
          marginTop: 10,
          color: '#2c2c2c',
        }}>
        PKR {item.price}
      </Text>
      <Text
        style={{
          fontSize: 18,
          marginTop: 10,
          color: '#2c2c2c',
          marginBottom: 20,
        }}>
        {item.discription}
      </Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
        }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 150,
            marginRight: 5,
            borderRadius: 10,
            backgroundColor: '#00cc66',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={()=>{
            submitAd();
            // console.log(users);
          }}
          >
          <Text style={{color: 'white', fontSize: 18}}>
            <Icon name="bookmark-border" size={20} color="white" />
            Save Item
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: 150,
            marginLeft: 5,
            borderRadius: 10,
            backgroundColor: '#00cc66',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          
          onPress={()=>{
            navigation.navigate('MessagesScreen');
            // console.log(users);
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Contact Seller</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
          style={{
            height: 50,
            width: 150,
            marginLeft: 5,
            borderRadius: 10,
            backgroundColor: '#00cc66',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          
          onPress={()=>{
            navigation.navigate('SellerReviewScreen');
            // console.log(users);
          }}>
          <Text style={{color: 'white', fontSize: 18}}>View Seller Reviews</Text>
        </TouchableOpacity>
    </View>
  );
}
