import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

const Exercise = ({ props }) => {
  return(
    <TouchableOpacity style={styles.container} key={props.id}>
      <View style={styles.elementContainer}>
        <Image source={props.image} style={styles.image}/>
        <View>
          <Text style={styles.text}>{props.name}</Text>
          <Text style={styles.textDescription}>{props.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(57, 58, 69, 1)',
    margin: 5,
    borderRadius: 6
  },
  elementContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 60,
    resizeMode: 'contain',
    marginRight: 20
  },
  text: {
    fontFamily: 'Comfortaa',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18,
    color: 'rgba(255, 255, 255, 1)'
  },
  textDescription: {
    fontFamily: 'Comfortaa',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18,
    color: 'rgba(255, 255, 255, 1)',
    paddingTop: 10
  }
})

export default Exercise