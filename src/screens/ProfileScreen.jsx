import React, { useRef, useState } from "react"
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from "react-native"
import CustomBottomSheetAddPhoto from "../components/Modals/CustomBottomSheetAddPhoto"

import profileImage from '../assets/images/profileIcon.png'
import defaultPhoto from '../assets/images/defaultPhoto.png'
import penImage from '../assets/images/penIcon.png'
import agreeImage from '../assets/images/galochkaIcon.png'
import CustomBottomSheetChangePassword from "../components/Modals/CustomBottomSheetChangePassword"

const ProfileScreen = () => {
  const [name, setName] = useState('Александр')
  const [surname, setSurname] = useState('Александров')
  const [patronymic, setPatronymic] = useState('Александрович')
  const [email, setEmail] = useState('alexalexalex@gmail.com')

  const addPhotoRef = useRef(null)
  const handlerPresentAddPhoto = () => addPhotoRef.current.present()
  const handlerDismissAddPhoto = () => addPhotoRef.current.dismiss()

  const changePasswordRef = useRef(null)
  const handlerPresentChangePassword = () => changePasswordRef.current.present()
  const handlerDismissChangePassword = () => changePasswordRef.current.dismiss()

  return(
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.photoContainer} onPress={handlerPresentAddPhoto}>
        <Image source={defaultPhoto} style={styles.photoImage} />
        <Text style={styles.photoText}>Фото</Text>
      </TouchableOpacity>
      <View style={styles.textAreaContainer}>
        <Text style={styles.textAreaNameField}>Имя</Text>
        <View style={styles.textAreaNameFieldContainer}>
          <TextInput
            placeholder="Введите имя"
            placeholderTextColor={'rgba(0, 194, 255, 1)'}
            style={styles.textAreaField}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Image source={penImage} style={styles.textAreaImage}/>
        </View>
      </View>
      <View style={styles.textAreaContainer}>
        <Text style={styles.textAreaNameField}>Фамилия</Text>
        <View style={styles.textAreaNameFieldContainer}>
          <TextInput
            placeholder="Введите фамилию"
            placeholderTextColor={'rgba(0, 194, 255, 1)'}
            style={styles.textAreaField}
            value={surname}
            onChangeText={(text) => setName(text)}
          />
          <Image source={penImage} style={styles.textAreaImage}/>
        </View>
      </View>
      <View style={styles.textAreaContainer}>
        <Text style={styles.textAreaNameField}>Отчество</Text>
        <View style={styles.textAreaNameFieldContainer}>
          <TextInput
            placeholder="Введите отчество"
            placeholderTextColor={'rgba(0, 194, 255, 1)'}
            style={styles.textAreaField}
            value={patronymic}
            onChangeText={(text) => setPatronymic(text)}
          />
          <Image source={penImage} style={styles.textAreaImage}/>
        </View>
      </View>
      <View style={styles.textAreaContainer}>
        <Text style={styles.textAreaNameField}>Почта</Text>
        <View style={styles.textAreaNameFieldContainer}>
          <Text style={styles.textAreaField}>{email}</Text>
          <Image source={agreeImage} style={styles.textAreaImage}/>
        </View>
      </View>
      <View style={styles.textAreaContainer}>
        <View style={styles.textAreaNameFieldContainer}>
          <Text style={styles.textAreaNameField}>Пароль</Text>
          <TouchableOpacity onPress={handlerPresentChangePassword}>
            <Text style={{...styles.textAreaField, fontSize: 18}}>Сменить пароль</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <View>
          <Text style={styles.buttonText}>Сохранить</Text>
        </View>
      </TouchableOpacity>
      <CustomBottomSheetAddPhoto
        ref={addPhotoRef}
      />
      <CustomBottomSheetChangePassword
        ref={changePasswordRef}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(23, 24, 33, 1)',
    padding: 20
  },
  photoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50
  },
  photoImage: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    borderRadius: 60,
    marginRight: 20
  },
  photoText: {
    fontFamily: 'Comfortaa',
    fontWeight: '300',
    fontSize: 21,
    lineHeight: 24,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)'
  },
  textAreaContainer: {
    marginBottom: 25
  },
  textAreaNameFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textAreaNameField: {
    fontFamily: 'Comfortaa',
    fontWeight: '300',
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'left',
    color: 'rgba(255, 255, 255, 1)'
  },
  textAreaField: {
    justifyContent: 'flex-start',
    fontFamily: 'Comfortaa',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'left',
    color: 'rgba(0, 194, 255, 1)',
    flex: 1
  },
  textAreaImage: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    backgroundColor: 'rgba(0, 194, 255, 1)',
    marginHorizontal: 35,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    marginTop: 40
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Ruda',
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '600',
    fontSize: 22
  }
})

export default ProfileScreen