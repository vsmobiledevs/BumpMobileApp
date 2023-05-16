import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors, family, size, WP} from '../../shared/exporter';

const AppButton = ({
  title,
  buttonStyle,
  onPress,
  txtStyle,
  buttonContainer,
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {...buttonContainer}]}
      onPress={onPress}>
      <LinearGradient
        colors={[colors.P1, colors.P2]}
        style={[styles.buttonStyle, {...buttonStyle}]}>
        <Text style={[styles.txtStyle, {...txtStyle}]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export {AppButton};

const styles = StyleSheet.create({
  buttonContainer: {
    width: WP(88),
    borderRadius: WP(6),
    alignSelf: 'center',
    marginVertical: WP(5),
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: WP(4),
    borderRadius: WP(6),
  },
  txtStyle: {
    color: colors.white,
    fontSize: size.small,
  },
});
