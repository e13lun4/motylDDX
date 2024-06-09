import React, { useState } from "react"
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from "react-native"
import { useForm, Controller } from 'react-hook-form'

const RecoveryPasswordScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      email: '',
    }
  })

  const recHandle = async (data) => {
    const { email } = data
    const formData = new FormData()
    formData.append('email', email)
    console.log(formData)
    navigation.navigate('SuccessRec')
  }

  return(
    <View style={styles.container}>
      <View style={{justifyContent: 'center', flex: 1}}>
        <View style={{width: '80%', height: 'auto', borderColor: 'rgba(0, 194, 255, 1)', borderRadius: 25, borderWidth: 1, justifyContent: 'center', alignSelf: 'center'}}>
          <View style={{paddingTop: 40, paddingBottom: 30}}>
            <Text style={styles.title}>Восстановление{'\n'} пароля</Text>
          </View>
          <View style={{paddingHorizontal: 30, paddingBottom: 0}}>
            <View style={{paddingBottom: 25}}>
              <Text style={styles.textInputTitle}>Почта:</Text>
              <View>
                <Controller
                  control={control}
                  name="email"
                  rules={{ required: 'Поле является обязательным' }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Введите почту"
                      placeholderTextColor={'rgba(142, 142, 142, 1)'}
                      onBlur={onBlur}
                      value={value}
                      onChangeText={onChange}
                      style={[styles.textInput, errors.email && styles.inputError]}
                    />
                  )}
                />
                {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: 30}}>
            <Text style={styles.footer}>Уже есть аккаунт? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
              <Text style={{...styles.footer, color: 'rgba(0, 194, 255, 1)'}}>Войти</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingBottom: 50, justifyContent: 'center'}}>
            <Text style={styles.footer}>Нет аккаунта?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Reg')}>
              <Text style={{...styles.footer, color: 'rgba(0, 194, 255, 1)'}}>Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit(recHandle)}>
            <View>
              <Text style={styles.buttonText}>Отправить</Text>
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
  },
  inputError: {
    // borderColor: 'red',
    // borderWidth: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
})

export default RecoveryPasswordScreen