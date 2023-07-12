import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, View, TextInput } from 'react-native';
import { AppButton, AuthHeader } from '../../../../components';
import { Icons } from '../../../../assets/icons';
import { HP, WP, colors } from '../../../../shared/exporter';

function WithdrawAmount({ navigation }) {
  const [amount, setAmount] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader
        center="Withdraw Amount"
        left={Icons.leftArrow}
        onPressLeft={() => navigation.goBack()}
      />
      <View style={styles.innerContainer}>
        <View style={styles.details}>
          <Text style={styles.withDraw}>WITHDRAW FUNDS</Text>

          <View style={styles.amountDetails}>
            <View style={styles.amount}>
              <Text>Bank Transfer</Text>
              {Icons.bank}
            </View>
            <View style={styles.seperator} />
            <View style={styles.amount}>
              <Text>Enter Amount</Text>
              <TextInput
                style={styles.input}
                value={amount}
                onChangeText={(text) => setAmount(text)}
                placeholder="$130.00"
              />
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <AppButton
              title="Cancel"
              txtStyle={styles.txtStyle}
              buttonStyle={styles.buttonStyle}
              buttonContainer={styles.buttonContainer}
              clr1={colors.white}
              clr2={colors.white}
              touchableOpacity={{
                onPress: () => navigation.goBack(),
              }}
            />
            <AppButton
              title="Confirm Withdraw"
              txtStyle={styles.confirmTextStyle}
              buttonStyle={styles.confirmStyle}
              buttonContainer={styles.confirmContainer}
              clr1={colors.darkGreen}
              clr2={colors.darkGreen}
              // touchableOpacity={{
              //   onPress: () => handleSubmit(),
              // }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    height: HP(80),
    width: WP(90),
    marginTop: HP(3),
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: HP(2),
    paddingBottom: HP(4),
    shadowColor: colors.b1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  details: {
    marginTop: HP(6),
    marginHorizontal: HP(2),
  },
  withDraw: {
    color: colors.b1,
    fontSize: HP(2),
    fontWeight: 'bold',
  },
  amountDetails: {
    backgroundColor: colors.white,
    borderColor: colors.g33,
    borderWidth: 0.8,
    borderRadius: HP(1),
    marginTop: HP(3),
  },
  amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: HP(2),
  },
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.g33,
  },
  input: {
    width: WP(18),
    height: HP(4.5),
    borderWidth: 1,
    borderColor: colors.white,
    borderBottomColor: colors.g33,
    paddingStart: HP(1.5),
    fontSize: HP(1.5),
  },
  buttonContainer: {
    width: WP(20),
    borderRadius: WP(1),
    alignSelf: 'center',
    marginVertical: WP(5),
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WP(2),
    paddingVertical: WP(2),
    borderColor: colors.g19,
    borderWidth: 0.8,
  },
  confirmContainer: {
    width: WP(38),
    borderRadius: WP(1),
    alignSelf: 'center',
    marginVertical: WP(5),
  },
  confirmStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WP(2),
    paddingVertical: WP(2),
  },
  txtStyle: {
    color: colors.g19,
  },
  confirmTextStyle: {
    color: colors.white,
  },
  buttonsContainer: {
    marginTop: HP(2),
    width: HP(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
  },
});

export default WithdrawAmount;
