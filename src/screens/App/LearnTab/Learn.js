import React from 'react';
import {MyStatusBar} from '../../../components';
import {HP, WP, appImages, colors} from '../../../shared/exporter';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';

const Learn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MyStatusBar backgroundColor={colors.white} />
      <ImageBackground
        style={styles.homeBackground}
        source={appImages.homeBackgroundBlue}></ImageBackground>
    </SafeAreaView>
  );
};

export default Learn;

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
});
