import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Data from '../../screens/App/DataTab/Data';

const Stack = createNativeStackNavigator();

function DataStack(props) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="data" component={Data} />
    </Stack.Navigator>
  );
}

export default DataStack;
