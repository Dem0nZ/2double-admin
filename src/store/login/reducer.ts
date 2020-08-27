import { Action } from 'redux';

export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export interface LoginState {
    isAuth: boolean
    message?: string
    token?: string
}

interface IsLoggedInAction extends Action {
    type: typeof LOGIN
    payload: {
        token: string
    }
}

interface LoginErrorAction extends Action {
    type: typeof LOGIN_ERROR
    payload: {
        message: string
    }
}

export type LoginAction = IsLoggedInAction | LoginErrorAction

let initialState: LoginState = {
    isAuth: false
};

const loginReducer = (state = initialState, action: LoginAction): LoginState => {
    switch (action.type) {
        case LOGIN:
            return {
                isAuth: true,
                token: action.payload.token,
                message:undefined
            };
        case LOGIN_ERROR:
            return {
                isAuth: false,
                token: undefined,
                message: action.payload.message
            };
        default:
            return state
    }
};

export default loginReducer;
