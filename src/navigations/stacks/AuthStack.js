import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Auth/Login';
import Signup from '../../screens/Auth/Signup';
import ForgotPassword from '../../screens/Auth/ForgotPassword';
import OtpVerification from '../../screens/Auth/OtpVerification';
import NewPassword from '../../screens/Auth/NewPassword';
import ResetPassword from '../../screens/Auth/ResetPassword';

const Stack = createNativeStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
}

export default AuthStack;
