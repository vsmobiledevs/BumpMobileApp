/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { HP, colors } from '../../shared/exporter';

function PaymentMethod({ item, onSelectMethod, selectedIcon }) {
  return (
    <TouchableOpacity onPress={onSelectMethod} activeOpacity={0.9} style={styles.container}>
      <View>{item.icon}</View>
      <View>{selectedIcon}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: HP(3),
    backgroundColor: colors.white,
    padding: HP(2),
    paddingTop: HP(3),
    paddingBottom: HP(3),
    borderRadius: HP(1),
    margin: HP(1),
    shadowColor: colors.b1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

export { PaymentMethod };
