import {AppButton, AppInput, AuthHeader} from '../../components';
import {StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import {Formik} from 'formik';
import {
  forgotPassFormFields,
  ForgotPassVS,
  colors,
  WP,
  HP,
} from '../../shared/exporter';
import {Icons} from '../../assets/icons';

import {useNavigation} from '@react-navigation/native';
import {AuthHeading} from '../../components/authHeading';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const formikRef = useRef();

  const handleForgotPass = values => {
    navigation.navigate('OtpVerification');
  };

  return (
    <View style={styles.main}>
      <AuthHeader
        left={Icons.backIcon}
        onPressLeft={() => navigation.goBack()}
      />
      <AuthHeading
        mainHeading="Forgot Password?"
        subHeading="Please enter the email address linked with your account."
      />
      <Formik
        innerRef={formikRef}
        initialValues={forgotPassFormFields}
        onSubmit={values => {
          handleForgotPass(values);
        }}
        validationSchema={ForgotPassVS}>
        {({values, errors, touched, handleSubmit, handleChange}) => (
          <>
            <View style={styles.inputStyle}>
              <AppInput
                textInPutProps={{
                  style: {color: colors.b1},
                  value: values.email,
                  placeholder: 'Enter Your email',
                  keyboardType: 'email-address',
                  placeholderTextColor: colors.b4,
                  onChangeText: handleChange('email'),
                }}
                errorMessage={errors.email}
                touched={touched.email}
              />
            </View>
            <View>
              <AppButton
                title={'Send Code'}
                buttonContainer={{marginTop: WP(35)}}
                touchableOpacity={{
                  onPress: () => handleSubmit(),
                }}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputStyle: {
    marginTop: HP(10),
  },
});
