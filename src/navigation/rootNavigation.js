/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */

import React,{useContext, useState, useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import auth  from '@react-native-firebase/auth';

import AuthNavigationStack from './authNavigation';
import AppNavigationStack from './appNavigation';
import {AuthContext} from './authProvider';

const rootNavigation = () => {
    const [initializing, setInitializing] = useState(true);
    const {user, setUser} = useContext(AuthContext);

    const onAuthStateChanged = (usr) => {
        setUser(usr);
        if (initializing) {
            setInitializing(false);
        }
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
      });

    if (initializing) {return null;}

    return (

            <NavigationContainer>
            {user ? <AppNavigationStack/> :  <AuthNavigationStack/>}
            </NavigationContainer>


    );
};

export default rootNavigation;

