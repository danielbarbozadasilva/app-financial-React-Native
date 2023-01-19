import AsyncStorage from '@react-native-async-storage/async-storage'
import { REACT_APP_TOKEN_KEY } from '@env';

const baseKey = process.env.REACT_APP_TOKEN_KEY
import jwt_decode from 'jwt-decode'

export const setStorageItem = async (key: string, value: string) => {
  await AsyncStorage.setItem(`${baseKey}${key}`, value)
}

export const getStorageItem = async (key: string) => {
  return await AsyncStorage.getItem(`${baseKey}${key}`)
}

export const removeStorageItem = async (key: string) => {
  await AsyncStorage.removeItem(`${baseKey}${key}`)
}

export const decodeToken = async (key = 'token') => {
  return jwt_decode(await AsyncStorage.getItem(`${baseKey}${key}`) || '')
}
