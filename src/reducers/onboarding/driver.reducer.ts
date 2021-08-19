import { SAVE_DRIVER_INFO, SAVE_DRIVER_DETAIL_INFO, SAVE_DRIVER_VIOLATION_INFO, SAVE_DRIVER } from "../../lib/constants/actions";
import {DEFAULT_DRIVER_STATE} from '../../lib/constants/states';

export function drivers(state = DEFAULT_DRIVER_STATE, action) {
    switch (action.type) {
        case SAVE_DRIVER_INFO: {
            return state.concat(action.payload)
        }
        case SAVE_DRIVER_DETAIL_INFO: {
            const index = action.payload.index
        return [
           ...state.slice(0, index), // everything before current post
           {
              ...state[index],
              detail: action.payload.data,
           },
           ...state.slice(index + 1), // everything after current post
        ]
        }
        case SAVE_DRIVER_VIOLATION_INFO: {
            const index = action.payload.index
        return [
           ...state.slice(0, index), // everything before current post
           {
              ...state[index],
              violations: action.payload.data,
           },
           ...state.slice(index + 1), // everything after current post
        ]
        } 
        case SAVE_DRIVER: {
            return state.concat(action.payload)
        }

        default:
            return state;
    }
}
