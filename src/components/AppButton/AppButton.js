/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, family, size, WP } from '../../shared/exporter';
import { Icons } from '../../assets/icons';

function AppButton({
  title,
  buttonStyle,
  txtStyle,
  clr1 = colors.P1,
  clr2 = colors.P2,
  buttonContainer,
  touchableOpacity,
  leftIcon,
  text,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...touchableOpacity}
      style={[styles.buttonContainer, { ...buttonContainer }]}
    >
      <LinearGradient colors={[clr1, clr2]} style={[styles.buttonStyle, { ...buttonStyle }]}>
        {leftIcon && Icons.dollar}
        <Text style={[styles.txtStyle, { ...txtStyle }]} {...text}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export { AppButton };

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
    fontFamily: family.Roboto_Regular,
  },
});
