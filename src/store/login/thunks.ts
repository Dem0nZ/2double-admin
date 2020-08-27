import { authAPI } from '../../api/api';
import { loginError, loginSuccess } from './actions';
import { LoginAction } from './reducer';
import { Dispatch } from 'react';

export const login = (name: string, password: string) => {
    return async (dispatch: Dispatch<LoginAction>) => {
        try {
            const response = await authAPI.login(name, password);
            return dispatch(loginSuccess(response.data.accessToken));
        } catch (error) {
            const message = error.response?.data?.message || 'API unavailable';
            return dispatch(loginError(message));
        }
    }
}
