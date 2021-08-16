import { SAVE_VEHICLE_INFO } from "../../lib/constants/actions";
import {DEFAULT_VEHICLE_STATE} from '../../lib/constants/states';

export function vehicles(state = DEFAULT_VEHICLE_STATE, action) {
    switch (action.type) {
        case SAVE_VEHICLE_INFO: {
            return state.concat(action.payload)
        }
        default:
            return state;
    }
}
