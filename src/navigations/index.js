import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import AuthStack from './stacks/AuthStack';
import BottomTabScreen from './tabs/BottomTabNavigation';
import PrivacyTerms from './stacks/PrivacyTerms';
import BottomTabs from './tabs';

const AppStack = createStackNavigator();

const MainAppNav = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'Splash'} component={Splash} />
        <AppStack.Screen name={'auth'} component={AuthStack} />
        <AppStack.Screen name={'privacyTerms'} component={PrivacyTerms} />
        {/* <AppStack.Screen name={'BottomTabScreen'} component={BottomTabs} /> */}
        <AppStack.Screen name={'BottomTabScreen'} component={BottomTabScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
