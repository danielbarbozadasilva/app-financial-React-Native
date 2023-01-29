import TYPES from '../types'
import { listByIdClientService, updateClientService } from '../../services/client.service'
import { decodeToken, setStorageItem } from '../../config/auth'
import { Alert } from 'react-native'

export const listByIdClientAction = (id: string) => {
    return async (dispatch:any) => {
    dispatch({ type: TYPES.CLIENT_LOADING, status: true })
    try {
      const decode = await decodeToken();
      const result = await listByIdClientService(decode.id)            
      dispatch({ type: TYPES.CLIENT_ID, data: result.data.data })
    } catch (error) {}
  }
}

export const updateClientAction = (data:object) => {
  return async (dispatch:any) => {
    
    try {
      const decode = await decodeToken();      
      await updateClientService(decode.id, data);
      return true;
    } catch (error:any) {      
      return false;
    }
  };
};
