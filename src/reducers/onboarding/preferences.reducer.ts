import { SAVE_PREFERENCES } from "../../lib/constants/actions";
import { DEFAULT_PREFERENCES_STATE } from '../../lib/constants/states';

export function preferences(state = DEFAULT_PREFERENCES_STATE, action) {
    switch (action.type) {
        case SAVE_PREFERENCES: {
            return action.payload
        }
        default:
            return state;
    }
}
