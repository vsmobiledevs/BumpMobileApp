import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import MainNavigation from './src/navigations';
import store, {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';

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
