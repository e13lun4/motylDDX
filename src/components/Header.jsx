import React from "react"
import { ShadowedView } from 'react-native-fast-shadow'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return(
    <ShadowedView style={{flex: 0, backgroundColor: 'rgba(23, 24, 33, 1)', width: '100%', height: 65, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 3, shadowColor: 'rgba(57, 58, 69, 1)', zIndex: 999}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.headerTitle}>Moove</Text>
      </View>
    </ShadowedView>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 28,
    color: 'rgba(0, 194, 255, 1)',
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    fontWeight: '600',
  }
})

export default Header