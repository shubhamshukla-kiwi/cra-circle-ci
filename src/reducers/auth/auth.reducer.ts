import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOG_OUT_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE

} from '../../lib/constants/actions';
import {DEFAULT_LOGIN_STATE} from '../../lib/constants/states';

export function login(state = DEFAULT_LOGIN_STATE, action) {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return Object.assign({}, {...state}, {
                requested: true
            });
        }
        case LOGIN_SUCCESS: {
            return Object.assign({}, {...state}, {
                requested: false,
                loggedIn: true,
                ...action.payload
            });
        }
        case LOG_OUT_SUCCESS: {
            return DEFAULT_LOGIN_STATE
        }
        case LOGIN_FAILURE: {
            return Object.assign({}, {...state}, {
                requested: false,
                loggedIn: false,
                err: action.payload.err
            });
        }
        default:
            return state;
    }
}

export function register(state = DEFAULT_LOGIN_STATE, action) {
    switch (action.type) {
        case REGISTER_REQUEST: {
            return Object.assign({}, {...state}, {
                registerRequested: true
            });
        }
        case REGISTER_SUCCESS: {
            console.log(action)
            return Object.assign({}, {...state}, {
                registerRequested: false,
                loggedIn: true,
                ...action.payload
            });
        }
        case REGISTER_FAILURE: {
            return Object.assign({}, {...state}, {
                registerRequested: false,
                loggedIn: false,
                err: action.payload
            });
        }
        default:
            return state;
    }
}
