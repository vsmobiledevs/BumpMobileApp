/* eslint-disable react/react-in-jsx-scope */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mic from '../../screens/App/MicTab/Mic';

const Stack = createNativeStackNavigator();

function MicStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MicScreen" component={Mic} />
    </Stack.Navigator>
  );
}

export default MicStack;
