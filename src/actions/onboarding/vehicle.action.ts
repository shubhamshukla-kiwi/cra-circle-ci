import {
    SAVE_VEHICLE_INFO, SAVE_VEHICLE, EDIT_VEHICLE
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

export function editVehicle(payload) {
    return {
        type: EDIT_VEHICLE,
        payload
    }
}
