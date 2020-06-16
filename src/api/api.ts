import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';



export const authAPI = {
    login(login: string, password: string) {
        axios.post('https://c5e0f238-2039-4dda-b43d-8f213414bc2e.mock.pstmn.io/auth', {
            login: 'admin',
            password: 'azaza'
        })
    },
}