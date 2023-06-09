/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Image, Text } from 'react-native';
import { HP, WP, appImages, colors, size } from '../../shared/exporter';
import { CenterButton } from './CenterButton';
import { TabShape } from './TabShape';

export const HEIGHT_SIZE = 80;

function BottomTab({ props: { state, descriptors, navigation } }) {
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
            const { options } = descriptors[route.key];
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
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.button}
              >
                {options.tabBarButton ? (
                  <CenterButton isFocused={isFocused} />
                ) : (
                  <View style={styles.textIconContainer}>
                    <Image
                      source={
                        index === 0
                          ? appImages.myData
                          : index === 1
                          ? appImages.mic
                          : index === 3
                          ? appImages.learn
                          : index === 4
                          ? appImages.account
                          : null
                      }
                      style={[styles.icon, { tintColor: isFocused ? colors.P1 : colors.g24 }]}
                    />
                    <Text style={isFocused ? styles.label : styles.inactiveLabel}>{label}</Text>
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

export { BottomTab };

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    height: HEIGHT_SIZE,
    position: 'absolute',
    shadowColor: colors.b1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    elevation: 10,
    bottom: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    marginBottom: HP(2),
  },
  label: {
    color: colors.P1,
    marginTop: HP(0.6),
    fontSize: size.xxsmall,
  },
  inactiveLabel: {
    color: colors.g24,
    marginTop: HP(0.6),
    fontSize: size.xxsmall,
  },
  textIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: WP(5),
    height: WP(5),
    resizeMode: 'contain',
  },
});
