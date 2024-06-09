import React, { useState } from "react"
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from "react-native"
import { useForm, Controller } from 'react-hook-form'

import hidePath from '../assets/images/hide1.png'
import viewPath from '../assets/images/view1.png'

const RegScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false)

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: '',
      surname: '',
      patronymic: '',
      email: '',
      password: '',
    }
  })

  const regHandle = async (data) => {
    const { name, surname, patronymic, email, password } = data
    const formData = new FormData()
    formData.append('name', name)
    formData.append('surname', surname)
    formData.append('patronymic', patronymic)
    formData.append('email', email)
    formData.append('password', password)
    console.log(formData)
    navigation.navigate('SuccessReg')
  }

  return(
    <ScrollView style={styles.container}>
      <View style={{justifyContent: 'center', flex: 1}}>
        <View style={{width: '80%', height: 'auto', borderColor: 'rgba(0, 194, 255, 1)', borderRadius: 25, borderWidth: 1, justifyContent: 'center', alignSelf: 'center'}}>
          <View style={{paddingTop: 40, paddingBottom: 30}}>
            <Text style={styles.title}>Регистрация</Text>
          </View>
          <View style={{paddingHorizontal: 30, paddingBottom: 30}}>
            <View style={{paddingBottom: 25}}>
              <Text style={styles.textInputTitle}>Имя:</Text>
              <View>
                <Controller
                  control={control}
                  name="name"
                  rules={{ required: 'Поле является обязательным' }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Введите имя"
                      placeholderTextColor={'rgba(142, 142, 142, 1)'}
                      onBlur={onBlur}
                      value={value}
                      onChangeText={onChange}
                      style={[styles.textInput, errors.name && styles.inputError]}
                    />
                  )}
                />
                {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
              </View>
            </View>
            <View style={{paddingBottom: 25}}>
              <Text style={styles.textInputTitle}>Фамилия:</Text>
              <View>
                <Controller
                  control={control}
                  name="surname"
                  rules={{ required: 'Поле является обязательным' }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Введите фамилию"
                      placeholderTextColor={'rgba(142, 142, 142, 1)'}
                      onBlur={onBlur}
                      value={value}
                      onChangeText={onChange}
                      style={[styles.textInput, errors.surname && styles.inputError]}
                    />
                  )}
                />
                {errors.surname && <Text style={styles.errorText}>{errors.surname.message}</Text>}
              </View>
            </View>
            <View style={{paddingBottom: 25}}>
              <Text style={styles.textInputTitle}>Отчество:</Text>
              <View>
                <Controller
                  control={control}
                  name="patronymic"
                  rules={{ required: 'Поле является обязательным' }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Введите отчество"
                      placeholderTextColor={'rgba(142, 142, 142, 1)'}
                      onBlur={onBlur}
                      value={value}
                      onChangeText={onChange}
                      style={[styles.textInput, errors.patronymic && styles.inputError]}
                    />
                  )}
                />
                {errors.patronymic && <Text style={styles.errorText}>{errors.patronymic.message}</Text>}
              </View>
            </View>
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
            <View>
              <Text style={styles.textInputTitle}>Пароль:</Text>
              <View>
                <Controller
                  control={control}
                  name="password"
                  rules={{ required: 'Поле является обязательным' }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                      <TextInput
                        placeholder="Введите пароль"
                        placeholderTextColor={'rgba(142, 142, 142, 1)'}
                        secureTextEntry={!showPassword}
                        onBlur={onBlur}
                        value={value}
                        onChangeText={onChange}
                        style={[styles.textInputPassword, errors.password && styles.inputError]}
                      />
                      <TouchableOpacity style={{position: 'absolute', padding: 12}} onPress={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                          <Image source={viewPath} style={{height: 24, width: 24}}/>
                        ) : (
                          <Image source={hidePath} style={{height: 24, width: 24}}/>
                        )}
                      </TouchableOpacity>
                    </View>
                  )}
                />
                {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: 30}}>
            <Text style={styles.footer}>Уже есть аккаунт? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
              <Text style={{...styles.footer, color: 'rgba(0, 194, 255, 1)'}}>Войти</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit(regHandle)}>
            <View>
              <Text style={styles.buttonText}>Зарегистрироваться</Text>
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
    paddingTop: 20
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
  textInputPassword: {
    backgroundColor: 'rgba(57, 58, 69, 1)',
    borderRadius: 15,
    fontFamily: 'Comfortaa',
    color: 'white',
    paddingLeft: 15,
    flex: 1
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

export default RegScreen