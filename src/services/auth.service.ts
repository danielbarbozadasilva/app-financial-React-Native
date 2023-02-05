import http from '../config/http';

export const authService = (data:object) => http.post('/auth', data);
export const checkTokenService = (data:object) => http.post('/check-token', data);
export const signUpService = (data:object) => http.post('/register', data);
