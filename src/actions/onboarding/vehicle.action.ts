import {
    SAVE_VEHICLE_INFO
} from '../../lib/constants/actions';

export function saveVehicleInfo(payload) {
    return {
        type: SAVE_VEHICLE_INFO,
        payload
    }
}
