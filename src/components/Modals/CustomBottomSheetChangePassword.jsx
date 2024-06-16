import React, { forwardRef, useCallback, useMemo, useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { BottomSheetModal, BottomSheetHandle, BottomSheetBackdrop, BottomSheetTextInput, BottomSheetScrollView } from '@gorhom/bottom-sheet'

import hidePath from '../../assets/images/hide1.png'
import viewPath from '../../assets/images/view1.png'
import penImage from '../../assets/images/penIcon.png'

const CustomBottomSheetChangePassword = forwardRef(({children, title}, ref) => {
  const snapPoints = useMemo(() => ['60%'], [])

  const renderBackdrop = useCallback(
    (props) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props}/>
  )

  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  return(
    <BottomSheetModal
      stackBehavior='push'
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      // style={{marginHorizontal: 50}}
      handleComponent={() => (
        <View style={{backgroundColor: 'rgba(57, 58, 69, 1)', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
          <BottomSheetHandle indicatorStyle={{backgroundColor: 'rgba(232, 234, 241, 1)', width: 40}}/>
          <Text style={styles.modalTaskTitle}>Сменить пароль</Text>
        </View>
      )}
    >
      <BottomSheetScrollView style={styles.container}>
        <View style={styles.elementsContainer}>
          <View>
            <Text style={styles.elementText}>Старый пароль</Text>
            <View style={styles.elementContainer}>
              <BottomSheetTextInput
                placeholder='Введите старый пароль'
                placeholderTextColor={'rgba(255, 255, 255, 1)'}
                secureTextEntry={!showPassword}
                style={styles.elementTextInput}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <Image source={viewPath} style={{height: 24, width: 24}}/>
                ) : (
                  <Image source={hidePath} style={{height: 24, width: 24}}/>
                )}
              </TouchableOpacity>
              <Image source={penImage} style={styles.elementImage}/>
            </View>
          </View>
          <View>
            <Text style={styles.elementText}>Новый пароль</Text>
            <View style={styles.elementContainer}>
              <BottomSheetTextInput
                placeholder='Введите новый пароль'
                placeholderTextColor={'rgba(255, 255, 255, 1)'}
                secureTextEntry={!showNewPassword}
                style={styles.elementTextInput}
                value={newPassword}
                onChangeText={(text) => setNewPassword(text)}
              />
              <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)}>
                {showNewPassword ? (
                  <Image source={viewPath} style={{height: 24, width: 24}}/>
                ) : (
                  <Image source={hidePath} style={{height: 24, width: 24}}/>
                )}
              </TouchableOpacity>
              <Image source={penImage} style={styles.elementImage}/>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <View>
              <Text style={styles.buttonText}>Сменить</Text>
            </View>
          </TouchableOpacity>
        </View>
        {children}
      </BottomSheetScrollView>
    </BottomSheetModal>
  )
})

const styles = StyleSheet.create({
  modalTaskTitle: {
    fontFamily: 'Ruda',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 30,
    color: 'rgba(0, 194, 255, 1)',
    textAlign: 'center',
    marginBottom: 10
  },
  container: {
    backgroundColor: 'rgba(57, 58, 69, 1)',
    flex: 1
  },
  elementsContainer: {
    padding: 30,
    paddingTop: 30,
    flex: 1
  },
  elementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flex: 0,
    borderColor: 'rgba(0, 194, 255, 1)',
    borderWidth: 1,
    borderRadius: 15,
  },
  elementImage: {
    height: 32,
    width: 32,
    resizeMode: 'contain',
    marginLeft: 5
  },
  elementText:{
    fontFamily: 'Comfortaa',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'left',
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: 5
  },
  elementTextInput: {
    fontSize: 18,
    fontFamily: 'Comfortaa',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    flex: 1
  },
  buttonContainer: {
    backgroundColor: 'rgba(0, 194, 255, 1)',
    marginHorizontal: 35,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    marginTop: 60
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Ruda',
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '600',
    fontSize: 22
  }
})

export default CustomBottomSheetChangePassword