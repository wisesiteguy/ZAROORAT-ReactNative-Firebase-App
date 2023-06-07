/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */


import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../navigation/authProvider';
// import DropDownPicker from 'react-native-dropdown-picker';



export default function AddPostScreen({navigation}) {
    const {user} = useContext(AuthContext);
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);

    const [title, setTitle] = useState(null);
    const [category, setCategory] = useState(null);
    const [price, setPrice] = useState(null);
    const [discription, setDiscription] = useState(null);

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width:1200,
            height:1100,
            cropping:true,
        // eslint-disable-next-line no-shadow
        }).then((image)=>{
            console.log(image);
            const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
            setImage(imageUri);
        });
    };

    const submitAd = async () =>{
      const imageUrl = await submitImage();

      firestore()
        .collection('posts')
        .add({
          userId : user.uid,
          title : title,
          postImg : imageUrl,
          category : category,
          price : price,
          discription : discription,
          postTime : firestore.Timestamp.fromDate(new Date()),
        })
        .then(() => {
          console.log('User added!');
          Alert.alert('Ad Post!',
                    'Ad posted Sucessfully');
          setTitle(null);
          setCategory(null);
          setPrice(null);
          setDiscription(null);
        })
        .catch((e)=>{
          console.log(e);
          Alert.alert('Error while posting your Ad');
        });
    };

    const submitImage = async () =>{
      const uploadUri = image;
      let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
      const extension = filename.split('.').pop();
      const name = filename.split('.').slice(0,-1).join('.');
      filename = name + Date.now() + '.' + extension;

      setUploading(true);
      setTransferred(0);
      const storageRef = storage().ref(`photos/${filename}`);
      const task = storageRef.putFile(uploadUri);

      task.on('state_changed', taskSnapshot => {
        console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
        setTransferred(Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes * 100));
      });

      try {
        await task;
        const url = await storageRef.getDownloadURL();

        setUploading(false);
        setImage(null);
        return url;
      } catch (e){
        console.log(e);
        return null;
      }
    };

  return (

    <View style={{flex: 1, padding: 25, backgroundColor: '#e5e5e5'}}>
        <Text style={{fontFamily: 'Montserrat-ExtraBold', fontWeight: 'bold', fontSize: 32, marginTop: 15, color: '#2c2c2c'}}>Post an</Text>
        <Text style={{fontFamily: 'Montserrat-Italic-VariableFont_wght', fontWeight: 'bold', fontSize: 32,  marginBottom: 20, color: '#2c2c2c'}}>Ad</Text>

        <View style={{display: 'flex', height: 50, borderRadius: 10, backgroundColor: 'white', marginBottom: 25}}>
          <TextInput
          onChangeText={newText => setTitle(newText)}
          defaultValue={title}
          style={{paddingLeft: 10, color: 'black'}} placeholder="Descriptive Title" placeholderTextColor="#676767" />
        </View>

        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 25}}>
          <View style={{flex: 0.5, backgroundColor: 'white', marginRight: 8, height: 50, borderRadius: 10}}>
            <TextInput
            onChangeText={newText => setCategory(newText)}
            defaultValue={category}
            style={{paddingLeft: 10, color: 'black'}} placeholder="Category" placeholderTextColor="#676767" />
          </View>
          <View style={{flex: 0.5, backgroundColor: 'white', marginLeft: 8, height: 50, borderRadius: 10}}>
            <TextInput
            keyboardType='numeric'
            onChangeText={newText => setPrice(newText)}
            defaultValue={price}
            style={{paddingLeft: 10, color: 'black'}} placeholder="Price" placeholderTextColor="#676767" />
          </View>
        </View>

        <View style={{display: 'flex', height: 100, borderRadius: 10, backgroundColor: 'white', marginBottom: 35}}>
          <TextInput
          onChangeText={newText => setDiscription(newText)}
          defaultValue={discription}
          style={{paddingLeft: 10, color: 'black'}} placeholder="Description" placeholderTextColor="#676767" />
        </View>

        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 25}}>
        <Text style={{fontSize: 15, color: '#676767'}}><Icon name="file-upload" size={18} color="#2c2c2c" />Upload Images
            </Text>
          <TouchableOpacity
           onPress={choosePhotoFromLibrary}
          style={{height: 110, width: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', borderWidth: 0.5}}>
          <Image
        style={{height: 110, width: 200}}
        source={image != null ? {uri:image} : null}/>

          </TouchableOpacity>
        </View>
        {uploading ? (
          <View style={{flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 15, color: '#676767'}}>{transferred}%</Text>
            <ActivityIndicator color="#00cc66" size="large"/>
          </View>
        ) :
        ( <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
        onPress={()=>{submitAd();}}
        style={{height: 40, width: 130, borderRadius: 18, backgroundColor: '#00cc66', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>)}



    </View>
  );
}
