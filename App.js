/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text,StyleSheet, StatusBar } from 'react-native';
import { AuthProvider } from './src/navigation/authProvider';

import RootNavigation from './src/navigation/rootNavigation';

import SignInScreen from './src/screens/authScreens/SignInScreen';
import SignUpScreen from './src/screens/authScreens/SignUpScreen';
import WelcomeScreen from './src/screens/authScreens/WelcomeScreen';


export default function App() {
  return (
    <View style = {styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor = {'black'}
      />
      {/* <WelcomeScreen/> */}
      {/* <SignInScreen/> */}
        <AuthProvider>
            <RootNavigation/>
        </AuthProvider>

        
      
      {/* <SignUpScreen/> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor: '#e5e5e5',
  },
});


