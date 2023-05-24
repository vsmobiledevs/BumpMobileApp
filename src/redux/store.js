import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import {initialConfig} from '../shared/utilities/config';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import {rootSaga} from './saga';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

// Create the Redux Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
  enhancers: [composeWithDevTools(applyMiddleware(sagaMiddleware))],
});

// Run the Redux Saga middleware
sagaMiddleware.run(rootSaga);

initialConfig();

// Create the persisted store
const persistor = persistStore(store);

export {store, persistor};
