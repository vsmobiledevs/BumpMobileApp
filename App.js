import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import MainNavigation from './src/navigations';

const App = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <MainNavigation />
    </KeyboardAvoidingView>
  );
};

export default App;
