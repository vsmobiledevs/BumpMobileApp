/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HP, WP, colors, family } from '../../shared/exporter';
import Divider from '../Divider';

function AccountButton({ leftIcon, title, rightIcon, onPress }) {
  return (
    <>
      <TouchableOpacity style={[styles.mainView, {}]} onPress={onPress}>
        <View style={styles.innerView}>
          {leftIcon}

          <Text style={styles.titleStyle}>{title}</Text>
        </View>
        {rightIcon}
      </TouchableOpacity>
      <Divider color={colors.g19} opacity={0.1} />
    </>
  );
}

export default AccountButton;

const styles = StyleSheet.create({
  mainView: {
    height: HP(8),
    marginHorizontal: WP(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontFamily: family.Roboto_Medium,
    color: colors.g19,
    fontSize: WP(4),
    marginLeft: WP(4),
    alignSelf: 'center',
  },
  innerView: {
    flexDirection: 'row',
  },
});
