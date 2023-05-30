import {AppButton, AppInput, AuthHeader} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useRef, useState} from 'react';
import {Formik} from 'formik';
import {Icons} from '../../assets/icons';
import {
  HP,
  ResetPassVS,
  WP,
  colors,
  family,
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
        onSubmit={values => {
          handleResetPass(values);
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
    marginHorizontal: WP(6),
    color: colors.g19,
    fontFamily: family.Roboto_Medium,
    fontSize: WP(5),
    marginTop: HP(7),
    marginBottom: HP(5),
  },
});
