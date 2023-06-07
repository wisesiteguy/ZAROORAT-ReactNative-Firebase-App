/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Switch, TouchableOpacity } from 'react-native';
import { panGestureHandlerCustomNativeProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SettingScreen({navigation}) {
  return (
    <View style={{flex: 1, padding: 25, paddingTop: 20, backgroundColor: "#e5e5e5"}}>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5, marginBottom: 15}}>
                <Text style={{fontFamily: 'Montserrat-ExtraBold', fontWeight: "bold", fontSize: 26, marginTop: 15, color: "#2c2c2c"}}>Setting</Text>
            </View>

            <TouchableOpacity
                style={{height: 60, display:'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#f2f2f7', marginTop: 5, borderRadius: 10, paddingLeft: 10}}>
                <View style={{flex:0.9}}>
                    <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Dark Theme</Text>
                </View>
                <View style={{flex:0.1, display: "flex", justifyContent: "flex-end"}}>
                    <Switch/>
                 </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={{height: 60, display:'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#f2f2f7', marginTop: 5, borderRadius: 10, paddingLeft: 10}}>
                <View style={{flex:0.9}}>
                    <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Notifications</Text>
                </View>
                <View style={{flex:0.1, display: "flex", justifyContent: "flex-end"}}>
                        <Text><Icon name="arrow-forward-ios" size={20} color="#2c2c2c" /></Text>
                 </View>
            </TouchableOpacity>
    </View>
  );
}