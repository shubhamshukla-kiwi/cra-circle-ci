import {persistCombineReducers, persistReducer} from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'

import { login, register, } from '../reducers/auth/auth.reducer';

const config = {
    key: 'root',
    storage: sessionStorage,
}

const reducer = persistCombineReducers(config, {
  login,
  register
})

const rootReducer = persistReducer(
    {
        key: 'root2',
        storage: sessionStorage,
        transforms: [],
        whitelist: ['login']
    }, reducer);


export default rootReducer
