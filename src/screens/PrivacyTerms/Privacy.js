import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

const Privacy = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Privacy</Text>
    </SafeAreaView>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
