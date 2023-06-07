/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet } from 'react-native';


import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import MyAdsScreen from '../screens/MyAdsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen.js';
import EditProfileScreen from '../screens/EditProfileScreen';
import DisplayAdsScreen from '../screens/DisplayAdsScreen';
import DisplayAdsDiscScreen from '../screens/DisplayAdsDiscScreen';
import SubCatScreen from '../screens/SubCatScreen';
import CategoryScreen from '../screens/CategoryScreen';
import SavedItemScreen from '../screens/SavedItemScreen';
import SearchProductScreen from '../screens/SearchProductScreen';
import DisplayMyAdDescScreen from '../screens/DisplayMyAdDescScreen';
import CustomerSupportScreen from '../screens/CustomerSupportScreen';
import FAQsScreen from '../screens/FAQsScreen';
import SettingScreen from '../screens/SettingScreen';
import SellerReviewScreen from '../screens/SellerReviewScreen';


import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomTabBarButton from '../components/CustomTabBarButton';
import CustomTabBar from '../components/CustomTabBar';

import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import ChatScreen from '../screens/ChatScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options = {{
          tabBarLabel:'HomeScreen',
          headerShown:false,
          ...TransitionPresets.RevealFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="SearchProductScreen"
      component={SearchProductScreen}
      options = {{
          tabBarLabel:'CategoryScreen',
          headerShown:false,
          ...TransitionPresets.RevealFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="CategoryScreen"
      component={CategoryScreen}
      options = {{
          tabBarLabel:'CategoryScreen',
          headerShown:false,
          ...TransitionPresets.RevealFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="SubCatScreen"
      component={SubCatScreen}
      options = {{
          tabBarLabel:'SubCatScreen',
          headerShown:false,
          ...TransitionPresets.RevealFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="DisplayAdsScreen"
      component={DisplayAdsScreen}
      options = {{
          tabBarLabel:'DisplayAdsScreen',
          headerShown:false,
          ...TransitionPresets.RevealFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="DisplayAdsDiscScreen"
      component={DisplayAdsDiscScreen}
      options = {{
          tabBarLabel:'DisplayAdsDiscScreen',
          headerShown:false,
          ...TransitionPresets.RevealFromBottomAndroid,
      }}
    />
    
    <Stack.Screen
        name="SellerReviewScreen"
        component={SellerReviewScreen}
        options = {{
            tabBarLabel:'DisplayAdsDiscScreen',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
  </Stack.Navigator>
);


const MyAds = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="MyAdsScreen"
        component={MyAdsScreen}
        options = {{
            // tabBarLabel:'Explore',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Stack.Screen
        name="SavedItemScreen"
        component={SavedItemScreen}
        options = {{
            tabBarLabel:'Explore',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Stack.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        options = {{
            tabBarLabel:'Explore',
            headerShown:false,  
            // ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Stack.Screen
        name="DisplayMyAdDescScreen"
        component={DisplayMyAdDescScreen}
        options = {{
            tabBarLabel:'DisplayAdsDiscScreen',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      

      <Stack.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options = {{
            tabBarLabel:'MessagesScreen',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );

  // const PostAnAd = ({navigation}) => (

  // <Stack.Screen
  //       name="AddPostScreen"
  //       component={AddPostScreen}
  //       options = {{
  //           tabBarLabel:'Explore',
  //           headerShown:false,  
  //           // ...TransitionPresets.RevealFromBottomAndroid,
  //       }}
  //     />




  const Chat = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options = {{
            tabBarLabel:'MessagesScreen',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options = {{
            tabBarLabel:'ChatScreen',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );

  const Profile = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options = {{
            tabBarLabel:'ProfileScreen',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options = {{
            tabBarLabel:'EditProfileScreen',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="CustomerSupportScreen"
        component={CustomerSupportScreen}
        options = {{
            tabBarLabel:'EditProfileScreen',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options = {{
            tabBarLabel:'EditProfileScreen',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="FAQsScreen"
        component={FAQsScreen}
        options = {{
            tabBarLabel:'FAQs',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );

export default function AppNavigation(){
    return (
        <Tab.Navigator
            tabBar={props => <CustomTabBar {...props} />}
            screenOptions={({route}) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarInactiveTintColor: "#444",
            tabBarStyle: styles.tabBarStyle,
            tabBarActiveTintColor: "#7d5fff",

            tabBarIcon: ({color, size, focused}) => {
              let iconName;
              // console.log(color);
              // console.log(route.name)
              if (route.name===Home) {
                iconName = focused ? "ios-home-sharp" : "ios-home-outline";
              }
              else if (route.name===MyAds) {
                iconName = focused ? "ios-pricetag-sharp" : "ios-pricetag-outline";
              }
              else if (route.name===AddPostScreen) {
                iconName = focused ? "plus" : "plus-outline";
              }
              else if (route.name===Chat) {
                iconName = focused ? "home" : "home-outline";
              }
              else if (route.name===Profile) {
                iconName = focused ? "home" : "home-outline";
              }
              return <Icon name={iconName} size={22} color={color}/>
            },

          })}>


            {/* tabBarStyle: {
              backgroundColor: 'white',
              position: 'absolute',
              backgroundColor: 'white',
              height: 65,
            },
          })} */}
          {/* tabBarOptions={{
            activeTintColor:'#00cc66',
            inactineTintColor:'grey',
            labelStyle:{paddingBottom:10, fontSize:11, fontWeight:"bold"},
          }}> */}


                <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  tabBarLabel: 'Home',
                  title: 'Home',
                  headerShown: false,
                  tabBarButton: props => (
                    <CustomTabBarButton route="Home" {...props} />
                  ),
                  // headerRight: () => {
                  //   return (
                  //     <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  //       <Icon
                  //         name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
                  //         size={30}
                  //         color={COLORS.dark}
                  //         style={{marginRight: 10}}
                  //       />
                  //     </TouchableOpacity>
                  //   );
                  // },
                }}
              />
                {/* name = "Home"
                component = {Home}
                options={{
                  tabBarLabel: 'Home',
                  title: 'Home',
                  headerShown: false,
                  tabBarButton: props => (
                    <CustomTabBarButton route="Home" {...props} />
                  ),
                }}
                options={({route}) => ({
                    tabBarLabel: 'Home',
                    headerShown:false,
                    tabBarIcon: ({color, size}) => (
                      <MaterialCommunityIcons
                        name="home-outline"
                        color={color}
                        size={size}
                      />
                    ),
                  })}
                /> */}

                <Tab.Screen
                name = "MyAds"
                component = {MyAds}
                options={{
                  tabBarLabel: 'My Ads',
                  title: 'My Ads',
                  headerShown: false,
                  tabBarButton: props => (
                    <CustomTabBarButton route="MyAds" {...props} />
                  ),
                }}
                // options={({route}) => ({
                //     tabBarLabel: 'My Ads',
                //     headerShown:false,
                //     tabBarIcon: ({color, size}) => (
                //       <AntDesign
                //         name="tago"
                //         color={color}
                //         size={size}
                //       />
                //     ),
                //   })}
                />

                <Tab.Screen 
                name="PostAnAd" 
                component={AddPostScreen}
                options={{
                  tabBarShowLabel: false,
                  // title: 'Profile',
                  headerShown: false,
                  tabBarButton: props => (
                    <CustomTabBarButton route="AddPostScreen" {...props} />
                  ),
                }}
                // options={({route}) => ({
                //   tabBarLabel: 'New Ad',
                //   headerShown:false,
                //   tabBarIcon: ({color, size}) => (
                //     <TouchableOpacity
                //     style={{width:50, height: 50, backgroundColor: "grey", borderRadius: 25, marginBottom: 32.5, alignItems: "center", justifyContent: "center"}}>
                //       <AntDesign name="plus" color="white"
                //       size={30}/>
                //     </TouchableOpacity>
                //   ),
                // })}
                />

                <Tab.Screen
                name = "Messages"
                component = {Chat}
                options={{
                  tabBarLabel: 'Chat',
                  title: 'Chat',
                  headerShown: false,
                  tabBarButton: props => (
                    <CustomTabBarButton route="Chat" {...props} />
                  ),
                }}
                
                // options={({route}) => ({
                //     tabBarLabel: 'Messages',
                //     headerShown:false,
                //     tabBarIcon: ({color, size}) => (
                //         <Ionicons
                //           name="chatbox-ellipses-outline"
                //           color={color}
                //           size={size}
                //         />
                //       ),
                //   })}
                />

                <Tab.Screen
                name = "Profile"
                component = {Profile}
                options={{
                  tabBarLabel: 'Profile',
                  title: 'Profile',
                  headerShown: false,
                  tabBarButton: props => (
                    <CustomTabBarButton route="Profile" {...props} />
                  ),
                }}
                // options={({route}) => ({
                //     tabBarLabel: 'Profile',
                //     headerShown:false,
                //     tabBarIcon: ({color, size}) => (
                //         <Ionicons name="person-outline" color={color} size={size} />
                //       ),
                //   })}
                />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: "transparent",
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
    height: 92,
  },
});
