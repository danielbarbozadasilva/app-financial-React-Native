import TYPES from '../types'
import {listAllAssetService} from '../../services/financial.service'

export const listAllAssetAction = () => {
  return async (dispatch:any) => {
    dispatch({ type: TYPES.FINANCIAL_LOADING, status: true })
    try {
      const result = await listAllAssetService()
      dispatch({ type: TYPES.FINANCIAL_ALL, data: result.data.data })
    } catch (error) {}
  }
}