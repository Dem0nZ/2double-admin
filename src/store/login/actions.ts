import { LOGIN, LOGIN_ERROR, LoginAction } from './reducer';

export const loginSuccess = (token: string): LoginAction => ({
    type: LOGIN,
    payload: { token }
});

export const loginError = (message: string): LoginAction => ({
    type: LOGIN_ERROR,
    payload: { message }
});
