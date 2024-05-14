import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStactPramList } from '../Main'
import { Formik } from "formik";
import * as Yup from 'yup'
import { validate } from 'email-validator';


import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, TouchableOpacity, Pressable, TextInput, ImageBackground } from 'react-native'

type Loginprops = NativeStackScreenProps<RootStactPramList, 'Login'>

const Login=({navigation}: Loginprops)=> {
    return (
        <SafeAreaView style = {styles.container}>
     
            <View style = {styles.view}>
                <ImageBackground
                    style = {styles.Image}
                    source={require('../assets/login.png')}
                    resizeMode="contain"
                >
                    <Text style = {styles.txt}>
                        Welcome back
                    </Text>
                    <Text style = {styles.txt1}>
                        Login to your account
                    </Text>
                </ImageBackground>
            </View>
            <View style = {styles.view1}>
                <View style = {styles.view2}>
                    <Image 
                        style = {styles.Image1}
                        source={require('../assets/email.png')}
                    />
                    <TextInput
                        placeholder='Email'
                        numberOfLines = { 1}
                        cursorColor={'#000'}
                        style = {styles.txtip}
                    />
                </View>
                <View style = {styles.view2}>
                    <Image 
                        style = {styles.Image1}
                        source={require('../assets/password.png')}
                    />
                    <TextInput
                        placeholder='Password'
                        numberOfLines = { 1}
                        keyboardType='visible-password'
                        cursorColor={'#000'}
                        style = {styles.txtip}
                    />
                <TouchableOpacity>
                    <Image 
                        style = {styles.Image1}
                        source={require('../assets/see.png')}
                    />
                </TouchableOpacity>
                </View>
                <View style = {styles.view2}>
                    <TouchableOpacity style = {styles.btn} onPress={()=> navigation.replace('Home')}>
                        <Text style = {styles.txt2}> Login </Text>
                    </TouchableOpacity>
                </View>
            </View>

            
            <View style = {styles.view4}>
                <Text style = {styles.continue}>━━━━━━━━━━ Or Continue with ━━━━━━━━━━ </Text>
            </View>
            <View style = {styles.view5}>
                <TouchableOpacity style = {styles.view6}>
                <Image 
                    style = {styles.Image2}
                    source={require('../assets/facebook.png')}
                />
                </TouchableOpacity>    
                <TouchableOpacity style = {styles.view6}>
                <Image 
                    style = {styles.Image2}
                    source={require('../assets/google.png')}
                />
                </TouchableOpacity>
                <TouchableOpacity style = {styles.view6}>
                <Image 
                    style = {styles.Image2}
                    source={require('../assets/apple.png')}
                />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style = {styles.view7} onPress={()=> navigation.replace('Signup')}>
                <Text style = {styles.continue}>Don't have an account?<Text style = {styles.lgn}> Sign up</Text> </Text>
            </TouchableOpacity>

            

     
        </SafeAreaView>
       )
    }     


    const styles = StyleSheet.create({
        container:{
            flex: 1,
            paddingTop: Platform.OS === 'android' ? 40 : 0,

        },
        view:{
            flexDirection: 'row',
            width: '100%',
            height: '50%',
            justifyContent: 'flex-end',
        },
        Image:{
            flex: 1
        },
        txt:{
            alignSelf: 'center',
            fontWeight: '800',
            fontSize: 30,
            color: 'white',
            top: '60%'
        },
        txt1:{
            alignSelf: 'center',
            fontSize: 15,
            color: 'white',
            top: '61%'
        },
        view1:{
            width: '100%',
            height: '30%'
        },
        view2:{
            
            flexDirection: 'row',
            margin: '3%',
            borderRadius: 10,
            backgroundColor: '#BCD6D6',
            justifyContent: 'flex-start',
            alignSelf: 'center',
            alignItems: 'center',
            width: '90%',
            height: 52
        },
        Image1:{
            marginLeft: 10,
            height: 20,
            width: 20,
        },
        txtip:{
            width: '73%',
            height:'80%' ,
            marginLeft: '5%'
        },

        view3:{
            width: '100%',
            height: '20%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        btn:{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#005B54',
            borderRadius: 10,

            width: '100%',
            height:'100%' ,
        },
        txt2:{
            alignSelf: 'center',
            fontSize: 18,
            color: 'white',
        },
        continue:{
            textAlign: 'center',
            marginBottom: '5%'
        },
        view4:{

        },

        view5:{
            flexDirection: 'row',
        },
        view6:{
            backgroundColor: 'white',
            width: 73,
            height: 57,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: '6%',
            borderRadius: 15
        },
        Image2:{
            height: 20,
            width: 20,
        },
        lgn:{
            color: '#005B54',
            fontWeight: '800'
        },
        view7:{
            margin: '3%',
            alignItems: 'center'
        },
        
    })
export default Login

