import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Tab = createBottomTabNavigator();
import Home from '../../screens/App/Home';
import Data from '../../screens/App/Data';
import Learn from '../../screens/App/Learn';
import Mic from '../../screens/App/Mic';
import Account from '../../screens/App/Account';
import {WP, HP, appIcons, family, colors, size} from '../../shared/exporter';

const BottomTabScreen = () => {
  const customTabBarStyle = {
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      height: HP(15),
      borderTopLeftRadius: WP(10),
      borderTopRightRadius: WP(10),
      elevation: 10,
    },
  };

  const BottomTabCenterICon = ({children, onPress}) => {
    return (
      <TouchableOpacity style={styles.searchContainerStyle} onPress={onPress}>
        <View style={styles.searchViewStyle}>{children}</View>
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={customTabBarStyle}>
      <Tab.Screen
        name="Data"
        component={Data}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={!focused ? appIcons.dataUnselected : appIcons.data}
                style={styles.iconStyle}
                resizeMode="contain"
              />
            );
          },
          tabBarLabel: 'Data',
          tabBarLabelStyle: {
            fontFamily: family.Roboto_Regular,
            marginTop: WP(2),
            fontSize: size.xsmall,
          },
          tabBarActiveTintColor: colors.P4,
          tabBarInactiveTintColor: colors.g24,
          tabBarItemStyle: {
            borderRadius: 15,
            alignSelf: 'center',
            height: HP(6),
          },
        }}
      />
      <Tab.Screen
        name="Mic"
        component={Mic}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={!focused ? appIcons.mic : appIcons.micSelected}
                style={styles.iconStyle}
                resizeMode="contain"
              />
            );
          },
          tabBarLabel: 'Mic',
          tabBarLabelStyle: {
            fontFamily: family.Roboto_Regular,
            marginTop: WP(2),
            fontSize: size.xsmall,
          },
          tabBarActiveTintColor: colors.P4,
          tabBarInactiveTintColor: colors.g24,
          tabBarItemStyle: {
            borderRadius: 15,
            alignSelf: 'center',
            height: HP(6),
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={!focused ? appIcons.search : appIcons.searchSelected}
                resizeMode="contain"
                style={[
                  styles.iconStyle,
                  {width: WP(15), height: WP(15), marginTop: WP(-2)},
                ]}
              />
            );
          },
          tabBarButton: props => <BottomTabCenterICon {...props} />,
        }}
      />
      <Tab.Screen
        name="Learn"
        component={Learn}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={!focused ? appIcons.learn : appIcons.learnSelected}
                style={styles.iconStyle}
                resizeMode="contain"
              />
            );
          },
          tabBarLabel: 'Learn',
          tabBarLabelStyle: {
            fontFamily: family.Roboto_Regular,
            marginTop: WP(2),
            fontSize: size.xsmall,
          },
          tabBarActiveTintColor: colors.P4,
          tabBarInactiveTintColor: colors.g24,
          tabBarItemStyle: {
            borderRadius: 15,
            alignSelf: 'center',
            height: HP(6),
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={!focused ? appIcons.account : appIcons.accountSelected}
                style={styles.iconStyle}
                resizeMode="contain"
              />
            );
          },
          tabBarLabel: 'Account',
          tabBarLabelStyle: {
            fontFamily: family.Roboto_Regular,
            marginTop: WP(2),
            fontSize: size.xsmall,
          },
          tabBarActiveTintColor: colors.P4,
          tabBarInactiveTintColor: colors.g24,
          tabBarItemStyle: {
            borderRadius: 15,
            alignSelf: 'center',
            height: HP(6),
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    width: WP(8),
    height: WP(8),
  },
  txtStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: family.Roboto_Regular,
  },
  searchContainerStyle: {
    position: 'relative',
    width: WP(15),
    alignItems: 'center',
    borderBottomLeftRadius: WP(7),
    borderBottomRightRadius: WP(7),
    marginBottom: WP(10),
    backgroundColor: 'transparent',
    backgroundColor: 'red',
  },
  searchViewStyle: {},
});

export default BottomTabScreen;
