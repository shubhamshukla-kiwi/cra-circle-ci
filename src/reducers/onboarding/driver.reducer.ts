import { SAVE_DRIVER_INFO } from "../../lib/constants/actions";
import {DEFAULT_DRIVER_STATE} from '../../lib/constants/states';

export function drivers(state = DEFAULT_DRIVER_STATE, action) {
    switch (action.type) {
        case SAVE_DRIVER_INFO: {
            return state.concat(action.payload)
        }
        default:
            return state;
    }
}
