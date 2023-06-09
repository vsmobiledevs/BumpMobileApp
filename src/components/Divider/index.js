/* eslint-disable react/prop-types */
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { HP } from '../../shared/exporter';

function Divider(props) {
  const { color, opacity } = props;
  return <View style={[styles.line, { borderColor: color, opacity }]} />;
}

export default Divider;

const styles = StyleSheet.create({
  line: {
    borderWidth: 0.5,
    marginHorizontal: HP(2),
  },
});
