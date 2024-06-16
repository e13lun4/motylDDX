import React, { useEffect } from "react"
import { View, Text, Image, StyleSheet } from 'react-native'

import backgroundImage from '../assets/images/backgroundLoader.png'
import logoImage from '../assets/images/logoLoader.png'

const IntroScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Choose')
    }, 1700)
  }, [])

  return(
    <View style={styles.container}>
      <View style={styles.container}>
        <Image source={logoImage} style={styles.logo}/>
      </View>
      <Text style={styles.logoText}>Moove</Text>
      <Image source={backgroundImage} style={styles.background}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    flex: 1,
    height: 163,
    width: 177,
    zIndex: 999,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    top: 300
  },
  background: {
    flex: 0,
    width: '100%',
    height: '100%'
  },
  logoText: {
    flex: 1,
    zIndex: 999,
    position: 'absolute',
    bottom: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'rgba(0, 194, 255, 1)',
    fontSize: 28,
    fontFamily: 'Comfortaa',
    fontWeight: '600'
  }
})

export default IntroScreen