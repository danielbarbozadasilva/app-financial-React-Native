import http from '../config/http'
const baseUrl = '/client'

export const listByIdClientService = (clientid:string) =>
  http.get(`${baseUrl}/${clientid}`)

export const updateClientService = (clientid:string, data: object) =>
  http.put(`${baseUrl}/${clientid}`, data)