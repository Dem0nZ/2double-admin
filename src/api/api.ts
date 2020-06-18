import axios from 'axios';
import {LoginResponse} from "../models";

const instance = axios.create({
    baseURL: 'https://c5e0f238-2039-4dda-b43d-8f213414bc2e.mock.pstmn.io'
});

export const authAPI = {
    login(login: string, password: string) {
        return instance.post<LoginResponse>('/auth', {
            login,
            password
        });
    }
};