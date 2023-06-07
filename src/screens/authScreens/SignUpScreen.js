/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React,{useState, useContext} from 'react';
import { Icon } from '@rneui/base';

import Header from '../../components/Header';
import { AuthContext } from '../../navigation/authProvider';



export default function SignUpScreen({navigation}) {
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [confPasswordVisible, setConfPasswordVisible] = useState(true);

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [phoneNo,setPhoneNo] = useState();
    const [password,setPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();

    const {register} = useContext(AuthContext);

    return (
    <View style={styles.container}>
        <Header title="SignUp" type={'arrow-left'} navigation={navigation}/>
        <View style={{flex: 1, padding: 25, backgroundColor: '#e5e5e5'}}>
        <Text style={{fontFamily: 'Montserrat-ExtraBold', fontWeight: 'bold', fontSize: 32, marginTop: 15, color: '#2c2c2c'}}>Create an</Text>
        <Text style={{fontFamily: 'Montserrat-Italic-VariableFont_wght', fontWeight: 'bold', fontSize: 32,  marginBottom: 20, color: '#2c2c2c'}}>account</Text>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 45, width: '100%', borderRadius: 10, backgroundColor: 'white', marginBottom: 18}}>
          <Text style={{flex:0.15, flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}> <Icon name="person" size={25} color="#676767" /></Text>
          <TextInput style={{flex:0.85, color: 'black'}} placeholder="Full Name" placeholderTextColor="#676767"
          onChangeText={newText => setName(newText)}
          defaultValue={name}
          />
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 45, width: '100%', borderRadius: 10, backgroundColor: 'white', marginBottom: 18}}>
          <Text style={{flex:0.15, flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}> <Icon name="person" size={25} color="#676767" /></Text>
          <TextInput style={{flex:0.85, color: 'black'}} placeholder="Username or Email" placeholderTextColor="#676767"
          onChangeText={newText => setEmail(newText)}
          defaultValue={email}
          />
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 45, width: '100%', borderRadius: 10, backgroundColor: 'white', marginBottom: 18}}>
          <Text style={{flex:0.15, flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}> <Icon name="person" size={25} color="#676767" /></Text>
          <TextInput style={{flex:0.85, color: 'black'}} placeholder="Phone" placeholderTextColor="#676767"
          onChangeText={newText => setPhoneNo(newText)}
          defaultValue={phoneNo}
          />
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 45, width: '100%', borderRadius: 10, backgroundColor: 'white', marginBottom: 25}}>
          <Text style={{flex:0.15, flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}> <Icon name="lock" size={25} color="#676767" /></Text>
          <TextInput style={{flex:0.70, color: 'black'}} secureTextEntry={passwordVisible} placeholder="Password" placeholderTextColor="#676767"
          onChangeText={newText => setPassword(newText)}
          defaultValue={password}
          />
          <Text style={{flex:0.15,flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon name={passwordVisible ? 'visibility-off' : 'visibility'} size={25} color="#676767" />
          </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 45, width: '100%', borderRadius: 10, backgroundColor: 'white', marginBottom: 25}}>
          <Text style={{flex:0.15, flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}> <Icon name="lock" size={25} color="#676767" /></Text>
          <TextInput style={{flex:0.70, color: 'black'}} secureTextEntry={confPasswordVisible} placeholder="Confirm Password" placeholderTextColor="#676767"
           onChangeText={newText => setConfirmPassword(newText)}
           defaultValue={confirmPassword}
          />
          <Text style={{flex:0.15,flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}
            onPress={() => setConfPasswordVisible(!confPasswordVisible)}>
            <Icon name={confPasswordVisible ? 'visibility-off' : 'visibility'} size={25} color="#676767" />
          </Text>
        </View>
        <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'flex-end'}} />
      <View style={{fontFamily: 'Montserrat_700Black',display: 'flex', justifyContent: 'space-between', flexDirection:'row', marginBottom: 10}}>
        <TouchableOpacity>
          <Text style={{color: 'black', fontSize: 28, fontWeight: 'bold'}}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress = {()=>{register(email,password, name, phoneNo);}}
        style={{height: 46, width: 46, borderRadius: 23, backgroundColor: '#00cc66', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
        <Icon type="material-community" name="arrow-right" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{height:5, widht: 20, borderTopWidhth: 2, borderTopColor: 'black',  borderBottomWidhth: 5, borderBottomColor: 'black'}} />
      <View style={{flexDirection: 'row',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 0.35, height: 1, backgroundColor: 'black'}} />
      </View>
      <View style={{height:5, widht: 20, borderTopWidhth: 2, borderTopColor: 'black',  borderBottomWidhth: 5, borderBottomColor: 'black'}} />
      <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
        <TouchableOpacity
            onPress={()=>{navigation.navigate('SignInScreen');}}
            style={{height: 40, width: 130, borderRadius: 18, backgroundColor: '#00cc66', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
          <Text style={{color: 'white'}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
    },
  });
