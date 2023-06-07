/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */


import { Text, View,Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { useContext, useState, useEffect} from 'react';
import { AuthContext } from '../navigation/authProvider';
import firestore from '@react-native-firebase/firestore';

export default function ProfileScreen({navigation}) {
    const {user, logout} = useContext(AuthContext);
    const [userData, setUserData] = useState(null);

    const getUser = async() => {
        await firestore()
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

      useEffect(() => {
        getUser();
      }, []);



    return (
        <View style={{flex: 1, padding: 25, backgroundColor: "#e5e5e5"}}>
        <Text style={{fontFamily: 'Montserrat-ExtraBold', fontWeight: "bold", fontSize: 32, marginTop: 15, color: "#2c2c2c", marginBottom: 30}}>My Profile</Text>
        {/* <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10}}>
            <Text style={{fontWeight: "bold", fontSize: 20, color: "#2c2c2c"}}>Personal Details</Text>
            <TouchableOpacity
            onPress={()=>{navigation.navigate('EditProfileScreen');}}>
                <Text style={{fontSize: 16, fontWeight: "bold", color: "#00cc66", marginRight: 10}}>Edit</Text>
            </TouchableOpacity>
        </View> */}

        <View style={{display: "flex", justifyContent: "center", alignItems: "center", height: 540, width: "100%", backgroundColor: "white", borderRadius: 20}}>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-end", flex: 0.35}}>
                <View style={{flex:0.3, display: "flex", justifyContent: "center", alignItems: "center",}}>
                    <Image style={{width: 70, height: 70, borderRadius: 35}} source={{uri:userData?userData.userImg:'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}/>
                </View>
                <View style={{flex:0.7}}>
                    <Text style={{fontWeight: "bold", fontSize: 18, color: "#2c2c2c", marginBottom: 5}}>{userData?userData.fname:"Test"}</Text>
                    <Text style={{ fontSize: 14, color: "#676767", marginBottom: 3}}>{userData?userData.email:"Test"}</Text>
                    <Text style={{fontSize: 14, color: "#676767"}}>{userData?userData.phone:"Test"}</Text>
                </View>
            </View>


            <TouchableOpacity style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "95%", flex: 0.15, borderBottomColor: "black", borderBottomWidth: 0.5}}
            onPress={()=>{navigation.navigate('EditProfileScreen');}}
            >
                <Text style={{fontSize: 16, fontWeight: "bold", textDecorationLine: 'underline', color: "#00cc66", marginRight: 10}}>View and Edit Profile</Text>
            </TouchableOpacity>


            <TouchableOpacity 
                onPress={()=>{navigation.navigate('SettingScreen');}}
                style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "95%", flex: 0.3, borderBottomColor: "black", borderBottomWidth: 0.5}}>
                <View style={{flex:0.2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Text> <Icon name="settings" size={26} color="#2c2c2c" /></Text>
                </View>
                <View style={{flex:0.55}}>
                    <Text style={{fontWeight: "bold", fontSize: 19, color: "#2c2c2c"}}>Setting</Text>
                    <Text style={{fontSize: 14, color: "#676767"}}>Theme and Notifications</Text>
                </View>
                <View style={{flex:0.2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Text><Icon name="arrow-forward-ios" size={20} color="#2c2c2c" /></Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity 
                onPress={()=>{navigation.navigate('CustomerSupportScreen');}}
                style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "95%", flex: 0.3, borderBottomColor: "black", borderBottomWidth: 0.5}}>
                <View style={{flex:0.2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Text> <AntDesign name="customerservice" size={26} color="#2c2c2c" /></Text>
                </View>
                <View style={{flex:0.55}}>
                    <Text style={{fontWeight: "bold", fontSize: 19, color: "#2c2c2c"}}>Customer Support</Text>
                    <Text style={{fontSize: 14, color: "#676767"}}>Customer Support and Help Center</Text>
                </View>
                <View style={{flex:0.2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Text><Icon name="arrow-forward-ios" size={20} color="#2c2c2c" /></Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={()=>{navigation.navigate('FAQsScreen');}}
                style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "95%", flex: 0.3, borderBottomColor: "black", borderBottomWidth: 0.5}}>
                <View style={{flex:0.2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Text> <FontAwesome5 name="question" size={26} color="#2c2c2c" /></Text>
                </View>
                <View style={{flex:0.55}}>
                    <Text style={{fontWeight: "bold", fontSize: 19, color: "#2c2c2c"}}>FAQs</Text>
                    <Text style={{fontSize: 14, color: "#676767"}}>Frequently Asked Questions</Text>
                </View>
                <View style={{flex:0.2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Text><Icon name="arrow-forward-ios" size={20} color="#2c2c2c" /></Text>
                </View>
            </TouchableOpacity>


            <View style={{display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%", flex: 0.4}}>
                <TouchableOpacity 
                onPress={()=>{logout()}}
                style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "60%",height: 35, backgroundColor: "#00cc66", borderRadius: 15, marginBottom: 30}}>
                        <Text style={{fontWeight: "bold", fontSize: 18, color: "white", marginBottom: 5}}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
}