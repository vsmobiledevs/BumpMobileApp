import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OtpVerification from '../../screens/Auth/OtpVerification';
import ForgotPassword from '../../screens/Auth/ForgotPassword';
import NewPassword from '../../screens/Auth/NewPassword';
import Signup from '../../screens/Auth/Signup';
import Login from '../../screens/Auth/Login';
import TermsScreen from '../../screens/App/AccountTab/Terms&Condition';

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
      <Stack.Screen name={'Terms'} component={TermsScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
