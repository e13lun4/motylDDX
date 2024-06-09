import React, { useState } from "react"
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from "react-native"

const SuccessfullRegScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <View style={{justifyContent: 'center', flex: 1}}>
        <View style={{width: '80%', height: 'auto', borderColor: 'rgba(0, 194, 255, 1)', borderRadius: 25, borderWidth: 1, justifyContent: 'center', alignSelf: 'center'}}>
          <View style={{paddingTop: 40, paddingBottom: 20}}>
            <Text style={styles.title}>Отлично!{'\n'} Письмо отправлено на{'\n'} указаную почту</Text>
          </View>
          <View style={{paddingTop: 0, paddingBottom: 50}}>
            <Text style={styles.title}>Перейдите по ссылке в{'\n'} письме чтобы{'\n'} подтвердить{'\n'} регистрацию</Text>
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Auth')}>
            <View>
              <Text style={styles.buttonText}>Авторизоваться</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(23, 24, 33, 1)',
  },
  title: {
    fontFamily: 'Comfortaa',
    fontWeight: '400',
    color: 'rgba(0, 194, 255, 1)',
    textAlign: 'center',
    fontSize: 20
  },
  buttonContainer: {
    backgroundColor: 'rgba(0, 194, 255, 1)',
    marginHorizontal: 35,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    marginBottom: 40
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Ruda',
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '600',
    fontSize: 22
  }
})

export default SuccessfullRegScreen