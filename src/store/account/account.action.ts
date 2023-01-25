import TYPES from '../types'
import { checkBalanceService } from '../../services/account.service'

export const checkBalanceAction = (id) => {
    return async (dispatch:any) => {
    dispatch({ type: TYPES.ACCOUNT_LOADING, status: true })
    try {
      const result = await checkBalanceService(id)      
      dispatch({ type: TYPES.ACCOUNT_BALANCE, data: result.data.data })
    } catch (error) {}
  }
}
