import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../../lib/constants/actions';

export function loginRequest(payload) {
    return {
        type: LOGIN_REQUEST,
        payload
    }
}

export function loginSuccess(payload) {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE,
    }
}
