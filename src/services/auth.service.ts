import http from '../config/http';

export const authService = (data:object) => http.post('/auth', data);
export const checkTokenService = (data:object) => http.post('/check-token', data);
export const sendTokenService = (data:object) => http.put('/user/recovery/password-recovery', data);
export const resetPasswordService = (data:object) => http.put('/user/recovery/reset-password', data);
export const signUpService = (data:object) => http.post('/client', data);
export const searchZipCodeService = (zipcode:string) => http.get(`https://viacep.com.br/ws/${zipcode}/json`)
