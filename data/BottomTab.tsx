import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React,{useState} from 'react'



export const bottomTabIcons = [
  {
      name: 'explore',
      active: '../assets/explore.png',
      inactive: '../assets/explore.png'

  },
  {
    name: 'likes',
    active: '../assets/like.png',
    inactive: '../assets/like.png'

},
{
  name: 'search',
  active: '../assets/search.png',
  inactive: '../assets/search.png'

},
{
  name: 'profile',
  active: '../assets/profileicon.png',
  inactive: '../assets/profileicon.png'

},
]

const BottomTab = ({icons}) => {
  const [activeTabs, setActiveTab] = useState('Home')

  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.explore)}>
      <Image 
        source ={{uri: icon.inactive}} style={styles.icon}
      />
    </TouchableOpacity>
  )
  return (
    <View>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon}/>
      ))} 
    </View>
  )
}

const styles = StyleSheet.create({
    icon:{
        width: 30,
        height: 30,

    }
})


export default BottomTab