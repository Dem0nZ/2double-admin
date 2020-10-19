import { applyMiddleware, combineReducers, createStore } from 'redux';
import loginReducer from './login/reducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from "./contacts/reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    contacts: contactsReducer
});

type RootReducer = typeof rootReducer
export type AppState = ReturnType<RootReducer>;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;