import {call, put, takeLatest} from 'redux-saga/effects';
import Api from '../../lib/helpers/Api'

// import {API_ENDPOINT} from '../../lib/constants/api';

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../../lib/constants/actions'


const executeLoginUser = (payload) => {
    return Api.post('https://611e3932a0f19c00179e7716.mockapi.io/login/login', {
                "email": String(payload.payload.email).toLowerCase(),
                "password": payload.payload.password
    }).then((res) => {
        return res;
    })
}

function* loginUser(payload, action) {
    try {
        const login = yield call(executeLoginUser, payload);

        if (login.error) {
            yield put({type: LOGIN_FAILURE, payload: Object.assign({}, {err: login.error})});
        }
        if (login.token) {
            yield put({type: LOGIN_SUCCESS, payload: Object.assign({}, {token: login.token})});
        }
    } catch (error) {
        console.warn(error);
    }
}

export default function* watchLoginUser() {
    yield takeLatest(LOGIN_REQUEST, loginUser);
}
