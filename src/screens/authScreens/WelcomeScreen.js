/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
// import { Icon } from '@rneui/base';


export default function welcomeScreen({navigation}) {
  return (
    <View style={{flex: 1, padding: 25, backgroundColor: '#e5e5e5', display:'flex', alignItems: 'center'}}>

        <View style={{display:'flex', justifyContent:'center', alignItems: 'center', flexDirection:'row',marginTop: 150, marginBottom: 10}}>
          <Text style={{fontSize: 35, fontWeight:'bold', color: 'black', marginRight:3}}>Z</Text>
          <Text style={{fontSize: 35, fontWeight:'bold', color: 'black', marginRight:3, marginLeft: 3}}>A</Text>
          <Text style={{fontSize: 35, fontWeight:'bold', color: 'black', marginRight:3, marginLeft: 3}}>R</Text>
          <Text style={{fontSize: 35, fontWeight:'bold', color: '#00cc66', marginRight:3, marginLeft: 3}}>O</Text>
          <Text style={{fontSize: 35, fontWeight:'bold', color: '#00cc66', marginRight:3, marginLeft: 3}}>O</Text>
          <Text style={{fontSize: 35, fontWeight:'bold', color: 'black', marginRight:3, marginLeft: 3}}>R</Text>
          <Text style={{fontSize: 35, fontWeight:'bold', color: 'black', marginRight:3, marginLeft: 3}}>A</Text>
          <Text style={{fontSize: 35, fontWeight:'bold', color: 'black', marginRight:3, marginLeft: 3}}>T</Text>
        </View>
        <Text style={{color: 'black', textTransform: 'uppercase', marginBottom: 200}}>Buy Sell Product</Text>



      <View style={{flex:0.1,flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={()=>{navigation.navigate('SignInScreen');}}
          style={{margin:20, height: 40, width: 200, borderRadius: 18, backgroundColor: '#00cc66', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>{navigation.navigate('SignUpScreen');}}
          style={{height: 40, width: 200, borderRadius: 18, backgroundColor: '#00cc66', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
