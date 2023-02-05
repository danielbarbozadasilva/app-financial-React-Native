import TYPES from '../types'
import {
  listByIdUserTransactionService,
  listByIdDepositTransactionService,
  createTransactionService
} from '../../services/transaction.service'
import { decodeToken } from '../../config/auth'
import { Alert } from 'react-native'
import { Dispatch } from 'redux'

export const listByIdUserAssetAction = (clientid: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: TYPES.TRANSACTION_LOADING, status: true })
    try {
      const result = await listByIdUserTransactionService(clientid)
      dispatch({ type: TYPES.TRANSACTION_USER_ID, data: result.data.data })
    } catch (error) {}
  }
}

export const listByIdUserDepositAction = (clientid: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: TYPES.TRANSACTION_LOADING, status: true })
    try {
      const result = await listByIdDepositTransactionService(clientid)
      dispatch({
        type: TYPES.TRANSACTION_BANK_USER_DEPOSIT,
        data: result.data.data
      })
    } catch (error) {}
  }
}

export const createTransaction = (asset_id: string, data: object) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: TYPES.TRANSACTION_LOADING, status: true })
    try {
      const decode = await decodeToken()
      await createTransactionService(decode.id, asset_id, data)
      dispatch({ type: TYPES.TRANSACTION_CREATE })
      Alert.alert('Sucesso', 'Ativo adquirido com sucesso!')
    } catch (error: any) {
      const { data } = error.response
      Alert.alert('Erro', data.message)
    }
  }
}
