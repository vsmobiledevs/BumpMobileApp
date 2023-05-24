import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './stacks/Auth';
import RNBootSplash from 'react-native-bootsplash';

const AppStack = createStackNavigator();

const MainAppNav = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <AppStack.Navigator
        initialRouteName="auth"
        screenOptions={{headerShown: false}}>
        {/* <AppStack.Screen name={'Splash'} component={Splash} /> */}
        <AppStack.Screen name={'auth'} component={AuthStack} />
        {/* <AppStack.Screen name={'BottomTabScreen'} component={BottomTabScreen} /> */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
