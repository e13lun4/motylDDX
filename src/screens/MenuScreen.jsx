import React from "react"
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"

import profileImage from '../assets/images/profileIcon.png'
import trainersImage from '../assets/images/trainersIcon.png'
import techImage from '../assets/images/techIcon.png'
import exerciseImage from '../assets/images/exerciseIcon.png'
import planImage from '../assets/images/planIcon.png'
import chatImage from '../assets/images/chatIcon.png'

const MenuScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      {/* <Text style={styles.headerText}>Меню</Text> */}
      <TouchableOpacity style={styles.elementContainer} onPress={() => navigation.navigate('Profile')}>
        <Image source={profileImage} style={styles.elementImage}/>
        <Text style={styles.elementText}>Профиль</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.elementContainer} onPress={() => navigation.navigate('Trainers')}>
        <Image source={trainersImage} style={styles.elementImage}/>
        <Text style={styles.elementText}>Тренера</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.elementContainer} onPress={() => console.log('Linking to tech site')}>
        <Image source={techImage} style={styles.elementImage}/>
        <Text style={styles.elementText}>Тех.поддержка</Text>
      </TouchableOpacity>
      <View style={{borderColor: 'rgba(57, 58, 69, 1)', borderWidth: 1, width: '100%', marginBottom: 30}}/>
      <TouchableOpacity style={styles.elementContainer} onPress={() => navigation.navigate('Exercises')}>
        <Image source={exerciseImage} style={styles.elementImage}/>
        <Text style={styles.elementText}>Упражнения</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.elementContainer} onPress={() => navigation.navigate('Plan')}>
        <Image source={planImage} style={styles.elementImage}/>
        <Text style={styles.elementText}>План</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.elementContainer} onPress={() => navigation.navigate('Chats')}>
        <Image source={chatImage} style={styles.elementImage}/>
        <Text style={styles.elementText}>Чат</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(23, 24, 33, 1)',
    flex: 1,
    alignItems: 'flex-start',
    padding: 20
  },
  headerText: {
    fontFamily: 'Ruda',
    fontWeight: '600',
    fontSize: 32,
    color: 'rgba(0, 194, 255, 1)'
  },
  elementContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 40
  },
  elementText: {
    fontFamily: 'Comfortaa',
    fontWeight: '300',
    fontSize: 18,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 1)',
  },
  elementImage: {
    height: 32,
    width: 32,
    resizeMode: 'contain',
    marginRight: 20
  }
})

export default MenuScreen