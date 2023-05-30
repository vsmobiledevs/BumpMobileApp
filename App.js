import React, {useEffect} from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import MainNavigation from './src/navigations';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <MainNavigation />
        </KeyboardAvoidingView>
      </PersistGate>
    </Provider>
  );
};

export default App;
