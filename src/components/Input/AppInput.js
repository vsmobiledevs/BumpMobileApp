import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {WP, colors, size} from '../../shared/exporter';

const AppInput = ({leftIcon, title, errorMessage, touched, textInPutProps}) => {
  return (
    <View>
      {title && <Text style={styles.titleStyle}>{title}</Text>}
      <View style={styles.inputContainer}>
        {leftIcon}
        <TextInput
          {...textInPutProps}
          style={[styles.inputStyle, {...textInPutProps.style}]}
          errorMessage={touched && errorMessage}
        />
      </View>
    </View>
  );
};

export {AppInput};

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: WP(5),
    borderWidth: 1,
    height: WP('14'),
    borderRadius: WP(7),
    flexDirection: 'row',
    borderColor: colors.s3,
    backgroundColor: colors.t1,
    marginVertical: WP(3),
    marginHorizontal: WP(6),
    height: WP(12),
  },
  inputStyle: {
    width: WP(70),
    color: colors.g18,
  },
  iconStyle: {
    width: WP(4),
    height: WP(4),
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: WP(2),
  },
  titleStyle: {
    color: colors.g19,
    fontSize: size.normal,
    marginHorizontal: WP(8),
  },
});
