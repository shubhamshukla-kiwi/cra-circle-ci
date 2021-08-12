import { all } from 'redux-saga/effects';

import watchLoginUser from './auth/login.saga';
import watchRegisterUser from './auth/signup.saga';

export default function* rootSaga() {
    yield all([
        watchLoginUser(),
        watchRegisterUser()
    ]);
}
