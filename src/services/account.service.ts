import http from '../config/http';
const baseUrl = '/account'

export const checkBalanceService = (clientid: string) => http.get(`${baseUrl}/client/${clientid}`)