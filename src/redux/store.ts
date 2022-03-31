import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'loginError',
    'consultation',
    'consultationList',
    'consultationPosts',
    'userList',
    'userProfile',
    'locations',
    'addUser',
    'articleList',
    'articleShow',
  ],
};

const store = createStore(persistReducer(persistConfig, rootReducer), composeEnhancers);

export const persistor = persistStore(store);

export default store;
