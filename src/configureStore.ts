import {compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import rootAgentReducer from './agent-reducers';
import rootSaga from './sagas/index';
import {persistStore} from 'redux-persist'
import dev from './dev';
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunkMiddleware, sagaMiddleware];

export function configureStore(preloadedState: any) {
    let store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                ...middlewares,
            )
        )
    );
    sagaMiddleware.run(rootSaga);
    let persistor = persistStore(store);

    if (dev.purgeStore) {
        persistor.purge()
        // localStorage.setItem('jwtToken', '')
    }

    return {persistor, store};
}

export function configureAgentStore(preloadedState: any) {
    let store = createStore(
        rootAgentReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                ...middlewares
            )
        )
    );
    sagaMiddleware.run(rootSaga);
    let persistor = persistStore(store);

    if (dev.purgeStore) {
        persistor.purge()
        // localStorage.setItem('jwtToken', '')
    }

    return {persistor, store};
}
