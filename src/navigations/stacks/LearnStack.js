import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Learn from '../../screens/App/LearnTab/Learn';

const Stack = createNativeStackNavigator();

function LearnStack(props) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LearnScreen" component={Learn} />
    </Stack.Navigator>
  );
}

export default LearnStack;
