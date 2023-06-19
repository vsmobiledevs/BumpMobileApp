/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { HP, colors, size } from '../../shared/exporter';

function LearnCard({ item }) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Image
        style={styles.imageThumbnail}
        source={{ uri: item?.learn_about_content[0].content_file }}
      />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
}

export { LearnCard };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageThumbnail: {
    height: HP(16),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    borderRadius: HP(1),
    borderWidth: HP(0.2),
    margin: HP(0.5),
  },
  title: {
    fontSize: size.normal,
    color: colors.white,
    textAlign: 'center',
    fontWeight: '500',
    marginVertical: HP(0.5),
  },
});
