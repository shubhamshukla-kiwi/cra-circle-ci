import { persistCombineReducers, persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import localStorage from 'redux-persist/lib/storage';

import { login, register, } from './auth/auth.reducer';
const config = {
    key: 'root',
    storage: localStorage,
}

const reducer = persistCombineReducers(config, {
    login,
    register
})


const rootReducer = persistReducer(
    {
        key: 'root2',
        storage: sessionStorage,
        transforms: [
            // driverTransform,
            // policyTransform
        ],
        whitelist: [
            // 'drivers',
            // 'policies',
        ]
    }, reducer);


// export default rootReducer
export default reducer;
