/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import DataStack from '../stacks/DataStack';
import MicStack from '../stacks/MicStack';
import LearnStack from '../stacks/LearnStack';
import AccountStack from '../stacks/AccountStack';
import SearchStack from '../stacks/SearchStack';
import { BottomTab, CenterButton } from '../../components';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomTab props={props} />}
    >
      <Tab.Screen name="Data" component={DataStack} />
      <Tab.Screen name="Mic" component={MicStack} />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarButton: (props) => <CenterButton props={props} />
        }}
      />
      <Tab.Screen name="Learn" component={LearnStack} />
      <Tab.Screen name="Account" component={AccountStack} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
