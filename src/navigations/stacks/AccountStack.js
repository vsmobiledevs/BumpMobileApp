/* eslint-disable react/react-in-jsx-scope */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserAccountScreen from '../../screens/App/AccountTab/UserAccountScreen';

const Stack = createNativeStackNavigator();

function AccountStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccountScreen" component={UserAccountScreen} />
    </Stack.Navigator>
  );
}

export default AccountStack;
