/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */

import {View, Text, StyleSheet, Dimensions, TextInput,ImageBackground, TouchableOpacity, Platform, Alert, Image} from 'react-native';
import React,{useState,useEffect ,useContext} from 'react';
import { Icon } from '@rneui/base';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../navigation/authProvider';


export default function EditProfileScreen({navigation}) {

  const {user, logout} = useContext(AuthContext);

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [userData, setUserData] = useState(null);

  const getUser = async() => {
    const currentUser = await firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        console.log('User Data', documentSnapshot.data());
        setUserData(documentSnapshot.data());
      }
    })
  }

  const handleUpdate = async() => {
    console.log('Inside Headle Update');
    let imgUrl = await uploadImage();
    console.log("Image Url is",imgUrl);
    if( imgUrl == null && userData.userImg ) {
      imgUrl = userData.userImg;
    }


    firestore()
    .collection('users')
    .doc(user.uid)
    .update({
      fname: userData.fname,
      phone: userData.phone,
      userImg : imgUrl,
    })
    .then(() => {
      console.log('User Updated!');
      Alert.alert(
        'Profile Updated!',
        'Your profile has been updated successfully.'
      );
    })
  }

  const uploadImage = async () => {
    if( image == null ) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop(); 
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);

    // Set transferred state
    task.on('state_changed', (taskSnapshot) => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;

      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setImage(null);

      return url;

    } catch (e) {
      console.log(e);
      return null;
    }

  };

  useEffect(() => {
    getUser();
  }, []);

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
      this.bs.current.snapTo(1);
    });
  };



    return (
    <View style={{flex:1}}>
        <Header title="SignUp" type={'arrow-left'} navigation={navigation}/>
        <View style={{flex: 1, padding: 25, backgroundColor: '#e5e5e5'}}>
        <Text style={{fontFamily: 'Montserrat-ExtraBold', fontWeight: 'bold', fontSize: 32, marginTop: 10,marginBottom: 20, color: '#2c2c2c'}}>Edit Profile</Text>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() =>choosePhotoFromLibrary()}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 25
              }}>
              <ImageBackground
                source={{
                  uri: image
                    ? image
                    : userData
                    ? userData.userImg ||
                      'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
                    : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          {/* <Text style={{margin: 10, fontSize: 18, fontWeight: 'bold' ,color:"black" }}>
            {userData ? userData.fname : ''} 
          </Text> */}
        </View>

        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 45, width: '100%', borderRadius: 10, backgroundColor: 'white', marginBottom: 18}}>
          <Text style={{flex:0.15, flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}> <Icon name="person" size={25} color="#676767" /></Text>
          <TextInput style={{flex:0.85, color: 'black'}} placeholder="Full Name" placeholderTextColor="#676767" 
           value={userData ? userData.fname : ''}
           onChangeText={(txt) => setUserData({...userData, fname: txt})}
          />
        </View>

        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 45, width: '100%', borderRadius: 10, backgroundColor: 'white', marginBottom: 18}}>
          <Text style={{flex:0.15, flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}> <Icon name="phone" size={25} color="#676767" /> </Text>
          <TextInput style={{flex:0.85, color: 'black'}} placeholder="Phone" placeholderTextColor="#676767" 
          keyboardType="number-pad"
          value={userData ? userData.phone : ''}
          onChangeText={(txt) => setUserData({...userData, phone: txt})}
          />
        </View>
        
        <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'flex-end'}} />
      <View style={{fontFamily: 'Montserrat_700Black',display: 'flex', justifyContent: 'space-between', flexDirection:'row', marginBottom: 10}}>
        <TouchableOpacity>
          <Text style={{color: 'black', fontSize: 28, fontWeight: 'bold'}}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress = {()=>{handleUpdate()}}
        style={{height: 46, width: 46, borderRadius: 23, backgroundColor: '#00cc66', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
        <Icon type="material-community" name="arrow-right" size={30} color="white" />
        </TouchableOpacity>
      </View>

    </View>
    </View>
  );
}
