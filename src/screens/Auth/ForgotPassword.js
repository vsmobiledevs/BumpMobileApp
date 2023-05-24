import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppInput, AuthHeader} from '../../components';
import {StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import {Formik} from 'formik';
import {
  forgotPassFormFields,
  ForgotPassVS,
  colors,
  WP,
} from '../../shared/exporter';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const formikRef = useRef();

  const handleForgotPass = values => {
    navigation.navigate('OtpVerification');
  };

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
            <AppButton
              title={'Send Code'}
              buttonContainer={{marginTop: WP(35)}}
              touchableOpacity={{
                onPress: () => handleSubmit(),
              }}
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
