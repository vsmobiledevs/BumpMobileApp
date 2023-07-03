/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Toast from 'react-native-simple-toast';
import { Icons } from '../../assets/icons';
import SuccessModal from '../../components/Modal/SuccessModal';
import { AppLoader } from '../../components/AppLoader';
import { logout } from '../../redux/features/authSlice';
import { useChangePasswordMutation } from '../../redux/api/auth';
import { AppButton, AppInput, AuthHeader } from '../../components';
import { resetPassFormFields, ResetPassVS, family, colors, HP, WP } from '../../shared/exporter';

function ResetPassword() {
  const dispatch = useDispatch(null);
  const navigation = useNavigation();
  const formikRef = useRef(null);
  const [changePassword, response] = useChangePasswordMutation();
  const [showModal, setShowModal] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  // handling response
  useEffect(() => {
    if (response?.isSuccess) {
      console.log(response.data);
      setShowModal(true);
      Toast.showWithGravity(response?.data?.message, Toast.SHORT, Toast.BOTTOM);
      setTimeout(() => {
        setShowModal(false);
        GoogleSignin.signOut();
        dispatch(logout());
      }, 3000);
    }
    if (response?.isError) {
      console.log(response.error);
      Toast.showWithGravity(response?.error?.data?.message, Toast.SHORT, Toast.BOTTOM);
    }
  }, [response.isLoading]);

  const handleResetPass = async (values) => {
    const body = new FormData();
    body.append('current_password', values.oldPassword);
    body.append('password', values.password);
    body.append('password_confirmation', values.confirmPassword);
    await changePassword(body);
  };

  return (
    <SafeAreaView style={styles.main}>
      <AuthHeader
        left={Icons.leftArrow}
        center="Reset Password"
        onPressLeft={() => navigation.navigate('BottomTabs', { screen: 'Account' })}
        rightText="a"
      />
      <ScrollView>
        <Text style={styles.headingStyle}>Reset Password</Text>
        <Formik
          innerRef={formikRef}
          initialValues={resetPassFormFields}
          onSubmit={(values) => {
            handleResetPass(values);
          }}
          validationSchema={ResetPassVS}
        >
          {({ values, errors, touched, handleSubmit, handleChange }) => (
            <>
              <AppInput
                textInPutProps={{
                  style: { color: colors.b1 },
                  value: values.oldPassword,
                  placeholder: 'Old Password',
                  placeholderTextColor: colors.b4,
                  onChangeText: handleChange('oldPassword'),
                  secureTextEntry: showCurrentPassword,
                  enablesReturnKeyAutomatically: true,
                }}
                eyeIconStyle={{ right: HP(0) }}
                rightIcon={Icons.eye}
                onPressEye={() => setShowCurrentPassword(!showCurrentPassword)}
                title="Current Password"
                errorMessage={errors.oldPassword}
                touched={touched.oldPassword}
              />
              <AppInput
                textInPutProps={{
                  style: { color: colors.b1 },
                  value: values.password,
                  placeholder: 'New Password',
                  placeholderTextColor: colors.b4,
                  secureTextEntry: showNewPassword,
                  enablesReturnKeyAutomatically: true,
                  onChangeText: handleChange('password'),
                }}
                eyeIconStyle={{ right: HP(0) }}
                rightIcon={Icons.eye}
                onPressEye={() => setShowNewPassword(!showNewPassword)}
                title="New Password"
                errorMessage={errors.password}
                touched={touched.password}
              />
              <AppInput
                textInPutProps={{
                  style: { color: colors.b1 },
                  value: values.confirmPassword,
                  placeholder: 'Confirm New Password',
                  placeholderTextColor: colors.b4,
                  onChangeText: handleChange('confirmPassword'),
                  secureTextEntry: showConfirmPassword,
                  enablesReturnKeyAutomatically: true,
                }}
                eyeIconStyle={{ right: HP(0) }}
                rightIcon={Icons.eye}
                onPressEye={() => setShowConfirmPassword(!showConfirmPassword)}
                title="Confirm New Password"
                errorMessage={errors.confirmPassword}
                touched={touched.confirmPassword}
              />
              <AppButton
                title="Reset Password"
                buttonContainer={{ marginTop: WP(10) }}
                touchableOpacity={{
                  onPress: () => handleSubmit(),
                }}
              />
            </>
          )}
        </Formik>
      </ScrollView>

      {/* app loader */}
      <AppLoader loader_color={colors.g19} loading={response?.isLoading} />

      {/* success modal */}
      <SuccessModal
        show={showModal}
        onLoginBackPress={() => setShowModal(false)}
        onTouchCancel={() => setShowModal(false)}
        reset
      />
    </SafeAreaView>
  );
}

export default ResetPassword;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headingStyle: {
    fontFamily: family.Roboto_Medium,
    marginHorizontal: WP(6),
    marginBottom: HP(5),
    color: colors.g19,
    marginTop: HP(7),
    fontSize: WP(5),
  },
});
