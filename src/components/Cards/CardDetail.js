import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icons } from '../../assets/icons';
import { HP, WP, colors, size } from '../../shared/exporter';

function CardDetail({ onPressDelete, item }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContatiner}>
        <Text style={styles.accountTitle}>{item?.brand}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={() => onPressDelete(item)}>
          {Icons.delete}
        </TouchableOpacity>
      </View>
      <Text style={styles.accountNumber}>{`**** **** **** ${item?.last4}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: WP(80),
    marginTop: HP(4),
    padding: HP(2),
    borderRadius: HP(1),
    shadowColor: colors.b1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  accountTitle: {
    color: colors.g19,
    fontWeight: 'bold',
    fontSize: size.large,
  },
  titleContatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountNumber: {
    fontSize: size.tiny,
    color: colors.g19,
    marginTop: HP(0.5),
  },
  input: {
    height: WP(10),
    marginHorizontal: WP(0),
    paddingHorizontal: WP(0),
  },
  titleStyle: {
    marginHorizontal: WP(0),
    fontSize: size.xsmall,
  },
  button: {
    width: WP(55),
    borderRadius: WP(5),
    alignSelf: 'flex-start',
    marginVertical: WP(0),
    marginTop: HP(3),
  },
  buttonStyle: {
    paddingVertical: WP(3),
  },
  value: {
    color: colors.b1,
    top: HP(0.2),
  },
});

export { CardDetail };
