import {AppButton, AppInput, AuthHeader} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React, {useRef, useState} from 'react';
import {Formik} from 'formik';
import {Icons} from '../../assets/icons';
import {
  resetPassFormFields,
  ResetPassVS,
  family,
  colors,
  HP,
  WP,
} from '../../shared/exporter';
import SuccessModal from '../../components/Modal/SuccessModal';
import {AppLoader} from '../../components/AppLoader';
import {useChangePasswordMutation} from '../../redux/api/auth';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/features/authSlice';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [changePassword] = useChangePasswordMutation();
  const formikRef = useRef(null);
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPass = async (values, resetForm) => {
    console.log(values);
    // setShowModal(true);
    setIsLoading(true);
    try {
      var body = new FormData();
      body.append('current_password', values.oldPassword);
      body.append('password', values.password);
      body.append('password_confirmation', values.confirmPassword);

      const response = await changePassword(body);
      if (response?.data) {
        resetForm();
        setIsLoading(false);
        dispatch(logout());
        alert(response?.data?.message);
      } else {
        console.log('inside else case--', response?.error);
        setIsLoading(false);
        alert(response?.error?.data?.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.log('change password api error--', error);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <AuthHeader
        left={Icons.leftArrow}
        center={'Reset Password'}
        onPressLeft={() =>
          navigation.navigate('BottomTabs', {screen: 'Account'})
        }
        rightText={'a'}
      />
      <Text style={styles.headingStyle}>Reset Password</Text>
      <Formik
        innerRef={formikRef}
        initialValues={resetPassFormFields}
        onSubmit={(values, {resetForm}) => {
          handleResetPass(values, resetForm);
        }}
        validationSchema={ResetPassVS}>
        {({values, errors, touched, handleSubmit, handleChange}) => (
          <>
            <AppInput
              textInPutProps={{
                style: {color: colors.b1},
                value: values.oldPassword,
                placeholder: 'Old Password',
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('oldPassword'),
              }}
              title={'Current Password'}
              errorMessage={errors.oldPassword}
              touched={touched.oldPassword}
            />
            <AppInput
              textInPutProps={{
                style: {color: colors.b1},
                value: values.password,
                placeholder: 'New Password',
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('password'),
              }}
              title={'New Password'}
              errorMessage={errors.password}
              touched={touched.password}
            />
            <AppInput
              textInPutProps={{
                style: {color: colors.b1},
                value: values.confirmPassword,
                placeholder: 'Confirm New Password',
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('confirmPassword'),
              }}
              title={'Confirm New Password'}
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
          </>
        )}
      </Formik>

      <AppLoader loader_color={colors.g19} loading={isLoading} />

      {/* success modal */}
      <SuccessModal
        show={showModal}
        onLoginBackPress={() => setShowModal(false)}
        onTouchCancel={() => setShowModal(false)}
        reset={true}
      />
    </SafeAreaView>
  );
};

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
