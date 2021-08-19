import { SAVE_VEHICLE_INFO, SAVE_VEHICLE, EDIT_VEHICLE } from "../../lib/constants/actions";
import {DEFAULT_VEHICLE_STATE} from '../../lib/constants/states';

export function vehicles(state = DEFAULT_VEHICLE_STATE, action) {
    switch (action.type) {
        case SAVE_VEHICLE_INFO: {
            return state.concat(action.payload)
        }
        case SAVE_VEHICLE: {
            return state.concat(action.payload)
        }
        case EDIT_VEHICLE: {
            state = [...state] // important to create a copy, otherwise you'll modify state outside of setState call
            state[action.payload.index] = action.payload.data;
            return state;
        }
        default:
            return state;
    }
}
