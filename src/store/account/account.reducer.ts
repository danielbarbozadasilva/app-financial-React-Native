import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  error: [],
  balance: [],
  all: []
}

const reducer = ({...state}:any = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case TYPES.ACCOUNT_LOADING:
      state.error = []
      state.loading = action.status
      return state
    case TYPES.ACCOUNT_BALANCE:
      state.balance = action.data
      state.loading = false
      return state
    default:
      return state
  }
}

export default reducer
