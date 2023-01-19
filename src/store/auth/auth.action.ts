import TYPES from '../types';
import {setStorageItem, removeStorageItem} from '../../config/auth';
import {Alert} from 'react-native';
import {
  authService,
  checkTokenService,
  sendTokenService,
  resetPasswordService,
  signUpService,
  searchZipCodeService,
} from '../../services/auth.service';
import http from '../../config/http';

export const signInAction = (data:object) => {  
  return async (dispatch:any) => {
    dispatch({type: TYPES.AUTH_LOADING, status: true});
    try {      
      const result = await authService(data);
      const credentials = result.data?.data;
      if (credentials.token) {
        http.defaults.headers.token = credentials.token;
        await setStorageItem('token', credentials.token);
        dispatch({type: TYPES.SIGN_IN, data: credentials.token});
        return true;
      }
    } catch (error:any) {      
      const {data} = error.response;
      Alert.alert('Erro', data.message);
      dispatch({type: TYPES.SIGN_ERROR, data: error});
      return false;
    }
  };
};

export const checkTokenAction = async (data:object) => {
  try {    
    const result = await checkTokenService(data);
    return result;
  } catch (error) {}
};

export const sendTokenAction = (data:object) => {
  return async (dispatch:any) => {
    dispatch({type: TYPES.AUTH_LOADING, status: true});
    try {
      const result = await sendTokenService(data);
      return result.data;
    } catch (error) {}
  };
};

export const recoveryPasswordAction = (data:object) => {
  return async (dispatch:any) => {
    dispatch({type: TYPES.AUTH_LOADING, status: true});
    try {
      const result = await resetPasswordService(data);
      return result.data;
    } catch (error) {}
  };
};

export const signUpAction = (data:object) => {
  return async (dispatch:any) => {
    dispatch({type: TYPES.AUTH_LOADING, status: true});
    try {
      const result = await signUpService(data);
      await setStorageItem('token', result.data?.data.token);
      dispatch({type: TYPES.SIGN_IN, data: result.data?.data.token});
      return result.data;
    } catch (error:any) {
      const {data} = error.response;
      Alert.alert('Erro', data.message);
    }
  };
};

export const searchZipCode = async (data:string) => {
  try {
    const result = await searchZipCodeService(data);
    return result.data;
  } catch (error) {}
};

export const logoutAction = () => {
  return async (dispatch:any) => {
    await removeStorageItem('token');
    dispatch({type: TYPES.SIGN_OUT});
  };
};
