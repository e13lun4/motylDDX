import React, { useState } from "react"
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from "react-native"

import hidePath from '../assets/images/hide1.png'
import viewPath from '../assets/images/view1.png'

const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return(
    <ScrollView style={styles.container}>
      <View style={{justifyContent: 'center', flex: 1}}>
        <View style={{width: '80%', height: 'auto', borderColor: 'rgba(0, 194, 255, 1)', borderRadius: 25, borderWidth: 1, justifyContent: 'center', alignSelf: 'center'}}>
          <View style={{paddingTop: 40, paddingBottom: 30}}>
            <Text style={styles.title}>Авторизация</Text>
          </View>
          <View style={{paddingHorizontal: 30, paddingBottom: 50}}>
            <View style={{paddingBottom: 25}}>
              <Text style={styles.textInputTitle}>Почта:</Text>
              <View>
                <TextInput
                  placeholder="Введите почту"
                  placeholderTextColor={'rgba(142, 142, 142, 1)'}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={styles.textInput}
                />
              </View>
            </View>
            <View>
              <Text style={styles.textInputTitle}>Пароль:</Text>
              <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                <TextInput
                  placeholder="Введите пароль"
                  placeholderTextColor={'rgba(142, 142, 142, 1)'}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  style={{...styles.textInput, flex: 1}}
                />
                <TouchableOpacity style={{position: 'absolute', padding: 12}} onPress={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <Image source={viewPath} style={{height: 24, width: 24}}/>
                  ) : (
                    <Image source={hidePath} style={{height: 24, width: 24}}/>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: 30}}>
            <TouchableOpacity onPress={() => navigation.navigate('Rec')}>
              <Text style={{...styles.footer, color: 'rgba(0, 194, 255, 1)'}}>Восстановить </Text>
            </TouchableOpacity>
            <Text style={styles.footer}>пароль</Text>
          </View>
          <View style={{paddingBottom: 50, justifyContent: 'center'}}>
            <Text style={styles.footer}>Нет аккаунта?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Reg')}>
              <Text style={{...styles.footer, color: 'rgba(0, 194, 255, 1)'}}>Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <View>
              <Text style={styles.buttonText}>Войти</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(23, 24, 33, 1)',
    paddingTop: 115
  },
  title: {
    fontFamily: 'Comfortaa',
    fontWeight: '400',
    color: 'rgba(0, 194, 255, 1)',
    textAlign: 'center',
    fontSize: 24
  },
  textInputTitle: {
    fontFamily: 'Comfortaa',
    fontWeight: '400',
    fontSize: 14,
    color: 'rgba(142, 142, 142, 1)'
  },
  textInput: {
    backgroundColor: 'rgba(57, 58, 69, 1)',
    borderRadius: 15,
    fontFamily: 'Comfortaa',
    color: 'white',
    paddingLeft: 15
  },
  footer: {
    fontFamily: 'Comfortaa',
    color: 'rgba(142, 142, 142, 1)',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center'
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

export default AuthScreen