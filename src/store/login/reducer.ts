import { Action } from 'redux';

export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';


interface LoginState {
    isAuth: boolean
}

interface IsLoggedInAction extends Action {
    type: typeof LOGIN;
    payload: {
        token: string
    }
}
interface LoginErrorAction extends Action {
    type: typeof LOGIN_ERROR;
    payload: {
        message: string
    }
}
type LoginAction = IsLoggedInAction | LoginErrorAction


let initialState: LoginState = {
    isAuth: false
}
const loginReducer = (state = initialState, action: LoginAction): LoginState => {
    return state;
};

export default loginReducer;
