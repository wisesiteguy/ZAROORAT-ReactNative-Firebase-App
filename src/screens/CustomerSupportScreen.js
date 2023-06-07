import {View, Text, TextInput, ImageBackground, TouchableOpacity, Image, Alert} from 'react-native';
import React,{useState,useEffect ,useContext} from 'react';
// import { Icon } from '@rneui/base';
import emailjs from 'emailjs-com';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';


export default function CustomerSupportScreen({navigation}) {
  const [from_name, setfrom_name] = useState('');
  const [email, setemail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setmessage] = useState('');

  const sendEmail = (e) => {
    const templateParams = {
      from_name: from_name,
      subject: subject,
      email: email,
      message: message,
    };

    emailjs
      .send(
        'service_cdv4l3k',
        'template_si3sc0r',
        templateParams,
        'IsXKkS1NCYyD6Rhrk'
      )
      .then((response) => {
        console.log('Email sent successfully!', response.text);
        Alert.alert('Email Sent', 'Your email has been sent successfully.');
        setSubject("");
        setemail("");
        setfrom_name("");
        setmessage("")
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        Alert.alert('Email Error', 'An error occurred while sending the email.');
      });
  };

    return (
    <View style={{flex:1}}>
        <Header title="CustomerSupport" type={'arrow-left'} navigation={navigation}/>
        <View style={{flex: 1, padding: 25, paddingBottom:0 ,paddingTop:10 , backgroundColor: '#e5e5e5'}}>
            <Text style={{fontFamily: 'Montserrat-ExtraBold', fontWeight: 'bold', fontSize: 32, marginTop: 10,marginBottom: 20, color: '#2c2c2c'}}>Customer Support</Text>

            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 55, width: '100%', borderRadius: 10, backgroundColor: 'white', marginBottom: 18}}>
              <Text style={{flex:0.15, flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}> <Icon name="person" size={25} color="#676767" /></Text>
              <TextInput style={{flex:0.85, color: 'black'}} placeholder="Enter Your Name" placeholderTextColor="#676767" value={from_name} onChangeText={setfrom_name}/>
            </View>

            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 55, width: '100%', borderRadius: 10, backgroundColor: 'white', marginBottom: 18}}>
              <Text style={{flex:0.15, flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}> <Icon name="email" size={25} color="#676767" /> </Text>
              <TextInput style={{flex:0.85, color: 'black'}} placeholder="Enter Your Email Address" placeholderTextColor="#676767" value={email} onChangeText={setemail}
              />
            </View>

            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 55, width: '100%', borderRadius: 10, backgroundColor: 'white', marginBottom: 18}}>
              <Text style={{flex:0.15, flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}> <Icon name="subject" size={25} color="#676767" /> </Text>
              <TextInput style={{flex:0.85, color: 'black'}} placeholder="Enter Subject" placeholderTextColor="#676767" value={subject} onChangeText={setSubject}
              />
            </View>

            <View style={{display: 'flex', paddingLeft:5, height: 200, width: '100%', borderRadius: 10, backgroundColor: 'white', marginBottom: 18}}>
              <TextInput style={{color: 'black'}} placeholder="Enter Description" placeholderTextColor="#676767" 
              value={message}
              onChangeText={setmessage}
              multiline
              />
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity 
                onPress={sendEmail}
                style={{height: 50, width:  "50%", borderRadius: 23, backgroundColor: '#00cc66', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                  <Text style={{fontWeight:"bold", fontSize: 22, color: "white"}}>Send</Text>
              </TouchableOpacity>
            </View>

        </View>
    </View>
  );
}
