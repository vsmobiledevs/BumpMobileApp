/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import TaxDocumentTabs from '../../../../navigations/taxDocumentTabs';
import { HP, colors } from '../../../../shared/exporter';
import { AuthHeader } from '../../../../components';
import { Icons } from '../../../../assets/icons';

export default function TaxDocument({ navigation }) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AuthHeader
        center="Tax Document"
        left={Icons.leftArrow}
        onPressLeft={() => navigation.goBack()}
      />
      <View style={styles.innerContainer}>
        <TaxDocumentTabs />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.w1,
  },
  innerContainer: {
    flex: 1,
    marginTop: HP(2),
  },
});
