import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IntroScreen from "../../screens/IntroScreen"
import PageViewerScreen from "../../screens/PageViewerScreen"
import AuthScreen from "../../screens/AuthScreen"
import Header from "../Header"
import RegScreen from "../../screens/RegScreen"
import SuccessfullRegScreen from "../../screens/SuccessfullRegScreen"
import RecoveryPasswordScreen from "../../screens/RecoveryPasswordScreen"
import SuccessfullRecScreen from "../../screens/SuccessfullRecScreen"
import ChooseScreen from "../../screens/ChooseScreen"

const Stack = createNativeStackNavigator()

const AuthNavigation = () => {
  return(
    <Stack.Navigator
      initialRouteName="Intro"
    >
      <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Choose" component={ChooseScreen} options={{ header: () => <Header/> }}/>
      <Stack.Screen name="PageViewer" component={PageViewerScreen} options={{ header: () => <Header/> }}/>
      <Stack.Screen name="Auth" component={AuthScreen} options={{ header: () => <Header /> }}/>
      <Stack.Screen name="Reg" component={RegScreen} options={{ header: () => <Header /> }}/>
      <Stack.Screen name="SuccessReg" component={SuccessfullRegScreen} options={{ header: () => <Header /> }}/>
      <Stack.Screen name="Rec" component={RecoveryPasswordScreen} options={{ header: () => <Header /> }}/>
      <Stack.Screen name="SuccessRec" component={SuccessfullRecScreen} options={{ header: () => <Header /> }}/>
    </Stack.Navigator>
  )
}

export default AuthNavigation