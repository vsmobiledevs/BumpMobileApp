import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// screens
import DataStack from '../stacks/DataStack';
import MicStack from '../stacks/MicStack';
import SearchStack from '../stacks/SearchStack';
import {BottomTab} from '../../components/Tabs/BottomTab';
import LearnStack from '../stacks/LearnStack';
import AccountStack from '../stacks/AccountStack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen name={'Data'} component={DataStack} />
      <Tab.Screen name={'Mic'} component={MicStack} />
      <Tab.Screen name={'Search'} component={SearchStack} />
      <Tab.Screen name={'Learn'} component={LearnStack} />
      <Tab.Screen name={'Account'} component={AccountStack} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
