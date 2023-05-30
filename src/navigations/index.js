import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stacks/AuthStack';
import PrivacyTerms from './stacks/PrivacyTerms';
import RNBootSplash from 'react-native-bootsplash';
import EditProfileScreen from '../screens/App/AccountTab/editProfileScreen';
import FaqScreen from '../screens/App/AccountTab/Faqs';
import TermsScreen from '../screens/App/AccountTab/Terms&Condition';
import ContactUs from '../screens/App/AccountTab/ContactUs';
import BottomTabs from './bottomTab';

const AppStack = createStackNavigator();

const MainAppNav = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <AppStack.Navigator
        initialRouteName="auth"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'auth'} component={AuthStack} />
        <AppStack.Screen name={'EditProfile'} component={EditProfileScreen} />
        <AppStack.Screen name={'Faq'} component={FaqScreen} />
        <AppStack.Screen name={'Terms'} component={TermsScreen} />
        <AppStack.Screen name={'ContactUs'} component={ContactUs} />
        <AppStack.Screen name={'privacyTerms'} component={PrivacyTerms} />
        <AppStack.Screen name={'BottomTabs'} component={BottomTabs} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
