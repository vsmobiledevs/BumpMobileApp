import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppInput, AuthHeader} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {Formik} from 'formik';
import {Icons} from '../../assets/icons';
import {
  HP,
  ResetPassVS,
  WP,
  colors,
  resetPassFormFields,
} from '../../shared/exporter';
import SuccessModal from '../../components/Modal/SuccessModal';
import {AuthHeading} from '../../components/authHeading';

const ResetPassword = () => {
  const formikRef = useRef();
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const handleResetPass = values => {
    setShowModal(true);
  };

  return (
    <View style={styles.main}>
      <AuthHeader
        left={Icons.backIcon}
        onPressLeft={() => navigation.goBack()}
      />
      <AuthHeading
        mainHeading="Create new password"
        subHeading="Your new password must be unique from those previously used."
      />
      <Formik
        innerRef={formikRef}
        initialValues={resetPassFormFields}
        onSubmit={values => {
          handleResetPass(values);
        }}
        validationSchema={ResetPassVS}>
        {({values, errors, touched, handleSubmit, handleChange}) => (
          <View style={styles.miniContainer}>
            <AppInput
              textInPutProps={{
                style: {color: colors.b1},
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
                style: {color: colors.b1},
                value: values.confirmPassword,
                placeholder: 'Confirm Password',
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('confirmPassword'),
              }}
              errorMessage={errors.confirmPassword}
              touched={touched.confirmPassword}
            />
            <AppButton
              title={'Reset Password'}
              buttonContainer={{marginTop: WP(10)}}
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
        onLoginBackPress={() => setShowModal(false)}
        onTouchCancel={() => setShowModal(false)}
      />
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  miniContainer: {
    marginVertical: HP(8),
  },
});
