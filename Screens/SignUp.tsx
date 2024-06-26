import { ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useContext, useState } from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStactPramList } from '../Main'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Signup from './SignUp';
import { FIREBASE_AUTH } from "../firebaseConfig";
import Login from './Login';

type signupprops = NativeStackScreenProps<RootStactPramList, "Signup">

const SignUp= ({navigation}: signupprops)=> {


    const [error, setError] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPwd, setConfirmPwd] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH


    const handleSignup =()=>{
        if(
            name.length < 1 ||
            email.length < 1 ||
            password.length < 1 ||
            confirmPwd.length < 1
        )
            setError("All fields are required")
        else if(password !== confirmPwd)
            setError("Passwords do not match")
        else{
            
        }
    }

    const signUp = async () => {
        setLoading(true);
        try{
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
            alert('check your emails')

        } catch (error){
            console.log(error);
            alert('Sign Up failed: '+ error.message)

        } finally{
            setLoading(false);
        }
    }
  return (
    <SafeAreaView style = {styles.container}>
        <KeyboardAvoidingView>

            <View style = {styles.view1}>
            <Image 
                    style = {styles.nav}
                    source={require('../assets/backnav.png')}
                />
            <Image 
                    style = {styles.Image}
                    source={require('../assets/car.png')}
                />
                <Text style = {styles.reg}>Register</Text>
                <Text style = {styles.create}>Create your new account</Text>
            </View>
            <View style = {styles.view2}>
                <Image 
                    style = {styles.Image1}
                    source={require('../assets/profile.png')}
                />
                <TextInput
                    placeholder='Full Name'
                    numberOfLines = { 1}
                    cursorColor={'#000'}
                    style = {styles.txtip}
                    onChangeText={(text) => {
                        setError(''),
                        setName(text)
                    }}
                />
            </View>
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
                    onChangeText={(text)=>{
                        setError('')
                        setEmail(text)
                    }}
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
                    onChangeText={(text) => {
                        setError(''),
                        setPassword(text)
                    }}
                />
            <TouchableOpacity>
                <Image 
                    style = {styles.Image1}
                    source={require('../assets/see.png')}
                />
            </TouchableOpacity>
            </View>
            <View style = {styles.view2}>
                <Image 
                    style = {styles.Image1}
                    source={require('../assets/password.png')}
                />
                <TextInput
                    placeholder='Confirm Password'
                    keyboardType='visible-password'
                    numberOfLines = { 1}
                    cursorColor={'#000'}
                    style = {styles.txtip}
                    onChangeText={(text) => {
                        setError(''),
                        setConfirmPwd(text)
                    }}
                />
            <TouchableOpacity>
                <Image 
                    style = {styles.Image1}
                    source={require('../assets/see.png')}
                />
            </TouchableOpacity>
            </View>

            <View style = {styles.view2}>
                    <TouchableOpacity style = {styles.btn} onPress={signUp}>
                        <Text style = {styles.txt2}> Sign Up </Text>
                    </TouchableOpacity>
                </View>

            <View style = {styles.view3}>
                <Text style = {styles.cre}>By signing you agree to our { /*<TouchableOpacity style = {styles.terms}><Text style = {styles.termstxt}> */}Terms of use{/*</Text></TouchableOpacity>*/} and {/*<TouchableOpacity><Text>*/}privacy notice{/*</Text></TouchableOpacity>*/}</Text>
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
            <TouchableOpacity style = {styles.view4} onPress={()=> navigation.replace('Login')}>
                <Text style = {styles.continue}>Already have an account?<Text style = {styles.lgn}> Login</Text> </Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? 40 : 0,
        backgroundColor: '#EEF2F2',
        flex: 1
    },
    view:{
        flexDirection: 'row',
        width: '100%',
        height: '20%',
        justifyContent: 'flex-end',
    },
    nav:{
        width: 46,
        height: 46,
        top: 10,
        right: -10,
        alignSelf: 'flex-start'
    },
    Image:{
        position: 'absolute',
        top: -50,
        left: '38%',
        width: '100%',
        height: '120%',
        alignSelf: 'flex-end',
        opacity: 0.5
    },
    view1:{
        alignItems:'center',
        backgroundColor: '#EEF2F2',
        marginBottom: '5%'
    },
    reg:{
        marginTop: 20,
        fontWeight:'900',
        fontSize: 30,
        color: '#005B54',
    },
    create:{
        fontSize: 15
    },

    view2:{
        flexDirection: 'row',
        margin: '2%',
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
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    cre:{
        marginHorizontal: 30,
        textAlign: 'center'
    },
    terms: {


    },
    termstxt: {
        
    },
    continue:{
        textAlign: 'center',
        margin: '5%'
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
})

export default SignUp