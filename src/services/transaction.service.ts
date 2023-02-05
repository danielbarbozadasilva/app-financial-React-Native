import http from '../config/http'
const baseUrl = '/transaction'

export const listByIdUserTransactionService = (clientid:string) =>
  http.get(`${baseUrl}/client/${clientid}`)

export const listByIdDepositTransactionService = (user_id:string) =>
  http.get(`${baseUrl}/deposit/client/${user_id}`)

export const createTransactionService = (user_id:string, asset_id:string, data:object) =>
  http.post(`${baseUrl}/client/${user_id}/asset/${asset_id}`, data)

