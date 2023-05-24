import {StyleSheet, Text, View, TextInput} from 'react-native';
import {HP, WP, colors, size} from '../../shared/exporter';
import React from 'react';

const AppInput = ({leftIcon, title, errorMessage, touched, textInPutProps}) => {
  return (
    <View style={styles.mainContainer}>
      {title && <Text style={styles.titleStyle}>{title}</Text>}
      <View style={styles.inputContainer}>
        {leftIcon}
        <TextInput 
          {...textInPutProps}
          style={[styles.inputStyle, {...textInPutProps.style}]}
        />
      </View>
      {touched && errorMessage && (
        <Text style={styles.error}>{errorMessage || ''}</Text>
      )}
    </View>
  );
};

export {AppInput};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: HP(1),
  },
  inputContainer: {
    borderWidth: 1,
    height: WP(12),
    borderRadius: WP(7),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.s3,
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
  },
  error: {
    color: colors.red,
    marginStart: HP(4),
    marginTop: HP(0.5),
  },
});
