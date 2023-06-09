/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HP, colors, size } from '../../shared/exporter';
import { Icons } from '../../assets/icons';

function HistoryCard({ info, onPressChecked }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPressChecked} style={styles.checkBox}>
        {info?.checked ? Icons.checked : Icons.unchecked}
      </TouchableOpacity>
      <Text style={styles.time}>{info.time}</Text>

      <View style={styles.details}>
        {info.icon}
        <Text style={styles.text}>{info.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: HP(1),
  },
  time: {
    fontSize: size.small,
    color: colors.g28,
    marginStart: HP(0.5),
  },
  checkBox: {
    width: HP(2.5),
    height: HP(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: HP(0.5),
  },
  details: {
    flexDirection: 'row',
    marginStart: HP(2),
  },
  text: {
    fontSize: size.small,
    color: colors.g19,
  },
});

export { HistoryCard };
