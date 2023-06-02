import {StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import {AppButton, AppInput, AuthHeader} from '../../components';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Icons} from '../../assets/icons';
import {Formik} from 'formik';
import {
  resetPassFormFields,
  ResetPassVS,
  family,
  colors,
  HP,
  WP,
} from '../../shared/exporter';
import Toast from 'react-native-simple-toast';
import {AppLoader} from '../../components/AppLoader';
import SuccessModal from '../../components/Modal/SuccessModal';
import {useChangePasswordMutation} from '../../redux/api/auth';

const ResetPassword = () => {
  const [changePassword, response] = useChangePasswordMutation();
  const formikRef = useRef(null);
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  // handling response
  useEffect(() => {
    if (response?.isSuccess) {
      console.log('Success--', response?.data);
      Toast.showWithGravity(response?.data?.message, Toast.SHORT, Toast.BOTTOM);
      navigation.navigate('BottomTabs');
    }
    if (response?.isError) {
      console.log('Error--', response?.error?.data);
      Toast.showWithGravity(
        response?.error?.data?.message,
        Toast.SHORT,
        Toast.BOTTOM,
      );
    }
  }, [response.isLoading]);

  const handleResetPass = async values => {
    // setShowModal(true);
    var body = new FormData();
    body.append('current_password', values.oldPassword);
    body.append('password', values.password);
    body.append('password_confirmation', values.confirmPassword);
    await changePassword(body);
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
      <ScrollView>
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
      </ScrollView>

      {/* app loader */}
      <AppLoader loader_color={colors.g19} loading={response?.isLoading} />

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
