import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import {MyStatusBar} from '../../../components';
import {HP, WP, appImages, colors} from '../../../shared/exporter';

function Learn() {
  return (
    <SafeAreaView style={styles.container}>
      <MyStatusBar backgroundColor={colors.white} />
      <ImageBackground
        style={styles.homeBackground}
        source={appImages.homeBackgroundBlue} />
    </SafeAreaView>
  );
}

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
