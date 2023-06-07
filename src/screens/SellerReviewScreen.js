/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Switch, TouchableOpacity, Image } from 'react-native';
import { panGestureHandlerCustomNativeProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native-gesture-handler';

export default function SellerReviewScreen({navigation}) {
  return (
    <View style={{flex: 1, padding: 25, paddingTop: 20, backgroundColor: "#e5e5e5"}}>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5, marginBottom: 15}}>
                <Text style={{fontFamily: 'Montserrat-ExtraBold', fontWeight: "bold", fontSize: 26, marginTop: 15, color: "#2c2c2c"}}>Reviews</Text>
            </View>

            <View>
                <View style={{display: "flex", flexDirection: "row"}}>
                    <Image style={{width: 60, height: 60, borderRadius: 30}} source="https://media.wired.com/photos/5faed077f9e76246dde3355d/master/pass/Gear-Surface-Laptop-Go-SOURCE-Microsoft.jpg"/>
                    <Text>Wajahat Ahmad</Text>
                </View>
                <View>

                </View>
            </View>
            
    </View>
  );
}