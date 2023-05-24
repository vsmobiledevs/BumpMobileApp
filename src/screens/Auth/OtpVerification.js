import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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

  // navigate when user enter OTP
  useEffect(() => {
    if (value?.length === 4) {
      navigation.navigate('ResetPassword');
      setValue('');
    }
  }, [value]);

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

      {/* OTP fields */}
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

      {/* resend OTP */}
      <View style={styles.createAccountView}>
        <Text style={styles.txtAccount}>{`Didn't receive code? `}</Text>
        <TouchableOpacity>
          <Text style={[styles.txtAccount, {fontWeight: 'bold'}]}>
            {'Resend'}
          </Text>
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
    width: WP(18),
    height: WP(15),
    borderWidth: 1,
    alignItems: 'center',
    marginVertical: HP(2),
    borderColor: colors.g21,
    justifyContent: 'center',
    backgroundColor: colors.g22,
  },
  cellFillStyle: {
    borderWidth: 1,
    width: WP(18),
    borderRadius: 5,
    height: WP(15),
    alignItems: 'center',
    marginVertical: HP(2),
    borderColor: colors.P3,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  txtStyle: {
    fontSize: size.large,
    textAlign: 'center',
    color: colors.g19,
    fontWeight: '700',
  },
});
