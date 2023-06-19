/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { HP, WP, colors } from '../../shared/exporter';
import MyData from '../../screens/App/DataTab/MyData';
import SearchHistory from '../../screens/App/DataTab/SearchHistory';

export default function DataTabs() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'myData', title: 'My Data' },
    { key: 'searchHistory', title: 'My Search History' },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      style={styles.main}
      tabStyle={styles.tabBar}
      renderLabel={({ route, focused }) => (
        <Text style={[styles.tabBarTitle, { color: focused ? colors.b1 : colors.b7 }]}>
          {route.title}
        </Text>
      )}
      indicatorStyle={styles.indicator}
    />
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'myData':
        return <MyData />;
      case 'searchHistory':
        return <SearchHistory />;
      default:
        return null;
    }
  };

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.w1,
    elevation: 0,
  },
  tabBar: {
    width: WP(40),
    marginTop: HP(5)
  },
  tabBarTitle: {
    margin: HP(0.5),
    right: HP(3),
  },
  indicator: {
    width: WP(25),
    backgroundColor: colors.P1,
  },
});
