import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {appIcons, colors, family, HP, size, WP} from '../../shared/exporter';
import {FlatList} from 'react-native-gesture-handler';
import React, {useState} from 'react';

export const BottomTab = ({state, descriptors, navigation}) => {
  //Tab State
  const [tab, setTab] = useState('Home');

  //Select Tabs
  const setSelectedTab = (tabName, index) => {
    if (state?.routes[index]?.name === tabName) {
      setTab(state?.routes[index]?.name);
      navigation.emit({
        type: 'tabPress',
        target: state?.routes[index]?.key,
        canPreventDefault: true,
      });
      navigation.navigate({name: state?.routes[index]?.name, merge: true});
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        numColumns={4}
        data={state?.routes}
        renderItem={({item, index}) => {
          const {options} = descriptors[item?.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : item.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: item.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({name: item.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: item.key,
            });
          };

          return (
            <View
              style={[
                styles.tabContainer,
                {
                  // backgroundColor: index == 1 ? 'red' : 'blue',
                  // borderTopRightRadius: index == 1 ? 20 : 0,
                },
              ]}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}
                style={styles.aiCenter}>
                <Image
                  source={
                    index == 0
                      ? appIcons.data
                      : index == 1
                      ? appIcons.mic
                      : index == 2
                      ? appIcons.learn
                      : index == 3
                      ? appIcons.account
                      : null
                  }
                  style={[
                    styles.tabIcons,
                    {tintColor: isFocused ? colors.P1 : colors.g24},
                  ]}
                />
                <Text
                  style={[
                    styles.textStyle,
                    {
                      color: isFocused ? colors.P1 : colors.g24,
                    },
                  ]}>
                  {label}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  tabIcons: {
    width: WP(7),
    height: WP(7),
    resizeMode: 'contain',
  },
  textStyle: {
    fontSize: size.tiny,
    fontFamily: family.OpenSans_Regular,
    marginTop: 5,
  },
  borderStyle: {},
  tabContainer: {
    width: WP(25),
    height: HP(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiCenter: {
    width: WP(25),
    height: HP(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
