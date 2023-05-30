import React from 'react';
import MainNavigation from './src/navigations';
import {persistor, store} from './src/redux/store';
import {MenuProvider} from 'react-native-popup-menu';
import {PersistGate} from 'redux-persist/integration/react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <MenuProvider>
            <MainNavigation />
          </MenuProvider>
        </KeyboardAvoidingView>
      </PersistGate>
    </Provider>
  );
};

export default App;
