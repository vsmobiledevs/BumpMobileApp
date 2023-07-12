/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { HP, WP, colors, size } from '../../shared/exporter';

function AppInput({
  title,
  touched,
  leftIcon,
  rightIcon,
  onPressEye,
  titleStyle,
  eyeIconStyle,
  errorMessage,
  textInPutProps,
  containerStyle,
  errorStyle,
}) {
  return (
    <View style={[styles.mainContainer]}>
      {title && <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>}
      <View style={[styles.inputContainer, containerStyle]}>
        {leftIcon}
        <TextInput {...textInPutProps} style={[styles.inputStyle, { ...textInPutProps.style }]} />
        <TouchableOpacity
          onPress={onPressEye}
          activeOpacity={0.8}
          style={[styles.eyeIcon, { ...eyeIconStyle }]}
        >
          {rightIcon}
        </TouchableOpacity>
      </View>
      {touched && errorMessage && (
        <Text style={[styles.error, errorStyle]}>{errorMessage || ''}</Text>
      )}
    </View>
  );
}

export { AppInput };

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: HP(1),
  },
  inputContainer: {
    height: WP(12),
    borderWidth: 1,
    borderRadius: WP(7),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.P3,
    marginHorizontal: WP(6),
    paddingHorizontal: WP(5),
    backgroundColor: colors.t1,
  },
  inputStyle: {
    width: WP(70),
    color: colors.g18,
    marginStart: WP(2),
  },
  titleStyle: {
    color: colors.g19,
    fontSize: size.normal,
    marginHorizontal: WP(8),
    marginVertical: HP(1),
  },
  error: {
    color: colors.red,
    marginStart: HP(4),
    marginTop: HP(0.5),
  },
  eyeIcon: {
    right: HP(1.5),
    padding: HP(0.6),
  },
});
