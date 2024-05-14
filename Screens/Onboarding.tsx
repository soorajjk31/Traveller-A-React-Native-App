import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


import globalStyle from "../component/globalStyle";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStactPramList } from '../Main'
import Signup from './SignUp';
import Login from './Login';



type obdProps = NativeStackScreenProps<RootStactPramList, "Obd">


const Obd = ({navigation}: obdProps) => (
  <View style={styles.container}>
    <ImageBackground source={require('../assets/obd.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Traveller</Text>
        <View style={styles.view1}>
            <Text style={styles.text1}>Explore the world here</Text>
            <Text style={styles.text2}>We invite you to places you've never been visited. Let's explore together!</Text>
            <TouchableOpacity style={styles.view2} onPress={()=> navigation.push('Signup')}>
                <Text style={styles.text3}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.view3}>
                <Text style={styles.text4} onPress={()=> navigation.push('Login')}>Already have an account?</Text>
            </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    top: '12%'
  },
  view1:{
    backgroundColor: '#03545D',
    top: '58%',
    alignSelf: 'center',
    width: '90%',
    height: '30%',
    borderRadius: 10,
    opacity: 0.7


  },
  text1:{
    color: 'white',
    fontSize: 25,
    fontWeight: '900',
    textAlign: 'center',
    top: '12%'
  },
  text2:{
    color: 'white',
    fontSize: 15,
    margin: 15,
    paddingHorizontal: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    top: '12%'
  },
  view2:{
    backgroundColor: '#1D2F30',
    top: '15%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '20%',
    borderRadius: 10,
    opacity: 0.7
  },
  text3:{
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  },
  view3:{
    top: '20%',
  },
  text4:{
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  }
});

export default Obd;