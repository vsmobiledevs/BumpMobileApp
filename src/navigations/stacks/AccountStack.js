import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from '../../screens/App/AccountTab/AccountScreen';

const Stack = createNativeStackNavigator();

function AccountStack(props) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
    </Stack.Navigator>
  );
}

export default AccountStack;
