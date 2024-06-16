import React, { forwardRef, useCallback, useMemo } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { BottomSheetModal, BottomSheetHandle, BottomSheetBackdrop } from '@gorhom/bottom-sheet'

import cameraImage from '../../assets/images/cameraIcon.png'
import galleryImage from '../../assets/images/galleryIcon.png'
import trashImage from '../../assets/images/trashIcon.png'

const CustomBottomSheetAddPhoto = forwardRef(({children, title}, ref) => {
  const snapPoints = useMemo(() => ['35%'], [])

  const renderBackdrop = useCallback(
    (props) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props}/>
  )

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
          <Text style={styles.modalTaskTitle}>Добавить фото</Text>
        </View>
      )}
    >
      <View style={styles.container}>
        <View style={styles.elementsContainer}>
          <TouchableOpacity style={styles.elementContainer}>
            <Image source={cameraImage} style={styles.elementImage}/>
            <Text style={styles.elementText}>Сделать фото</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.elementContainer}>
            <Image source={galleryImage} style={styles.elementImage}/>
            <Text style={styles.elementText}>Выбрать из галереи</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.elementContainer}>
            <Image source={trashImage} style={styles.elementImage}/>
            <Text style={styles.elementText}>Удалить</Text>
          </TouchableOpacity>
        </View>
        {children}
      </View>
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
    padding: 60,
    paddingTop: 40,
    flex: 1
  },
  elementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  elementImage: {
    height: 32,
    width: 32,
    resizeMode: 'contain',
    marginRight: 15
  },
  elementText:{
    fontFamily: 'Comfortaa',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)'
  }
})

export default CustomBottomSheetAddPhoto