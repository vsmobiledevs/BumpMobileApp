import React from 'react';
import MainNavigation from './src/navigations';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
