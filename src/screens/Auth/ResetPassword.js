import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {AppButton, AppInput, AuthHeader} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  ResetPassVS,
  WP,
  colors,
  resetPassFormFields,
} from '../../shared/exporter';
import SuccessModal from '../../components/Modal/SuccessModal';

const ResetPassword = () => {
  const formikRef = useRef();
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const handleResetPass = () => {
    setShowModal(true);
  };

  return (
    <View style={styles.main}>
      <>
        <AuthHeader
          heading="Create new password"
          detail={
            'Your new password must be unique from those previously used.'
          }
          onArrowPress={() => navigation.goBack()}
        />
        <Formik
          innerRef={formikRef}
          initialValues={resetPassFormFields}
          onSubmit={values => {
            handleResetPass(values);
          }}
          validationSchema={ResetPassVS}>
          {({values, errors, touched, handleSubmit, handleChange}) => (
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
              <AppInput
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder={'New Password'}
                secureTextEntry
                errorMessage={errors.password}
                touched={touched.password}
              />
              <AppInput
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                placeholder={'Confirm Password'}
                secureTextEntry
                errorMessage={errors.confirmPassword}
                touched={touched.confirmPassword}
              />
              <AppButton
                title={'Reset Password'}
                buttonContainer={{marginTop: WP(10)}}
                onPress={() => handleSubmit()}
              />
              <SuccessModal
                show={showModal}
                onLoginBackPress={() => setShowModal(false)}
                onTouchCancel={() => setShowModal(false)}
              />
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
