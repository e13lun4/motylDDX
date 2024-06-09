import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { ToastProvider } from 'react-native-toasts-notifications'
import AuthNavigation from "./AuthNavigation"
import LoggedNavigation from "./LoggedNavigation"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Navigation = () => {
  const insets = useSafeAreaInsets()
  const isAuth = true

  return(
    <SafeAreaView style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right }}>
      {isAuth ? (
        <>
          {/* <ToastProvider> */}
            <LoggedNavigation />
          {/* </ToastProvider> */}
        </>
      ) : (
        <>
          {/* <ToastProvider> */}
            <AuthNavigation />
          {/* </ToastProvider> */}
        </>
      )}
    </SafeAreaView>
  )
}

export default Navigation