import { applyMiddleware, combineReducers, createStore } from 'redux';
import loginReducer from './login/reducer';
import contactsReducer from "./contacts/reducer";
import menuReducer from "./menu/reducer";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    login: loginReducer,
    contacts: contactsReducer,
    menu: menuReducer
});

type RootReducer = typeof rootReducer
export type AppState = ReturnType<RootReducer>;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;