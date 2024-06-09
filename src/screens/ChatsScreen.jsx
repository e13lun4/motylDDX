import React from "react"
import { Text, View, StyleSheet } from "react-native"

const ChatsScreen = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.headerText}>Чаты</Text>
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

export default ChatsScreen