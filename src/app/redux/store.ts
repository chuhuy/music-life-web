import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'auth',
    storage: storage,
    whitelist: ["auth"]
  };
const pReducer = persistReducer(persistConfig, reducers);

const store = createStore(
    pReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger),)
);

const persistor = persistStore(store);

export { persistor, store };

sagaMiddleware.run(rootSaga);
