import {
    SAVE_DRIVER_INFO,
    SAVE_DRIVER_DETAIL_INFO,
    SAVE_DRIVER_VIOLATION_INFO,
    SAVE_DRIVER
} from '../../lib/constants/actions';

export function saveDriverInfo(payload) {
    return {
        type: SAVE_DRIVER_INFO,
        payload
    }
}

export function saveDriverDetailInfo(payload) {
    return {
        type: SAVE_DRIVER_DETAIL_INFO,
        payload
    }
}

export function saveDriverViolationsInfo(payload) {
    return {
        type: SAVE_DRIVER_VIOLATION_INFO,
        payload
    }
}

export function saveDriver(payload) {
    return {
        type: SAVE_DRIVER,
        payload
    }
}