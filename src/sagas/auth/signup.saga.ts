import {call, put, takeLatest} from 'redux-saga/effects';
import Api from '../../lib/helpers/Api'
import {API_ENDPOINT} from '../../lib/constants/api'

import {
    REGISTER_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../../lib/constants/actions'

const executeRegisterUser = (payload) => {
    // const root = API_ENDPOINT + 'anon/rfqs/' + payload.payload.token + '/users';
    return new Promise((resolve, reject) => {
        if(payload.payload) {
            resolve(payload.payload)
        } else {
            reject('Promise rejected')
        }
    }).then((val) => {
        return val;
    });
    // return Api.post(root, {
    //     "data": {
    //         "attributes": {
    //             "email": payload.payload.email,
    //             "password": payload.payload.password,
    //             "account_type": "customer",
    //             "token": payload.payload.token,
    //         },
    //         "type": "users"
    //     }
};

function* registerUser(payload) {
    try {
        const register = yield call(executeRegisterUser, payload);
        console.log(register);
        if (register.payload) {
            yield put({tyoe: REGISTER_SUCCESS, payload: Object.assign({}, {...register.payload})});
            yield put({type: LOGIN_SUCCESS, payload: Object.assign({}, {...register.payload})});
        }
        if (register.errors) {
            yield put({type: REGISTER_FAILURE, payload: Object.assign({}, {...register.errors})});
        }
    } catch (error) {
        console.warn(error);
    }
}

export default function* watchRegisterUser() {
    yield takeLatest(REGISTER_REQUEST, registerUser);
}
