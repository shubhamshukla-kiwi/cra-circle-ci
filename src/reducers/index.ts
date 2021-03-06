import { persistCombineReducers } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import localStorage from 'redux-persist/lib/storage';

import { login, register, } from './auth/auth.reducer';
import { drivers }from './onboarding/driver.reducer';
import { vehicles }from './onboarding/vehicle.reducer';
import { preferences } from './onboarding/preferences.reducer';

import { USER_LOGOUT } from '../lib/constants/actions';
const config = {
    key: 'root',
    storage: localStorage,
}

const reducer = persistCombineReducers(config, {
    login,
    register,
    drivers,
    vehicles,
    preferences
})


// const appReducer = persistReducer(
//     {
//         key: 'root2',
//         storage: sessionStorage,
//         transforms: [
//             // driverTransform,
//             // policyTransform
//         ],
//         whitelist: [
//             // 'drivers',
//             // 'policies',
//         ]
//     }, reducer);

const rootReducer = (state, action) => {
    if (action.type === USER_LOGOUT) {
        sessionStorage.removeItem('persist:root2');
        localStorage.removeItem('persist:root');
        return reducer(undefined, action);
    }
    return reducer(state, action);
};
export default rootReducer