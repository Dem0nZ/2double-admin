import { applyMiddleware, combineReducers, createStore } from 'redux';
import loginReducer from './login/reducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from "./contacts/reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    contactsReducer
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;