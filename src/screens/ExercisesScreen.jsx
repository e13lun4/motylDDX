import React from "react"
import { Text, View, StyleSheet, FlatList } from "react-native"
import Exercise from "../components/Exercises/Exercise"

import defaultPhoto from '../assets/images/defaultPhoto.png'

const data = [{id: 1, image: defaultPhoto, name: 'Приседания', description: 'На какую то группу мышц'}, {id: 2, image: defaultPhoto, name: 'Жим', description: 'На какую то группу мышц'}, {id: 3, image: defaultPhoto, name: 'Тяга', description: 'На какую то группу мышц'}]

const ExercisesScreen = () => {
  return(
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <Exercise props={item}/>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(23, 24, 33, 1)',
    flex: 1
  },
  headerText: {
    fontFamily: 'Ruda',
    fontWeight: '600',
    fontSize: 32,
    color: 'rgba(0, 194, 255, 1)'
  }
})

export default ExercisesScreen