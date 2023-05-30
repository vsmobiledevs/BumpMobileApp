import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {HP, colors, WP} from '../../../shared/exporter';
import {Icons} from '../../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Data = async ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />

      <ImageBackground
        source={require('../../../assets/images/dots.png')}
        style={{
          width: '100%',
          height: '100%',
          alignSelf: 'center',
        }}
        resizeMode="cover">
        <View style={styles.topStyle}>
          <ImageBackground
            source={require('../../../assets/images/texture.png')}
            style={{
              flex: 1,
              marginBottom: HP(-8),
            }}
            resizeMode="contain">
            <View
              style={{
                justifyContent: 'center',
                flex: 0.7,
              }}>
              <TouchableOpacity
                style={styles.metaMaskStyle}
                onPress={() => navigation.navigate('ContactUs')}>
                {Icons.metaMask}
              </TouchableOpacity>
              {Icons.appLogo}
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Data;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topStyle: {
    backgroundColor: colors.white,
    width: '100%',
    height: HP(32),
    justifyContent: 'center',
    borderBottomLeftRadius: WP(10),
    borderBottomRightRadius: WP(10),
  },
  metaMaskStyle: {
    alignSelf: 'flex-end',
    marginRight: WP(5),
    width: WP(15),
    height: HP(5),
    justifyContent: 'center',
  },
});
