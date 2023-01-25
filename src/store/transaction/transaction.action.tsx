import TYPES from '../types'
import {
  listByIdUserTransactionService,
  listByIdDepositTransactionService
} from '../../services/transaction.service'

export const listByIdUserAssetAction = (clientid: string) => {
  return async (dispatch: any) => {
    dispatch({ type: TYPES.TRANSACTION_LOADING, status: true })
    try {
      const result = await listByIdUserTransactionService(clientid)
      dispatch({ type: TYPES.TRANSACTION_USER_ID, data: result.data.data })
    } catch (error) {}
  }
}

export const listByIdUserDepositAction = (clientid: string) => {  
  return async (dispatch: any) => {
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
