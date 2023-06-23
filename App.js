/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { WEB_CLIENT_ID } from '@env'
import { MenuProvider } from 'react-native-popup-menu';
import { PersistGate } from 'redux-persist/integration/react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { PaperProvider } from 'react-native-paper';
import { persistor, store } from './src/redux/store';
import MainNavigation from './src/navigations';

function App() {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });

    return () => {
    };
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider>
        <PersistGate persistor={persistor}>
          <KeyboardAvoidingView
            enabled={false}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.main}
          >
            <MenuProvider>
              <MainNavigation />
            </MenuProvider>
          </KeyboardAvoidingView>
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
