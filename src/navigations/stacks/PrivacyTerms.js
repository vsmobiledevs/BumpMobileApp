import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Terms from '../../screens/PrivacyTerms/Terms';
import Privacy from '../../screens/PrivacyTerms/Privacy';

const Stack = createNativeStackNavigator();

function PrivacyTerms(props) {
  return (
    <Stack.Navigator
      initialRouteName="terms"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="terms" component={Terms} />
      <Stack.Screen name="privacy" component={Privacy} />
    </Stack.Navigator>
  );
}

export default PrivacyTerms;
