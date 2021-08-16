import {
    SAVE_DRIVER_INFO
} from '../../lib/constants/actions';

export function saveDriverInfo(payload) {
    return {
        type: SAVE_DRIVER_INFO,
        payload
    }
}
