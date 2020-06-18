import axios from 'axios';
import {LoginResponse} from "../models";

export const authAPI = {
    login(login: string, password: string) {
        return axios.post<LoginResponse>('https://c5e0f238-2039-4dda-b43d-8f213414bc2e.mock.pstmn.io/auth', {
            login,
            password
        });
    }
};