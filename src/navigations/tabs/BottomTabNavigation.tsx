import React, { useMemo, useRef, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CurvedBottomBar,
} from 'react-native-curved-bottom-bar';
import { WP, appIcons, colors } from '../../shared/exporter';
import DataStack from '../stacks/DataStack';
import MicStack from '../stacks/MicStack';
import LearnStack from '../stacks/LearnStack';
import AccountStack from '../stacks/AccountStack';

const RenderScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>React Native Curved Bottom Bar</Text>
    </View>
  );
};

const ThemeScreen = () => {
  const ref = useRef(null);

  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = '';

    switch (routeName) {
      case 'Data':
        icon = appIcons.data;
        break;
      case 'Mic':
        icon = appIcons.mic;
        break;
      case 'Learn':
        icon = appIcons.learn;
        break;
      case 'Account':
        icon = appIcons.account;
        break;
    }

    return (
      <Image
        source={icon || appIcons.accountSelected}
        style={[
          styles.tabIcons,
          { tintColor: routeName === selectedTab ? colors.P1 : colors.g24 },
        ]}
      />
    );
  };

  const main = useMemo(() => {
    return (
      <View style={styles.container}>
        <CurvedBottomBar.Navigator
          ref={ref}
          shadowStyle={styles.shawdow}
          circlePosition={"CENTER"}
          height={55}
          circleWidth={50}
          bgColor="white"
          borderTopLeftRight
          initialRouteName="Data"
          renderCircle={({ routeName, selectedTab, navigate }) => (
            <TouchableOpacity
              style={[styles.btnCircle]}
              onPress={() => {
                navigate(routeName);
              }}>
              <Image
                source={appIcons.searchSelected}
                style={[
                  styles.tabIcons,
                  { tintColor: routeName === selectedTab ? colors.P1 : colors.g24 },
                ]}
              />
            </TouchableOpacity>
          )}
          tabBar={({ routeName, selectedTab, navigate }) => {
            return (
              <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={styles.tabbarIcon}>
                {_renderIcon(routeName, selectedTab)}
              </TouchableOpacity>
            );
          }}>
          <CurvedBottomBar.Screen
            name="Data"
            position="LEFT"
            component={DataStack}
          />
          <CurvedBottomBar.Screen
            name="Mic"
            component={MicStack}
            position="LEFT"
          />
          <CurvedBottomBar.Screen
            name="TabCenter"
            component={() => (
              <RenderScreen />
            )}
            position="CIRCLE"
          />
          <CurvedBottomBar.Screen
            name="Learn"
            position="RIGHT"
            component={LearnStack}
          />
          <CurvedBottomBar.Screen
            name="Account"
            component={AccountStack}
            position="RIGHT"
          />
        </CurvedBottomBar.Navigator>
      </View>
    );
  }, []);

  return main;
};

const MainScreen = () => {
  return (
    <ThemeScreen />
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 28,
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: '#48CEF6',
  },
  img: {
    width: 30,
    height: 30,
  },
  tabbarIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    backgroundColor: '#BFEFFF',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    alignSelf: 'center',
    marginBottom: 50,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'white',
    margin: 8,
    padding: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  titleButton: {
    fontWeight: 'bold',
  },
  tabIcons: {
    width: WP(7),
    height: WP(7),
    resizeMode: 'contain',
  },
});
