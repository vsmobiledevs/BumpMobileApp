import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stacks/AuthStack';
import RNBootSplash from 'react-native-bootsplash';
import EditProfileScreen from '../screens/App/AccountTab/editProfileScreen';
import FaqScreen from '../screens/App/AccountTab/Faqs';
import TermsScreen from '../screens/App/AccountTab/Terms&Condition';
import ContactUs from '../screens/App/AccountTab/ContactUs';
import DeleteAccount from '../screens/App/AccountTab/DeleteAccount';
import BottomTabs from './bottomTab';
import ResetPassword from '../screens/Auth/ResetPassword';
import {useAppSelector} from '../redux/store';

const AppStack = createStackNavigator();

const MainAppNav = () => {
  const {user} = useAppSelector(state => state?.authSlice);
  console.log('user--', user);

  const AccountTabScreen = () => {
    return (
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'EditProfile'} component={EditProfileScreen} />
        <AppStack.Screen name={'Faq'} component={FaqScreen} />
        <AppStack.Screen name={'Terms'} component={TermsScreen} />
        <AppStack.Screen name={'ContactUs'} component={ContactUs} />
        <AppStack.Screen name={'deleteAccount'} component={DeleteAccount} />
        <AppStack.Screen name="ResetPassword" component={ResetPassword} />
      </AppStack.Navigator>
    );
  };

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <AppStack.Navigator
        initialRouteName={'auth'}
        screenOptions={{headerShown: false}}>
        {user?.token ? (
          <>
            <AppStack.Screen name={'BottomTabs'} component={BottomTabs} />
            <AppStack.Screen
              name={'accountTabScreens'}
              component={AccountTabScreen}
            />
          </>
        ) : (
          <AppStack.Screen name={'auth'} component={AuthStack} />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
