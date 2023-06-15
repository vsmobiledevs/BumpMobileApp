import React from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import DataTabs from '../../../navigations/dataTabs';
import { HP, colors } from '../../../shared/exporter';

function Data() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <DataTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.w1,
    marginTop: Platform.OS === 'android' ? HP(3) : 0
  },
});

export default Data;
