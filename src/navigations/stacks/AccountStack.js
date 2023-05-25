import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Account from '../../screens/App/AccountTab/Account';

const Stack = createNativeStackNavigator();

function AccountStack(props) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AccountScreen" component={Account} />
    </Stack.Navigator>
  );
}

export default AccountStack;
