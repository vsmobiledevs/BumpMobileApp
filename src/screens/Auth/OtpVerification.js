/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Toast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';
import { CodeField, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { AppLoader, AuthHeader } from '../../components';
import { HP, colors, size, WP } from '../../shared/exporter';
import { Icons } from '../../assets/icons';
import { AuthHeading } from '../../components/authHeading';
import { useVarifyOtpMutation } from '../../redux/api/auth';

function OtpVerification({ route }) {
  const [varifyOtp, response] = useVarifyOtpMutation();
  const ref = useRef();
  const navigation = useNavigation();
  const [value, setValue] = useState('');

  // navigate when user enter OTP
  useEffect(() => {
    if (value.length > 0) {
      if (value?.length === 4) {
        otpVerification();
      } else {
        Toast.showWithGravity('Please enter valid OTP', Toast.SHORT, Toast.BOTTOM);
      }
    }
  }, [value.length === 4]);

  useEffect(() => {
    if (response?.isSuccess) {
      navigation.navigate('NewPassword', {
        email: route.params.email,
      });
      setValue('');
      Toast.showWithGravity(response.data.message, Toast.SHORT, Toast.BOTTOM);
    }
    if (response?.isError) {
      Toast.showWithGravity(response?.error?.data?.message, Toast.SHORT, Toast.BOTTOM);
    }
  }, [response.isLoading]);

  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const otpVerification = async () => {
    const body = new FormData();
    body.append('email', route.params.email);
    body.append('otp', value);
    await varifyOtp(body);
  };

  return (
    <SafeAreaView style={styles.main}>
      <AuthHeader left={Icons.backIcon} onPressLeft={() => navigation.goBack()} />
      <AuthHeading
        mainHeading="OTP Verification"
        subHeading="Enter the verification code we just sent on your email address."
      />

      <View style={{ marginHorizontal: WP(6), marginVertical: HP(4) }}>
        <CodeField
          ref={ref}
          value={value}
          cellCount={4}
          {...codeFieldProps}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          onChangeText={(val) => setValue(val)}
          renderCell={({ index, symbol }) => (
            <View
              key={index}
              style={symbol ? styles.cellFillStyle : styles.cellStyle}
              onLayout={getCellOnLayoutHandler(index)}
            >
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
        }}
      >
        <Text style={styles.footer}>Didn't receive code?</Text>
        <TouchableOpacity onPress={() => null}>
          <Text style={[styles.footer]}> Resend</Text>
        </TouchableOpacity>
      </View>

      <AppLoader loader_color={colors.g19} loading={response?.isLoading} />
    </SafeAreaView>
  );
}

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
    fontWeight: '500',
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
