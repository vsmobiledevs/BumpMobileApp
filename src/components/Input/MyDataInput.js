/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { HP, WP, colors, size } from '../../shared/exporter';

function MyDataInput({ value, setValue, label, rightIcon, onPressIcon, isEdit }) {
  return (
    <View style={[styles.mainContainer]}>
      <TextInput
        mode={isEdit ? 'flat' : 'outlined'}
        editable={!isEdit}
        label={label}
        value={value}
        onChangeText={(value) => setValue(value)}
        outlineStyle={styles.outlineStyle}
        activeOutlineColor={colors.b1}
        outlineColor={colors.w1}
        style={[isEdit ? styles.inputStyle : styles.editInputStyle]}
      />
      {isEdit && (
        <TouchableOpacity activeOpacity={0.8} style={styles.iconStyle} onPress={onPressIcon}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: HP(1),
    marginTop: HP(2),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  outlineStyle: {
    borderColor: colors.P1,
    backgroundColor: colors.w1,
    borderRadius: HP(1),
    borderWidth: HP(0.1),
  },
  inputStyle: {
    width: WP(92),
    color: colors.g18,
    borderColor: colors.P1,
    fontSize: size.xsmall,
    paddingBottom: HP(0.7),
    backgroundColor: colors.w1,
  },
  editInputStyle: {
    width: WP(86),
    color: colors.g18,
    borderColor: colors.P1,
    fontSize: size.xsmall,
  },

  titleStyle: {
    color: colors.g19,
    fontSize: size.normal,
    marginHorizontal: WP(6),
    fontWeight: 'bold',
  },
  iconStyle: {
    position: 'absolute',
    right: HP(1),
    bottom: HP(2.5),
  },
});

export { MyDataInput };
