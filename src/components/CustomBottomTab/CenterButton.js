/* eslint-disable import/prefer-default-export */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WP, colors } from '../../shared/exporter';
import { Icons } from '../../assets/icons';

function CenterButton() {
  return <View style={styles.container}>{Icons.search}</View>;
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
});
