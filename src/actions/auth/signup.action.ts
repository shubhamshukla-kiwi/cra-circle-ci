import {REGISTER_REQUEST} from '../../lib/constants/actions';
import {REGISTER_SUCCESS} from '../../lib/constants/actions';
import {REGISTER_FAILURE} from '../../lib/constants/actions';

export function registerRequest(payload) {
    return {
        type: REGISTER_REQUEST,
        payload
    }
}

export function registerSuccess(payload) {
    return {
        type: REGISTER_SUCCESS,
        payload
    }
}

export function registerFailure() {
    return {
        type: REGISTER_FAILURE,
    }
}
