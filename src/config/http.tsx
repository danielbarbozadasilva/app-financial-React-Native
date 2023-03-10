import axios from 'axios'
import store from '../store'
import { logoutAction } from '../store/auth/auth.action'
import { REACT_APP_API } from '@env';

const http = axios.create({ baseURL: REACT_APP_API })

axios.defaults.headers.common['Content-Type'] = 'application/json'

http.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.status) {
      case 401:
        //store.dispatch(logoutAction());
        return Promise.reject(error)

      default:
        return Promise.reject(error)
    }
  }
)

export default http
