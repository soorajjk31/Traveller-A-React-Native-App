import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStactPramList } from '../Main'

import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, TouchableOpacity, Pressable, TextInput, ImageBackground } from 'react-native'

type Feedprops = NativeStackScreenProps<RootStactPramList, 'Feed'>

const Feed=({navigation}: Feedprops)=> {
    return (
      <SafeAreaView style = {styles.container}>
      
        {/*profile*/}
        <View>
          <Text style={styles.logo}>Feed</Text>
        </View>       
          
          
          


            <View style={styles.view8}>
              <View style={styles.navBar}>
                <TouchableOpacity style ={styles.navicon}>
                <Image
                style = {styles.nicon1}
                source={require('../assets/explore.png')}
              />
                </TouchableOpacity>
                <TouchableOpacity style ={styles.navicon}>
                <Image
                style = {styles.nicon2}
                source={require('../assets/like.png')}
              />
                </TouchableOpacity>
                <TouchableOpacity style ={styles.navicon}>
                <Image
                style = {styles.nicon2}
                source={require('../assets/search.png')}
              />
                </TouchableOpacity>
                <TouchableOpacity style ={styles.navicon}>
                <Image
                style = {styles.nicon2}
                source={require('../assets/profileicon.png')}
              />
                </TouchableOpacity>
              </View>
            </View>

        </SafeAreaView>
       )
    }     


    const styles = StyleSheet.create({
        container:{
            flex: 1,
            paddingTop: Platform.OS === 'android' ? 40 : 0,
            backgroundColor: '#EEF2F2'


        },

        logo:{
          fontSize: 25,
          color: '#005B54',
          
        },
        view1: {
          height: '10%',
          flexDirection: 'row'
        },
        profile:{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 15,
          borderRadius: 40,
          height: 60,
          width: 60,
          backgroundColor: '#ffffff'
        },
        ppic:{
          resizeMode: 'contain',
          height: 55,
          width: 55,
          borderRadius: 50
        },
        view2:{
          marginTop: 25
        },

        pname:{
          fontSize: 15,
          color: '#617A8A',
          fontWeight: '900'
        },
        txt:{
          fontSize: 12,
          color: '#8D8A8A',
          fontWeight: '500'

        },
        bell:{
          position: 'absolute',
          right: 10,
          top: 30,
          resizeMode: 'contain',
          height: 25
        },

        view3:{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          margin: 20,
          borderRadius: 30,
          height: 45,
          backgroundColor: '#ffffff'
        },
        searchtxt:{
          color: '#A4A4A4',
          fontWeight: '800'
        },
        sicon:{
          margin: 10,
          resizeMode: 'contain',
          height: 22
        },

        view4:{
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          
        },
        page1:{
          marginHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
          height: 40,
          width: 40,
          backgroundColor: '#ffffff'
        },
        page2:{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
          height: 40,
          width: 80,
          backgroundColor: '#ffffff'
        },
        page3:{
          marginHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
          height: 40,
          width: 120,
          backgroundColor: '#ffffff'
        },
        page4: {
          marginHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
          height: 40,
          width: 90,
          backgroundColor: '#ffffff'
        },
        pagetxt:{
          color: '#A4A4A4',
          fontWeight: '700',
          left: -2
        },
        heading1:{
          color: '#1B6C66',
          fontWeight: '900',
          fontSize: 17,
          marginTop: 12,
          marginLeft: 10

        },
        view5:{
          height: 270,
        },
        place1:{
          margin: 10,
          height: 250,
          width: 170
        },
        inview1:{
          borderTopRightRadius: 10,
          height: '75%'
        },
        inview2:{
          borderBottomEndRadius: 10,
          borderBottomStartRadius: 10,
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          height: '25%'
        },
        ppic1:{
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          height: '130%',
          width: 170
        },
        placename:{
          marginHorizontal: 5,
          fontSize: 15,
          color: '#617A8A',
          fontWeight: '800'
        },
        placedesc:{
          marginHorizontal: 5,
          fontSize: 12,
          color: '#8D8A8A',
          fontWeight: '500'
        },
        ppic2:{
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          height: '120%',
          width: 170
        },
        ppic3:{
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          height: '110%',
          width: 170
        },


        view6:{
          height: 280,
          marginTop: 10
        },
        inview3:{
          borderRadius: 10,
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          height: '100%'
          
        },
        apic1:{
          borderRadius: 10,
          height: '100%',
          width: 170
          
        },


        view7:{
          height: 450,
        },


        view8:{
          height: 70
        },
        navBar:{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
          margin: 20,
          height: 60,
          borderRadius: 20

        },
        navicon:{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 23,
          borderRadius: 40,
          height: 35,
          width: 35,
          top: -10
        },
        nicon1:{
          resizeMode: 'contain',
          height: 25
        },
        nicon2:{
          resizeMode: 'contain',
          height: 20
        },
        absname:{
          position: 'absolute',
          top: 200,
          marginHorizontal: 5,
          fontSize: 15,
          color: '#ffffff',
          fontWeight: '900'
        },
        absdesc:{
          position: 'absolute',
          top: 220,
          marginHorizontal: 5,
          fontSize: 12,
          color: '#ffffff',
          fontWeight: '500'
        },

        
    })
export default Feed

