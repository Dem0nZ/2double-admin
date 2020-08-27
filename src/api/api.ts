import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import {LoginResponse, Restaurant} from '../models';
import store from '../store';

const instance = applyCaseMiddleware(axios.create(({
    baseURL: 'http://127.0.0.1:8000/api'
})));

instance.interceptors.request.use( (config) => {
    const token = store.getState().login.token;
    if (token !== undefined) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export const authAPI = {
    async login(name: string, password: string) {
        return await instance.post<LoginResponse>('/auth/login', {
            name,
            password
        });
    }
};

export const contactsAPI = {
    async getCafeList() {
        return await instance.get<Restaurant[]>('/restaurants')
    }
}