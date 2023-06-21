import { StyleSheet, View } from 'react-native';
import React from 'react';
import { TaxDocumentInfo } from '../../../../shared/utilities/staticInfo';
import { TaxDocumentCard } from '../../../../components';
import { HP } from '../../../../shared/exporter';

export default function Uploaded() {

  const taxDetail = () => {
    console.log('tax details');
  };

  return (
    <View style={styles.container}>
      {TaxDocumentInfo.map((item) => (
        <TaxDocumentCard key={item.id} info={item} onPressCard={taxDetail} />
      ))}
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
