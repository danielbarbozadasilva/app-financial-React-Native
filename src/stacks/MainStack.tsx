import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Preload from '../pages/Preload'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import Deposit from '../pages/Deposit'
import Investment from '../pages/Investment'
import FinancialAssets from '../pages/FinancialAssets'
import FinancialAssetDetails from '../pages/FinancialAssetDetails'
import Profile from '../pages/Profile'
import Transaction from '../pages/Transaction'

const Stack = createStackNavigator()

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Deposit" component={Deposit} />
      <Stack.Screen name="Investment" component={Investment} />
      <Stack.Screen name="FinancialAssets" component={FinancialAssets} />
      <Stack.Screen name="FinancialAssetDetails" component={FinancialAssetDetails} />
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}
export default MainStack
