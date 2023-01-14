import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Preload from '../pages/Preload'
import SignIn from '../pages/SignIn'

const Stack = createStackNavigator()

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  )
}
export default MainStack
