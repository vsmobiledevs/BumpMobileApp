import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HP} from '../../shared/exporter';

const Divider = props => {
  const {color, opacity} = props;
  return (
    <View
      style={{
        borderColor: color,
        borderWidth: 0.5,
        marginHorizontal: HP(2),
        opacity: opacity,
      }}
    />
  );
};

export default Divider;

const styles = StyleSheet.create({});
