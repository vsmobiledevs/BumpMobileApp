/* eslint-disable default-case */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { WEB_CLIENT_ID, REGION, USER_POOL_ID, USER_POOL_WEB_CLIENT_ID } from '@env';
import { Amplify } from 'aws-amplify';
import messaging from '@react-native-firebase/messaging';
import { MenuProvider } from 'react-native-popup-menu';
import { PersistGate } from 'redux-persist/integration/react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { PaperProvider } from 'react-native-paper';
import { persistor, store } from './src/redux/store';
import MainNavigation from './src/navigations';

const awsconfig = {
  Auth: {
    region: REGION,
    userPoolId: USER_POOL_ID,
    userPoolWebClientId: USER_POOL_WEB_CLIENT_ID,
  },
};

Amplify.configure(awsconfig);

function App() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });
    requestUserPermission();

    return () => {};
  }, []);

  const requestUserPermission = async () => {
    await messaging()
      .requestPermission()
      .then((response) => {
        if (response) {
          console.log('Success', response);
          if (response) {
            getToken();
          }
        }
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };

  const getToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log('FCM Token:  ', token);
  };

  return (
    <Provider store={store}>
      <PaperProvider>
        <PersistGate persistor={persistor}>
          <KeyboardAvoidingView
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
