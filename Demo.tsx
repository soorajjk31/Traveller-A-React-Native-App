import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Signup from "./Screens/SignUp";
import Home from './Screens/Home';
import Login from './Screens/Login';
import Obd from './Screens/Onboarding';
import Feed from './Screens/Feed';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';
export type RootStactPramList = {
  Obd: undefined,
  Signup: undefined,
  Signin: undefined,
  Login: undefined,
  Home: undefined,
  Feed: undefined,
}

const Stack = createNativeStackNavigator();
const insideStack  = createNativeStackNavigator();
const Stack1  = createNativeStackNavigator();

function Stacklayout() {
    return (
        <Stack1.Navigator screenOptions={{headerShown: false}}>
            <Stack1.Screen 
          name="Obd" 
          component={Obd}
        />
        <Stack1.Screen 
          name="Signup" 
          component={Signup}
        />
        <Stack1.Screen 
          name="Login" 
          component={Login}
        />
    </Stack1.Navigator>
    )
}

function InsideLayout() {
    return (
        <insideStack.Navigator screenOptions={{headerShown: false}}>
        <insideStack.Screen name="Home" component={Home}/>
      </insideStack.Navigator>
    )
}

export default function Main() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => 
  onAuthStateChanged(FIREBASE_AUTH, (user) => {
    console.log('user', user)
    setUser(user)
  }))
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        {user? (<Stack.Screen name="Inside" component={InsideLayout} />) : (<Stack.Screen name="New" component={Stacklayout}/>)}

      </Stack.Navigator>
    </NavigationContainer>
  )
}