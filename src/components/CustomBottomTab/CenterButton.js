/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { WP, appImages, colors } from '../../shared/exporter';

function CenterButton({ isFocused }) {
  return (
    <View style={styles.container}>
      <Image
        source={appImages.search}
        style={[styles.icon, { tintColor: isFocused ? colors.P1 : colors.g24 }]}
      />
    </View>
  );
}

export { CenterButton };

const styles = StyleSheet.create({
  container: {
    width: WP(14),
    height: WP(14),
    bottom: 10,
    borderRadius: 999,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
  icon: {
    width: WP(6),
    height: WP(6),
    resizeMode: 'contain',
  },
});
