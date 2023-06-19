/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';
import { PersistGate } from 'redux-persist/integration/react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MainNavigation from './src/navigations';
import { persistor, store } from './src/redux/store';

function App() {
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
