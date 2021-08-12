import {call, put, takeLatest} from 'redux-saga/effects';
import Api from '../../lib/helpers/Api'
import {API_ENDPOINT, SELF_URL} from '../../lib/constants/api';
import _ from 'lodash';

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../../lib/constants/actions'


const executeLoginUser = (payload) => {
    return Api.post(API_ENDPOINT + 'login', {
        "data": {
            "attributes": {
                "email": String(payload.payload.email).toLowerCase(),
                "password": payload.payload.password,
            },
            "type": "users"
        }
    }).then((res) => {
        return res;
    })
}

function* loginUser(payload, action) {
    try {
        const login = yield call(executeLoginUser, payload);

        if (login.data) {
            const user = _.find(login.included, included => included.type === 'user');

            yield put({type: LOGIN_SUCCESS, payload: Object.assign({}, {...user})});
        }
        if (login.errors) {
            yield put({type: LOGIN_FAILURE, payload: Object.assign({}, {err: login.errors})});
        }
    } catch (error) {
        console.warn(error);
    }
}

export default function* watchLoginUser() {
    yield takeLatest(LOGIN_REQUEST, loginUser);
}
