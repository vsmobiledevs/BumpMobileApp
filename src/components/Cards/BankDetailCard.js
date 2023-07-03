import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { HP, WP, colors, size } from '../../shared/exporter';
import { Icons } from '../../assets/icons';
import { AppInput } from '../Input/AppInput';
import { bankDetaisVS } from '../../shared/utilities/validations';
import { AppButton } from '../AppButton/AppButton';

function BankDetailCard({ onPressDelete, addAnotherBank }) {
  const formikRef = useRef();
  const [accountNumber] = useState('1234 1234 1234 1234');

  return (
    <View style={styles.container}>
      <View style={styles.titleContatiner}>
        <Text style={styles.accountTitle}>Standard Chartered</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={onPressDelete}>
          {Icons.delete}
        </TouchableOpacity>
      </View>
      <Text style={styles.accountNumber}>{accountNumber.replace(/.(?=.{4})/g, 'x')}</Text>

      <Formik innerRef={formikRef} initialValues={bankDetaisVS}>
        {({ values }) => (
          <>
            <AppInput
              title="Account Holder Name"
              titleStyle={styles.titleStyle}
              containerStyle={styles.input}
              textInPutProps={{
                style: styles.value,
                value: values.email,
                placeholder: 'Adam Martin',
                placeholderTextColor: colors.b7,
                editable: false,
              }}
            />
            <AppInput
              title="Account Number"
              titleStyle={styles.titleStyle}
              containerStyle={styles.input}
              textInPutProps={{
                style: styles.value,
                value: values.email,
                placeholder: '9375   3756   4333   4555',
                placeholderTextColor: colors.b7,
                editable: false,
              }}
            />

            <AppButton
              buttonContainer={styles.button}
              buttonStyle={styles.buttonStyle}
              title="Add Another Bank"
              touchableOpacity={{
                onPress: addAnotherBank,
              }}
            />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WP(80),
    marginTop: HP(4),
  },
  accountTitle: {
    color: colors.g19,
    fontWeight: 'bold',
    fontSize: size.large,
  },
  titleContatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountNumber: {
    fontSize: size.tiny,
    color: colors.g19,
    marginTop: HP(0.5),
  },
  input: {
    height: WP(10),
    marginHorizontal: WP(0),
    paddingHorizontal: WP(0),
  },
  titleStyle: {
    marginHorizontal: WP(0),
    fontSize: size.xsmall,
  },
  button: {
    width: WP(55),
    borderRadius: WP(5),
    alignSelf: 'flex-start',
    marginVertical: WP(0),
    marginTop: HP(3),
  },
  buttonStyle: {
    paddingVertical: WP(3),
  },
  value: {
    color: colors.b1,
    top: HP(0.2),
  },
});

export { BankDetailCard };
