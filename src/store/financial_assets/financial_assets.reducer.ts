import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: []
}

const reducer = ({ ...state }: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case TYPES.FINANCIAL_LOADING:
      state.error = []
      state.loading = action.status
      return state
    case TYPES.FINANCIAL_ALL:
      state.all = action.data
      state.loading = false
      return state
    default:
      return state
  }
}

export default reducer
