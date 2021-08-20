import { SAVE_PREFERENCES } from "../../lib/constants/actions";

export function savePreferences(payload) {
    return {
        type: SAVE_PREFERENCES,
        payload
    }
}