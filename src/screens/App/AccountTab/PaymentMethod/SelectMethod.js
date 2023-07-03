import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { AuthHeader, SelectPaymentMethod } from '../../../../components';
import { HP, colors } from '../../../../shared/exporter';
import { Icons } from '../../../../assets/icons';

function SelectMethod({ navigation }) {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 0,
      title: 'Bank',
      icon: Icons.bankFill,
      isUp: false,
      isAdd: false,
    },
    {
      id: 1,
      title: 'Credit Card',
      icon: Icons.cardFill,
      isUp: false,
      isAdd: false,
    },
  ]);

  const onPressCard = (id) => {
    setPaymentMethods(
      paymentMethods.map((item) => {
        if (item.id === id) {
          return { ...item, isUp: !item.isUp };
        }
        return { ...item, isUp: false };
      })
    );
  };

  const addAnotherBank = (id) => {
    setPaymentMethods(
      paymentMethods.map((item) => {
        if (item.id === id) {
          return { ...item, isAdd: true };
        }
        return { ...item, isAdd: false };
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader
        center="Add Payment Method"
        left={Icons.leftArrow}
        onPressLeft={() => navigation.goBack()}
      />

      {/* select payment method */}
      <View style={styles.selectorContainer}>
        {paymentMethods.map((item) => (
          <SelectPaymentMethod
            key={item?.id}
            item={item}
            onPressCard={() => onPressCard(item.id)}
            addAnotherBank={() => addAnotherBank(item.id)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  selectorContainer: {
    marginTop: HP(6),
  },
});

export { SelectMethod };
