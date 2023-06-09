/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { HP, WP, colors, size } from '../../shared/exporter';
import { Icons } from '../../assets/icons';

function TaxDocumentCard({ info, onPressCard }) {
  return (
    <TouchableOpacity
      onPress={onPressCard}
      style={[styles.container, { backgroundColor: info?.bgColor }]}
      activeOpacity={0.8}
    >
      <View style={styles.taxFirm}>
        <View style={styles.taxFirmContainer}>
          {Icons.person}
          <Text style={styles.heading}>{info?.heading}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.downloadIcon}>
          {Icons.download}
        </TouchableOpacity>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{info?.title}</Text>
        <Text numberOfLines={3} style={styles.description}>
          {info?.description}
        </Text>
      </View>
      <Text style={styles.date}>{info?.date}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WP(90),
    padding: HP(1.1),
    borderColor: colors.P3,
    borderRadius: HP(1),
    borderWidth: 1,
    marginVertical: HP(0.5),
  },
  taxFirmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taxFirm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  downloadIcon: {
    right: HP(1),
    top: HP(0.5),
  },
  heading: {
    fontSize: size.xxtiny,
    marginStart: HP(0.8),
  },
  title: {
    fontSize: size.medium,
    fontWeight: 'bold',
  },
  description: {
    fontSize: size.xtiny,
    marginTop: HP(1),
  },
  detailsContainer: {
    margin: HP(1),
  },
  date: {
    textAlign: 'right',
    fontSize: size.xxtiny,
    right: HP(1),
  },
});

export { TaxDocumentCard };
