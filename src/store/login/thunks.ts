import { authAPI } from '../../api/api';
import { loginError, loginSuccess } from './actions';
import { LoginAction } from './reducer';
import { Dispatch } from 'react';

export const login = (login: string, password: string) => {
    return async (dispatch: Dispatch<LoginAction>) => {
        try {
            const response = await authAPI.login(login, password);
            return dispatch(loginSuccess(response.data.token));
        } catch (error) {
            const message = error.response?.data?.message || 'API unavailable';
            return dispatch(loginError(message));
        }
    }
}
