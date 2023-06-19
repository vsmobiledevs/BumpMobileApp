import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import DataTabs from '../../../navigations/dataTabs';
import { colors } from '../../../shared/exporter';

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
  },
});

export default Data;
