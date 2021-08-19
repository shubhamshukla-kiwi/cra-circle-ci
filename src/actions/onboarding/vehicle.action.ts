import {
    SAVE_VEHICLE_INFO, SAVE_VEHICLE
} from '../../lib/constants/actions';

export function saveVehicleInfo(payload) {
    return {
        type: SAVE_VEHICLE_INFO,
        payload
    }
}

export function saveVehicle(payload) {
    return {
        type: SAVE_VEHICLE,
        payload
    }
}
