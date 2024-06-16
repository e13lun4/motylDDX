import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import MenuScreen from "../../screens/MenuScreen"
import ExercisesScreen from "../../screens/ExercisesScreen"
import PlanScreen from "../../screens/PlanScreen"
import ChatsScreen from "../../screens/ChatsScreen"
import ProfileScreen from "../../screens/ProfileScreen"
import TrainersScreen from "../../screens/TrainersScreen"
import HeaderTitle from "../HeaderTitle"

import planIcon from '../../assets/images/planImageBar.png'
import progressIcon from '../../assets/images/progressImageBar.png'
import chatIcon from '../../assets/images/chatImageBar.png'
import menuIcon from '../../assets/images/menuImageBar.png'

const Tab = createBottomTabNavigator()

const LoggedNavigation = () => {
  const screenTabOptions = (route, focused) => {
    let iconName

    switch (route.name) {
      case 'Exercises':
        iconName = planIcon
        break
      case 'Plan':
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

    return <Image source={iconName} style={{ width: 26, height: 26, tintColor: focused ? 'rgba(0, 194, 255, 1)' : 'rgba(140, 146, 163, 1)', resizeMode: 'contain' }}/>
  }

  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => screenTabOptions(route, focused),
        tabBarInactiveTintColor: 'rgba(140, 146, 163, 1)',
        tabBarActiveTintColor: 'rgba(0, 194, 255, 1)',
        tabBarLabelStyle: {fontSize: 12, fontWeight: '500', marginBottom: Platform.OS === 'ios' ? -15 : 10},
        headerShown: false,
        tabBarIconStyle: {marginBottom: -10},
        tabBarStyle: {height: 80, backgroundColor: 'rgba(23, 24, 33, 1)'},
      })}
      initialRouteName="Menu"
    >
      <Tab.Screen name="Exercises" component={ExercisesScreen} options={{ tabBarLabel: 'Упражнения', headerShown: true, header: () => <HeaderTitle title={'Упражнения'}/> }}/>
      <Tab.Screen name="Plan" component={PlanScreen} options={{ tabBarLabel: 'План' }}/>
      <Tab.Screen name="Chats" component={ChatsScreen} options={{ tabBarLabel: 'Чат' }}/>
      <Tab.Screen name="Menu" component={MenuScreen} options={{ tabBarLabel: 'Меню' }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarButton: () => null, headerShown: true, header: () => <HeaderTitle title={'Профиль'}/> }}/>
      <Tab.Screen name="Trainers" component={TrainersScreen} options={{ tabBarButton: () => null, headerShown: true, header: () => <HeaderTitle title={'Тренера'}/> }}/>
    </Tab.Navigator>
  )
}

export default LoggedNavigation