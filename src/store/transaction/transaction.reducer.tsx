import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  deposit: [],
  selected: [],
  all: []
}

const reducer = ({ ...state }: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case TYPES.TRANSACTION_LOADING:
      state.error = []
      state.loading = action.status
      return state
    case TYPES.TRANSACTION_USER_ID:
      state.selected = action.data
      state.loading = false
      return state
    case TYPES.TRANSACTION_BANK_USER_DEPOSIT:
      state.deposit = action.data
      state.loading = false
      return state
    default:
      return state
  }
}

export default reducer
