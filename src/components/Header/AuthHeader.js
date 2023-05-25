import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, family, size, WP, HP} from '../../shared/exporter';
import {Icons} from '../../assets/icons';

const AuthHeader = ({
  left,
  center,
  right,
  leftText,
  onPressLeft,
  onPressRight,
}) => {
  return (
    <View style={styles.mainStyle}>
      {left && (
        <TouchableOpacity
          onPress={onPressLeft}
          style={styles.backArrowContainer}>
          {left}
        </TouchableOpacity>
      )}
      {center && <Text style={styles.textStyle}>{center}</Text>}
      {right && (
        <TouchableOpacity
          onPress={onPressRight}
          style={styles.backArrowContainer}>
          {right}
        </TouchableOpacity>
      )}
    </View>
  );
};

export {AuthHeader};

const styles = StyleSheet.create({
  mainStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: WP(4),
    marginHorizontal: WP(4),
  },
  backArrowContainer: {
    width: WP(10),
    height: HP(5),
    justifyContent: 'center',
  },
  textStyle: {
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: WP(5),
    color: colors.g19,
  },
});
