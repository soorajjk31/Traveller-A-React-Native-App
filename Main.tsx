import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Signup from "./Screens/SignUp";
import Home from './Screens/Home';
import Login from './Screens/Login';
import Obd from './Screens/Onboarding';
import Feed from './Screens/Feed';
export type RootStactPramList = {
  Obd: undefined,
  Signup: undefined,
  Signin: undefined,
  Login: undefined,
  Home: undefined,
  Feed: undefined,
}

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="Obd" 
          component={Obd}
        />
        <Stack.Screen 
          name="Signup" 
          component={Signup}
        />
        <Stack.Screen 
          name="Login" 
          component={Login}
        />
        <Stack.Screen 
          name="Home" 
          component={Home}
        />
        <Stack.Screen 
          name="Feed" 
          component={Feed}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}