import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import AuthStack from './stacks/Auth';
import BottomTabScreen from './tabs/BottomTabNavigation';

const AppStack = createStackNavigator();

const MainAppNav = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'Splash'} component={Splash} />
        <AppStack.Screen name={'auth'} component={AuthStack} />
        {/* <AppStack.Screen name={'BottomTabScreen'} component={BottomTabScreen} /> */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
