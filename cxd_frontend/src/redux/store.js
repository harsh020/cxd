import { createFactory } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';


// const store = createStore(
//     rootReducer,
//     applyMiddleware(thunk),
// );

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'diagnosis'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

const unsubsscribe = store.subscribe(() => console.log(store.getState()))
