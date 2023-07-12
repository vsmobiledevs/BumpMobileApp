import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppButton, AuthHeader, PaymentMethod } from '../../../../components';
import { Icons } from '../../../../assets/icons';
import { HP, WP, colors } from '../../../../shared/exporter';

function SelectPaymentMethod({ navigation }) {
  const [selectedId, setSelectionId] = useState(null);
  const [paymens] = useState([
    {
      id: 0,
      methods: 'Google Pay',
      icon: Icons.googlePay,
      isSelected: false,
    },
    {
      id: 1,
      methods: 'Apple Pay',
      icon: Icons.applePay,
      isSelected: false,
    },
    {
      id: 2,
      methods: 'Card payment',
      icon: Icons.cardPay,
      isSelected: false,
    },
  ]);

  const onSelectMethod = (id) => {
    setSelectionId(id);
  };

  return (
    <View style={styles.container}>
      <AuthHeader
        center="Select Payment Method"
        left={Icons.leftArrow}
        onPressLeft={() => navigation.goBack()}
      />

      <View style={styles.innerContainer}>
        {paymens.map((item) => (
          <PaymentMethod
            item={item}
            key={item.id}
            onSelectMethod={() => onSelectMethod(item.id)}
            selectedIcon={selectedId === item.id ? Icons.radioFill : Icons.radio}
          />
        ))}

        {selectedId === 2 && (
          <AppButton
            title="Add New Card"
            buttonContainer={styles.addCardbutton}
            touchableOpacity={{
              onPress: () => navigation.navigate('AddCard'),
            }}
          />
        )}

        {selectedId != null && (
          <AppButton
            title="Continue"
            buttonContainer={styles.buttonContainer}
            // touchableOpacity={{
            //   onPress: () => handleSubmit(),
            // }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    marginTop: HP(5),
  },
  buttonContainer: {
    marginTop: HP(10),
  },
  addCardbutton: {
    width: WP(40),
    borderRadius: WP(10),
    marginHorizontal: HP(3),
    marginVertical: WP(5),
    alignSelf: 'flex-start',
  },
});

export default SelectPaymentMethod;
