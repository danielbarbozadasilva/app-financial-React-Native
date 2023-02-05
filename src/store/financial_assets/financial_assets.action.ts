import TYPES from '../types'
import {listAllAssetService} from '../../services/financial.service'
import { Dispatch } from 'redux';

export const listAllAssetAction = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: TYPES.FINANCIAL_LOADING, status: true })
    try {
      const result = await listAllAssetService()
      dispatch({ type: TYPES.FINANCIAL_ALL, data: result.data.data })
    } catch (error) {}
  }
}