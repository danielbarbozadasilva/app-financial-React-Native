import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  clientById: []
}

const reducer = ({...state}:any = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case TYPES.CLIENT_LOADING:
      state.error = []
      state.loading = action.status
      return state
    case TYPES.CLIENT_ID:
      state.clientById = action.data
      state.loading = false
      return state
    default:
      return state
  }
}

export default reducer
