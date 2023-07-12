/* eslint-disable react-hooks/exhaustive-deps */
import { StyleSheet, View, SafeAreaView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';
import Toast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';
import { forgotPassFormFields, ForgotPassVS, colors, WP, HP } from '../../shared/exporter';
import { Icons } from '../../assets/icons';
import { AppButton, AppInput, AppLoader, AuthHeader } from '../../components';
import { AuthHeading } from '../../components/authHeading';
import { useForgotPasswordMutation } from '../../redux/api/auth';

function ForgotPassword() {
  const [forgotPassword, response] = useForgotPasswordMutation();
  const navigation = useNavigation();
  const formikRef = useRef();
  const [email, setEmail] = useState(null);

  useEffect(() => {
    if (response?.isSuccess) {
      console.log(response.data);
      navigation.navigate('OtpVerification', {
        email,
      });
      Toast.showWithGravity(response.data.message, Toast.SHORT, Toast.BOTTOM);
    }
    if (response?.isError) {
      Toast.showWithGravity(response?.error?.data?.message, Toast.SHORT, Toast.BOTTOM);
    }
  }, [response.isLoading]);

  const handleForgotPass = async (values, resetForm) => {
    const body = new FormData();
    body.append('email', values.email);
    setEmail(values.email);
    setTimeout(() => {
      resetForm();
    }, 3000);
    await forgotPassword(body);
  };

  return (
    <SafeAreaView style={styles.main}>
      <AuthHeader left={Icons.backIcon} onPressLeft={() => navigation.goBack()} />
      <AuthHeading
        mainHeading="Forgot Password?"
        subHeading="Please enter the email address linked with your account."
      />
      <Formik
        innerRef={formikRef}
        initialValues={forgotPassFormFields}
        onSubmit={(values, { resetForm }) => {
          handleForgotPass(values, resetForm);
        }}
        validationSchema={ForgotPassVS}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <>
            <View style={styles.inputStyle}>
              <AppInput
                textInPutProps={{
                  style: { color: colors.b1 },
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
                title="Send Code"
                buttonContainer={{ marginTop: WP(35) }}
                touchableOpacity={{
                  onPress: () => handleSubmit(),
                }}
              />
            </View>
          </>
        )}
      </Formik>

      <AppLoader loader_color={colors.g19} loading={response?.isLoading} />
    </SafeAreaView>
  );
}

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
