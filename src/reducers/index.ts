import { persistCombineReducers, persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import localStorage from 'redux-persist/lib/storage';

const config = {
    key: 'root',
    storage: localStorage,
}
function counter(state, action) {
    if (typeof state === 'undefined') {
      state = 0 // If state is undefined, initialize it with a default value
    }
  
    if (action.type === 'INCREMENT') {
      return state + 1
    } else if (action.type === 'DECREMENT') {
      return state - 1
    } else {
      return state // In case an action is passed in we don't understand
    }
  }
const reducer = persistCombineReducers(config, {
    counter: counter
})


const rootReducer = persistReducer(
    {
        key: 'root2',
        storage: sessionStorage,
        transforms: [
            // driverTransform,
            // policyTransform
        ],
        whitelist: [
            // 'drivers',
            // 'policies',
        ]
    }, reducer);


// export default rootReducer
export default reducer;
