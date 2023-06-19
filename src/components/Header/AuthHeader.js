/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { colors, family, WP, HP } from '../../shared/exporter';

function AuthHeader({ left, center, right, onPressLeft, onPressRight, rightText }) {
  return (
    <View style={styles.mainStyle}>
      <View style={styles.inner}>
        {left && (
          <TouchableOpacity onPress={onPressLeft} style={styles.backArrowContainer}>
            {left}
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.centerText}>
        {center && <Text style={styles.textStyle}>{center}</Text>}
      </View>
      <View style={styles.rightText}>
        {right ? (
          <TouchableOpacity onPress={onPressRight} style={styles.backArrowContainer}>
            {right}
          </TouchableOpacity>
        ) : (
          <Text style={styles.textRight}>{rightText}</Text>
        )}
      </View>
    </View>
  );
}

export { AuthHeader };

const styles = StyleSheet.create({
  mainStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: WP(4),
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'android' ? HP(10) : HP(2),
  },
  backArrowContainer: {
    width: WP(10),
    height: HP(5),
    justifyContent: 'center',
  },
  textStyle: {
    fontWeight: '500',
    fontSize: WP(4.5),
    fontStyle: 'normal',
    color: colors.g19,
    alignSelf: 'center',
    fontFamily: family.Roboto_Bold,
  },
  inner: {
    position: 'absolute',
    left: 0,
    zIndex: 1,
  },
  centerText: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: -1,
  },
  rightText: {
    position: 'absolute',
    right: 0,
    zIndex: 1,
  },
  textRight: {
    color: colors.white,
  },
});
