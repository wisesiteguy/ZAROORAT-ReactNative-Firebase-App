/* eslint-disable prettier/prettier */

import React from 'react';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';


TransitionPresets;
import WelcomeScreen from '../screens/authScreens/WelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';

const AuthStack = createStackNavigator();

export default function AuthNavigationStack(){
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name = "WelcomeScreen"
                component = {WelcomeScreen}
                options = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid,

                }}
                />
                <AuthStack.Screen
                name = "SignInScreen"
                component = {SignInScreen}
                options = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid,
                }}
                />
                <AuthStack.Screen
                name = "SignUpScreen"
                component = {SignUpScreen}
                options = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid,
                }}
                />
        </AuthStack.Navigator>
    );
}
