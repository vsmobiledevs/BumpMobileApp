import {StyleSheet, Text, View, TextInput} from 'react-native';
import {HP, WP, colors, size} from '../../shared/exporter';
import React from 'react';

const AuthHeading = props => {
  const {mainHeading, subHeading} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>{mainHeading}</Text>
      <Text style={styles.subHeading}>{subHeading}</Text>
    </View>
  );
};

export {AuthHeading};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: WP(8),
    marginTop: HP(3),
  },
  mainHeading: {
    fontWeight: '700',
    fontSize: WP(7),
    fontStyle: 'normal',
    color: colors.g19,
  },
  subHeading: {
    marginTop: HP(1),
    fontWeight: '500',
    fontSize: WP(4.8),
    lineHeight: HP(3.5),
    fontStyle: 'normal',
    color: colors.g19,
  },
});
