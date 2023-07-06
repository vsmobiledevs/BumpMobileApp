/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { HP, WP, colors } from '../../shared/exporter';
import { PayoutTab } from '../../screens/App/AccountTab/Earnings/PayoutsTab';
import { EarningsTab } from '../../screens/App/AccountTab/Earnings/EarningsTab';

export default function EarningTabs() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'earnings', title: 'Earnings' },
    { key: 'payouts', title: 'Monthly Payouts' },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      style={styles.main}
      tabStyle={styles.tabBar}
      renderLabel={({ route, focused }) => (
        <Text
          style={[
            styles.tabBarTitle,
            {
              color: focused ? colors.b1 : colors.b7,
              right: route.title === 'Monthly Payouts' ? HP(5) : HP(3.5),
            },
          ]}
        >
          {route.title}
        </Text>
      )}
      indicatorStyle={styles.indicator}
    />
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'earnings':
        return <EarningsTab />;
      case 'payouts':
        return <PayoutTab />;
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
  },
  tabBarTitle: {
    margin: HP(0.5),
  },
  indicator: {
    backgroundColor: colors.P1,
    width: WP(20),
    bottom: 2,
  },
});
