import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStactPramList } from '../Main'

import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, TouchableOpacity, Pressable, TextInput, ImageBackground , Button} from 'react-native'
import globalStyle from "../component/globalStyle";

type Homeprops = NativeStackScreenProps<RootStactPramList, 'Home'>

const Home=({navigation}: Homeprops)=> {
    return (
      <SafeAreaView style = {styles.container}>
      
          {/*profile*/}
          <View style ={styles.view1}>
            <TouchableOpacity style ={styles.profile}>
            <Image 
              style = {styles.ppic}
              source={require('../assets/profile.jpg')}
            />
            </TouchableOpacity>
            <View style={styles.view2}>
              <Text style={styles.pname}> Sooraj Kumar</Text>
              <Text style={styles.txt}> where do you wanna go?</Text>
            </View>
            <Image 
              style = {styles.bell}
              source={require('../assets/bell.png')}
            />
          </View>
          
          
          
          {/*Search bar*/}
          <TouchableOpacity  style ={styles.view3}>
              <Image
                style = {styles.sicon}
                source={require('../assets/search.png')}
              />
              <Text style= {styles.searchtxt}>Search a place or a profile</Text>
            </TouchableOpacity>

            {/*Explore page*/}
            <View style ={styles.view4}>
            
            
            {/*pages*/}
            <ScrollView    horizontal={true}>
              <TouchableOpacity style ={styles.page1}>
                <Text style ={styles.pagetxt}> All</Text>
              </TouchableOpacity>
              <TouchableOpacity style ={styles.page2}>
                <Text style ={styles.pagetxt}> Trending</Text>
              </TouchableOpacity>
              <TouchableOpacity style ={styles.page3}>
                <Text style ={styles.pagetxt}> Recommended</Text>
              </TouchableOpacity>
              <TouchableOpacity style ={styles.page2}>
                <Text style ={styles.pagetxt}> Popular</Text>
              </TouchableOpacity>
              <TouchableOpacity style ={styles.page4}>
                <Text style ={styles.pagetxt}> Favourite</Text>
              </TouchableOpacity>
            </ScrollView>
            </View>


            <View style={styles.view7}>
              <ScrollView>
              <Text style ={styles.heading1}> Explore Wonderful Experience</Text>
                <View style ={styles.view5}>
              <ScrollView    horizontal={true}>
                <TouchableOpacity style ={styles.place1}>
                  <View style ={styles.inview1}>
                    <Image 
                      style = {styles.ppic1}
                      source={require('../assets/tajmahal.jpeg')}
                    />
                  </View>
                  <View style ={styles.inview2}>
                    <Text style={styles.placename}> Taj Mahal</Text>
                    <Text style={styles.placedesc}> Agra, Uttar Pradesh</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style ={styles.place1}>
                <View style ={styles.inview1}>
                    <Image 
                      style = {styles.ppic1}
                      source={require('../assets/buddhapark.jpeg')}
                    />
                  </View>
                  <View style ={styles.inview2}>
                    <Text style={styles.placename}> Buddha Park</Text>
                    <Text style={styles.placedesc}> Ravangla, Sikim</Text>
                  </View>
                                </TouchableOpacity>
                <TouchableOpacity style ={styles.place1}>
                <View style ={styles.inview1}>
                    <Image 
                      style = {styles.ppic2}
                      source={require('../assets/MehrangarhFort.jpeg')}
                    />
                  </View>
                  <View style ={styles.inview2}>
                    <Text style={styles.placename}> Mehrangarh Fort</Text>
                    <Text style={styles.placedesc}> Jodhpur Rajasthan</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style ={styles.place1}>
                <View style ={styles.inview1}>
                    <Image 
                      style = {styles.ppic3}
                      source={require('../assets/KedarnathTemple.jpeg')}
                    />
                  </View>
                  <View style ={styles.inview2}>
                    <Text style={styles.placename}> Kedarnath Temple </Text>
                    <Text style={styles.placedesc}> Kedarnath, Uttarakhand</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style ={styles.place1}>
                <View style ={styles.inview1}>
                    <Image 
                      style = {styles.ppic3}
                      source={require('../assets/Devprayag.jpeg')}
                    />
                  </View>
                  <View style ={styles.inview2}>
                    <Text style={styles.placename}> Devprayag</Text>
                    <Text style={styles.placedesc}> Devprayag, Uttarakhand </Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
              </View>
              <Text style ={styles.heading1}> Top Activities</Text>
                <View style ={styles.view6}>
              <ScrollView    horizontal={true}>
                <TouchableOpacity style ={styles.place1}>
                  <View style ={styles.inview3}>
                    <Image 
                      style = {styles.apic1}
                      source={require('../assets/Treking.jpeg')}
                    />
                    <Text style={styles.absname}> Trekking and Mountaineering</Text>
                  </View>

                </TouchableOpacity>
                <TouchableOpacity style ={styles.place1}>
                <View style ={styles.inview3}>
                    <Image 
                      style = {styles.apic1}
                      source={require('../assets/rafting.jpeg')}
                    />
                    <Text style={styles.absname}> Rafting and Kayaking</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style ={styles.place1}>
                <View style ={styles.inview3}>
                    <Image 
                      style = {styles.apic1}
                      source={require('../assets/paragliding.jpeg')}
                    />
                    <Text style={styles.absname}> Paragliding </Text>
                  </View>

                </TouchableOpacity>
                <TouchableOpacity style ={styles.place1}>
                <View style ={styles.inview3}>
                    <Image 
                      style = {styles.apic1}
                      source={require('../assets/mctour.jpeg')}
                    />
                    <Text style={styles.absname}> Motorcycle Touring</Text>
                  </View>

                </TouchableOpacity>
                
              </ScrollView>
              </View>
              </ScrollView>
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
export default Home

