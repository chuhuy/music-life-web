import { combineReducers } from 'redux';
//import module reducers here
import { authReducer } from './modules/auth/reducer';
import { playerReducer } from './modules/player/reducer';
import { counterReducer } from './modules/counter/reducer';

export default combineReducers({
    auth: authReducer,
    player: playerReducer,
    counter: counterReducer
});
