import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import MenuScreen from "../../screens/MenuScreen"
import PlanScreen from "../../screens/PlanScreen"
import ProgressScreen from "../../screens/ProgressScreen"
import ChatsScreen from "../../screens/ChatsScreen"

import planIcon from '../../assets/images/planImageBar.png'
import progressIcon from '../../assets/images/progressImageBar.png'
import chatIcon from '../../assets/images/chatImageBar.png'
import menuIcon from '../../assets/images/menuImageBar.png'

const Tab = createBottomTabNavigator()

const LoggedNavigation = () => {
  const screenTabOptions = (route, focused) => {
    let iconName

    switch (route.name) {
      case 'Plan':
        iconName = planIcon
        break
      case 'Progress':
        iconName = progressIcon
        break
      case 'Chats':
        iconName = chatIcon
        break
      case 'Menu':
        iconName = menuIcon
        break
      default:
        break
    }

    return <Image source={iconName} style={{ width: 32, height: 32, tintColor: focused ? 'rgba(0, 194, 255, 1)' : 'rgba(140, 146, 163, 1)', resizeMode: 'contain' }}/>
  }

  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => screenTabOptions(route, focused),
        tabBarInactiveTintColor: 'rgba(140, 146, 163, 1)',
        tabBarActiveTintColor: 'rgba(0, 194, 255, 1)',
        tabBarLabelStyle: {fontSize: 12, fontWeight: '500', marginBottom: Platform.OS === 'ios' ? -15 : 10},
        headerShown: false,
        tabBarIconStyle: {paddingBottom: 0},
        tabBarStyle: {height: 80, backgroundColor: 'rgba(23, 24, 33, 1)'},
      })}
      initialRouteName="Menu"
    >
      <Tab.Screen name="Plan" component={PlanScreen} options={{ tabBarLabel: 'План' }}/>
      <Tab.Screen name="Progress" component={ProgressScreen} options={{ tabBarLabel: 'Прогресс' }}/>
      <Tab.Screen name="Chats" component={ChatsScreen} options={{ tabBarLabel: 'Чаты' }}/>
      <Tab.Screen name="Menu" component={MenuScreen} options={{ tabBarLabel: 'Меню' }}/>
    </Tab.Navigator>
  )
}

export default LoggedNavigation