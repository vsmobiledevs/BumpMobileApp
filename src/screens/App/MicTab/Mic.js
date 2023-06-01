import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import {HP, WP, appImages, colors} from '../../../shared/exporter';
import {MyStatusBar} from '../../../components';
import React from 'react';
import {Icons} from '../../../assets/icons';

const Mic = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MyStatusBar backgroundColor={colors.white} />
      <ImageBackground
        style={styles.homeBackground}
        source={appImages.homeBackgroundBlue}>
        <View style={styles.innerContainer}>{Icons.comingSoon}</View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Mic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  homeBackground: {
    width: WP(100),
    height: HP(100),
    resizeMode: 'contain',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: HP(5),
  },
});
