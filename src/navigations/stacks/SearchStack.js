import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../../screens/App/SearchTab/Search';

const Stack = createNativeStackNavigator();

function SearchStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="search"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="search" component={Search} />
    </Stack.Navigator>
  );
}

export default SearchStack;
