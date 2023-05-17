import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {AuthHeader} from '../../components';
import {HP, colors, size, WP} from '../../shared/exporter';
import {useNavigation} from '@react-navigation/native';
import {
  CodeField,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const OtpVerification = () => {
  const ref = useRef();
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={styles.main}>
      <AuthHeader
        heading={'OTP Verification'}
        detail={
          'Enter the verification code we just sent on your email address.'
        }
        onArrowPress={() => navigation.goBack()}
      />
      <View style={{marginHorizontal: WP(6)}}>
        <CodeField
          ref={ref}
          value={value}
          cellCount={4}
          {...codeFieldProps}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          onChangeText={val => setValue(val)}
          renderCell={({index, symbol}) => (
            <View
              key={index}
              style={symbol ? styles.cellFillStyle : styles.cellStyle}
              onLayout={getCellOnLayoutHandler(index)}>
              <Text style={styles.txtStyle}>{symbol}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.createAccountView}>
        <Text style={styles.txtAccount}>Didn't receive code? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={[styles.txtAccount, {fontWeight: 'bold'}]}>Resend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  resendCodeStyle: {
    color: colors.g19,
    fontSize: size.small,
  },
  createAccountView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: HP(40),
  },
  cellStyle: {
    borderRadius: 5,
    width: WP('18'),
    height: WP('15'),
    alignItems: 'center',
    marginVertical: HP('2'),
    justifyContent: 'center',
    backgroundColor: colors.g22,
    borderWidth: 1,
    borderColor: colors.g21,
  },
  cellFillStyle: {
    borderRadius: 5,
    width: WP('18'),
    height: WP('15'),
    alignItems: 'center',
    marginVertical: HP('2'),
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.P3,
  },
  txtStyle: {
    color: colors.g19,
    textAlign: 'center',
    fontSize: size.large,
    fontWeight: '700',
  },
});
