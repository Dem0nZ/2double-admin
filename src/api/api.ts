import axios from 'axios';
import { LoginResponse } from '../models';
import store from '../store';

const instance = axios.create({
    baseURL: 'https://c5e0f238-2039-4dda-b43d-8f213414bc2e.mock.pstmn.io'
});

// Add a request interceptor
instance.interceptors.request.use( (config) => {
    const token = store.getState().login.token;
    if (token != undefined) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export const authAPI = {
    login(login: string, password: string) {
        return instance.post<LoginResponse>('/auth', {
            login,
            password
        });
    }
};