/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { HP, WP, colors } from '../../shared/exporter';
import Received from '../../screens/App/AccountTab/TaxDocument/Received';
import Uploaded from '../../screens/App/AccountTab/TaxDocument/Uploaded';

export default function TaxDocumentTabs() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'received', title: 'Received' },
    { key: 'uploaded', title: 'Uploaded' },
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
      case 'received':
        return <Received />;
      case 'uploaded':
        return <Uploaded />;
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
    width: WP(25),
    marginTop: Platform.OS === 'ios' ? HP(3) : 0,
  },
  tabBarTitle: {
    margin: HP(0.5),
  },
  indicator: {
    width: WP(16),
    backgroundColor: colors.b1,
    bottom: 5,
    left: HP(2),
  },
});
