import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {colors, family, HP, size, WP} from '../../shared/exporter';
import {Icons} from '../../assets/icons';
import {FlatList} from 'react-native-gesture-handler';
import React, {useState} from 'react';
import {TabIcons} from '../../shared/utilities/dummyData';

let width = Dimensions.get('window').width;

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
      <ImageBackground
        source={require('../../assets/images/bottomTabImage.png')}
        style={{width: '100%', height: '100%'}}
        resizeMode="contain">
        <FlatList
          horizontal={true}
          scrollEnabled={false}
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
              <View style={[styles.tabContainer]}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={onPress}
                  style={styles.aiCenter}>
                  {index == 2 ? (
                    <View
                      style={{
                        marginBottom: HP(6),
                        marginLeft: WP(0.8),
                      }}>
                      {isFocused
                        ? TabIcons[index].fillIcon
                        : TabIcons[index].icon}
                    </View>
                  ) : (
                    <>
                      {isFocused
                        ? TabIcons[index].fillIcon
                        : TabIcons[index].icon}
                      <Text
                        style={[
                          styles.textStyle,
                          {
                            color: isFocused ? colors.P1 : colors.g24,
                          },
                        ]}>
                        {label}
                      </Text>
                    </>
                  )}
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    fontSize: size.tiny,
    fontFamily: family.OpenSans_Regular,
    marginTop: 5,
  },

  tabContainer: {
    width: width / 5,
    height: HP(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
