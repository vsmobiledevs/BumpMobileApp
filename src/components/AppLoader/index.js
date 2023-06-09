/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SkypeIndicator } from 'react-native-indicators';
import { colors } from '../../shared/exporter';

export function AppLoader({ loader_color, loading }) {
  return (
    <>
      {loading && (
        <View style={styles.container}>
          <SkypeIndicator size={50} color={loader_color || colors.g19} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
