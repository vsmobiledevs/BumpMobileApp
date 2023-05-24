import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './src/redux/store';
import MainNavigation from './src/navigations';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import React from 'react';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <PersistGate persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
