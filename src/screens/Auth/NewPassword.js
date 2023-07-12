/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';
import Toast from 'react-native-simple-toast';
import { AppButton, AppInput, AppLoader, AuthHeader } from '../../components';
import { Icons } from '../../assets/icons';
import { HP, WP, colors } from '../../shared/exporter';
import SuccessModal from '../../components/Modal/SuccessModal';
import { AuthHeading } from '../../components/authHeading';
import { NewPassVS, newPassFormFields } from '../../shared/utilities/validations';
import { useResetPasswordMutation } from '../../redux/api/auth';

function NewPassword({ route }) {
  const [resetPassword, response] = useResetPasswordMutation();
  const formikRef = useRef();
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (response?.isSuccess) {
      setShowModal(true);
      Toast.showWithGravity(response.data.message, Toast.SHORT, Toast.BOTTOM);
    }
    if (response?.isError) {
      Toast.showWithGravity(response?.error?.data?.message, Toast.SHORT, Toast.BOTTOM);
    }
  }, [response.isLoading]);

  const handleResetPass = async (values) => {
    const body = new FormData();
    body.append('email', route.params.email);
    body.append('password', values.password);
    body.append('password_confirmation', values.confirmPassword);
    await resetPassword(body);
  };

  return (
    <SafeAreaView style={styles.main}>
      <AuthHeader left={Icons.backIcon} onPressLeft={() => navigation.goBack()} />
      <AuthHeading
        mainHeading="Create new password"
        subHeading="Your new password must be unique from those previously used."
      />
      <Formik
        innerRef={formikRef}
        initialValues={newPassFormFields}
        onSubmit={(values) => {
          handleResetPass(values);
        }}
        validationSchema={NewPassVS}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <View style={styles.miniContainer}>
            <AppInput
              textInPutProps={{
                style: { color: colors.b1 },
                value: values.password,
                placeholder: 'New Password',
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('password'),
              }}
              errorMessage={errors.password}
              touched={touched.password}
            />
            <AppInput
              textInPutProps={{
                style: { color: colors.b1 },
                value: values.confirmPassword,
                placeholder: 'Confirm Password',
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('confirmPassword'),
              }}
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
          </View>
        )}
      </Formik>

      {/* success modal */}
      <SuccessModal
        show={showModal}
        onLoginBackPress={() => navigation.replace('auth')}
        // onTouchCancel={() => setShowModal(false)}
      />
      <AppLoader loader_color={colors.g19} loading={response?.isLoading} />
    </SafeAreaView>
  );
}

export default NewPassword;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  miniContainer: {
    marginVertical: HP(8),
  },
});
