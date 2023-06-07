import React from 'react';
import { Text, View,Image, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { panGestureHandlerCustomNativeProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';



export default function SubCatScreen({route, navigation}) {
    const categories =  route.params;


  return (
    <View style={{flex: 1, padding: 25, paddingTop: 20, backgroundColor: "#e5e5e5"}}>

        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5, marginBottom: 15}}>
            <Text style={{fontFamily: 'Montserrat-ExtraBold', fontWeight: "bold", fontSize: 26, marginTop: 15, color: "#2c2c2c"}}>Categories</Text>
        </View>

        <FlatList
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity 
                onPress={()=>{navigation.navigate('SubCatScreen', item)}}
              style={{height: 80, display:'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#f2f2f7', marginTop: 10, borderRadius: 10, paddingLeft: 10, paddingRight:10}}>
                  <View style={{flex: 0.27}}>
                      <Image style={{width: 60, height: 60, borderRadius: 30}} source={{uri: item.img}}/>
                  </View>
                  <View style={{flex: 0.7, display:'flex', flexDirection: 'row', justifyContent: "flex-start"}}>
                      <Text style={{fontSize: 13, fontWeight: 'bold', color: "#2c2c2c", marginTop: 3, textAlign: 'center'}}>{item.name}</Text>
                  </View>
                  <View style={{flex:0.1, display: "flex", justifyContent: "flex-end"}}>
                        <Text><Icon name="arrow-forward-ios" size={20} color="#2c2c2c" /></Text>
                 </View>
          </TouchableOpacity>
        )}
        />
    </View>
  );
}