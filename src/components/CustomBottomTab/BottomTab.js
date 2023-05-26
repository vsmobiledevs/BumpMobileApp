import React from 'react';
import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {TabShape} from './TabShape';
import {CenterButton} from './CenterButton';
import {Icons} from '../../assets/icons';
import {HP, colors, size} from '../../shared/exporter';

export const HEIGHT_SIZE = 80;

interface TabBarProps {
  props: BottomTabBarProps<BottomTabBarOptions>;
}

function BottomTab({props: {state, descriptors, navigation}}: TabBarProps) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TabShape />
      <View style={StyleSheet.absoluteFill}>
        <View style={styles.content}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.button}>
                {options.tabBarButton ? (
                  <CenterButton />
                ) : (
                  <View style={styles.textIconContainer}>
                    {index == 0
                      ? isFocused
                        ? Icons.dataFill
                        : Icons.data
                      : index == 1
                      ? isFocused
                        ? Icons.micFill
                        : Icons.mic
                      : index == 3
                      ? Icons.learn
                      : index == 4
                      ? Icons.account
                      : null}
                    <Text
                      style={isFocused ? styles.label : styles.inactiveLabel}>
                      {label}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

export {BottomTab};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    height: HEIGHT_SIZE,
    position: 'absolute',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    elevation: 5,
    bottom: 0,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    marginBottom: HP(1.5),
  },
  label: {
    color: colors.P1,
    marginTop: HP(0.5),
    fontSize: size.xxsmall,
  },
  inactiveLabel: {
    color: colors.g24,
    marginTop: HP(0.5),
    fontSize: size.xxsmall,
  },
  textIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
