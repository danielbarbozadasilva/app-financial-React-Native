import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/stacks/MainStack'
import store from './src/store/index';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  )
}
