import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {AuthHeader} from '../../components';
import {HP, colors, size, WP} from '../../shared/exporter';
import {useNavigation} from '@react-navigation/native';
import {
  CodeField,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Icons} from '../../assets/icons';
import {AuthHeading} from '../../components/authHeading';

const OtpVerification = () => {
  const ref = useRef();
  const navigation = useNavigation();
  const [value, setValue] = useState('');

  // navigate when user enter OTP
  useEffect(() => {
    if (value?.length == 4) {
      navigation.navigate('NewPassword');
      setValue('');
    }
  }, [value]);

  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <SafeAreaView style={styles.main}>
      <AuthHeader
        left={Icons.backIcon}
        onPressLeft={() => navigation.goBack()}
      />
      <AuthHeading
        mainHeading="OTP Verification"
        subHeading="Enter the verification code we just sent on your email address."
      />

      <View style={{marginHorizontal: WP(6), marginVertical: HP(4)}}>
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
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
          flexDirection: 'row',
          marginBottom: HP(5),
        }}>
        <Text style={styles.footer}>Didn't receive code?</Text>
        <TouchableOpacity onPress={() => null}>
          <Text style={[styles.footer]}> Resend</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    color: colors.g19,
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
  footer: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: WP(4),
    textAlign: 'center',
    color: colors.g19,
  },

  txtStyle: {
    fontSize: size.large,
    textAlign: 'center',
    color: colors.g19,
    fontWeight: '700',
  },
});
