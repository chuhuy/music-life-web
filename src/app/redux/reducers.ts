import { combineReducers } from "redux";
//import module reducers here
import { authReducer } from "./modules/auth/reducer";
import { playerReducer } from "./modules/player/reducer";
import { counterReducer } from "./modules/counter/reducer";
import { loadingReducer } from "./modules/loading/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  player: playerReducer,
  counter: counterReducer,
  loading: loadingReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
