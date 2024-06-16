import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const ChooseScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.visitText}>Добро пожаловать!</Text>
        <Text style={styles.chooseText}>Выберите:</Text>
        <View style={styles.chooseContainer}>
          <Text style={styles.choosenText}>Я </Text>
          <TouchableOpacity onPress={() => console.log('trainer')}>
            <Text style={{...styles.choosenText, color: 'rgba(0, 194, 255, 1)'}}>тренер </Text>
          </TouchableOpacity>
          <Text style={styles.choosenText}>Я </Text>
          <TouchableOpacity onPress={() => navigation.navigate('PageViewer')}>
            <Text style={{...styles.choosenText, color: 'rgba(0, 194, 255, 1)'}}>пользователь</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(23, 24, 33, 1)'
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  visitText: {
    flex: 0,
    fontFamily: 'Comfortaa',
    fontWeight: '400',
    fontSize: 26,
    lineHeight: 28,
    color: 'rgba(255, 255, 255, 1)',
    paddingBottom: 20
  },
  chooseText: {
    flex: 0,
    fontFamily: 'Comfortaa',
    fontWeight: '300',
    fontSize: 18,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 1)',
    paddingBottom: 5
  },
  chooseContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 0
  },
  choosenText: {
    fontFamily: 'Comfortaa',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 1)'
  }
})

export default ChooseScreen