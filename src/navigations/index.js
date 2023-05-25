import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stacks/AuthStack';
import PrivacyTerms from './stacks/PrivacyTerms';
import RNBootSplash from 'react-native-bootsplash';

const AppStack = createStackNavigator();

const MainAppNav = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <AppStack.Navigator
        initialRouteName="auth"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'auth'} component={AuthStack} />
        <AppStack.Screen name={'privacyTerms'} component={PrivacyTerms} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
