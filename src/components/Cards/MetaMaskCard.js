/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HP, WP, colors, size } from '../../shared/exporter';

function MetaMaskCard({ item }) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.walletView}>
      <View style={styles.inner}>
        <Text style={styles.wallet}>{item.name}</Text>
        <Image source={item.icon} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
}

export { MetaMaskCard };

const styles = StyleSheet.create({
  walletView: {
    width: WP(85),
    height: HP(5),
    marginTop: HP(2),
    backgroundColor: colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: colors.P1,
    borderWidth: HP(0.1),
    borderRadius: HP(2.5),
    shadowColor: colors.P1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  inner: {
    width: WP(78),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: WP(8),
    height: WP(8),
    resizeMode: 'contain',
  },
  wallet: {
    fontSize: size.small,
    color: colors.g19,
  },
});
