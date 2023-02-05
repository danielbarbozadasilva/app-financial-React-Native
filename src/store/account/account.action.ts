import TYPES from '../types'
import { checkBalanceService } from '../../services/account.service'
import { Dispatch } from 'redux'

export const checkBalanceAction = (id:string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: TYPES.ACCOUNT_LOADING, status: true })
    try {
      const result = await checkBalanceService(id)      
      dispatch({ type: TYPES.ACCOUNT_BALANCE, data: result.data.data })
    } catch (error) {}
  }
}
