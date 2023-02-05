import http from '../config/http'
const baseUrl = '/financial'

export const listAllAssetService = () => http.get(baseUrl)