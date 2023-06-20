import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import DataTabs from '../../../navigations/dataTabs';
import { colors } from '../../../shared/exporter';

function Data() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <DataTabs /> */}
      <Text>Coming Soon</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.w1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Data;
