import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {AppButton, AppInput, AuthHeader} from '../../components';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  ForgotPassVS,
  WP,
  colors,
  forgotPassFormFields,
} from '../../shared/exporter';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const formikRef = useRef();
  return (
    <View style={styles.main}>
      <AuthHeader
        heading={'Forgot Password?'}
        detail={'Please enter the email address linked with your account.'}
        onArrowPress={() => navigation.goBack()}
      />
      <Formik
        innerRef={formikRef}
        initialValues={forgotPassFormFields}
        onSubmit={values => {
          handleForgotPass(values);
        }}
        validationSchema={ForgotPassVS}>
        {({values, errors, touched, handleSubmit, handleChange}) => (
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <AppInput
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder={'Enter Your email'}
              keyboardType="email-address"
              errorMessage={errors.email}
              touched={touched.email}
            />
            <AppButton
              touchableOpacity={{
                onPress: () => navigation.navigate('OtpVerification'),
              }}
              title={'Send Code'}
              buttonContainer={{marginTop: WP(35)}}
            />
          </KeyboardAwareScrollView>
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
});
