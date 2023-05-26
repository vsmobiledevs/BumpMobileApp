import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {HP, WP, colors, family} from '../../shared/exporter';
import Divider from '../Divider';

const AccountButton = ({leftIcon, title, rightIcon, onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.mainView} onPress={onPress}>
        <View style={{flexDirection: 'row'}}>
          {leftIcon}

          <Text style={styles.titleStyle}>{title}</Text>
        </View>
        {rightIcon}
      </TouchableOpacity>
      <Divider color={colors.g19} opacity={0.1} />
    </>
  );
};

export default AccountButton;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: WP(5),
    height: HP(8),
  },
  titleStyle: {
    fontFamily: family.Roboto_Medium,
    color: colors.g19,
    fontSize: WP(5),
    alignSelf: 'center',

    marginLeft: WP(4),
  },
});
