import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SAVE_EMAIL,
    USER_LOGOUT
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

export function saveEmail(email: string) {
    return {
        type: SAVE_EMAIL,
        payload: email
    }
}

export function logout(): void {
    return {
        type: USER_LOGOUT,
    }
}
