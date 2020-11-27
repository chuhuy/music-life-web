import { all } from 'redux-saga/effects';
import { signInWatcher, signInUsernameWatcher, signInFacebookWatcher } from './modules/auth/saga';

export function* rootSaga() {
    yield all([
        // Sign in
        signInWatcher(),
        signInUsernameWatcher(),
        signInFacebookWatcher(),
    ]);
}
