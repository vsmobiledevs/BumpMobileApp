import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Toast from 'react-native-simple-toast';
import { TaxDocumentCard } from '../../../../components';
import { HP } from '../../../../shared/exporter';
import { TaxDocumentInfo } from '../../../../shared/utilities/staticInfo';

export default function Received() {
  const taxDetail = () => {

    Toast.showWithGravity(
      'Tax detail',
      Toast.SHORT,
      Toast.BOTTOM,
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {TaxDocumentInfo.map((item) => (
          <TaxDocumentCard key={item.id} info={item} onPressCard={taxDetail} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HP(4),
    marginHorizontal: HP(2),
  },
});
