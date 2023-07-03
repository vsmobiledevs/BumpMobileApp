/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import Toast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  AppButton,
  AppInput,
  AuthHeader,
  DeleteAccountModal,
  ConfirmModal,
} from '../../../components';
import {
  HP,
  WP,
  colors,
  family,
  size,
  DeleteAccountVS,
  deleteAccountFields,
} from '../../../shared/exporter';
import { Icons } from '../../../assets/icons';
import { useDeleteAccountMutation } from '../../../redux/api/auth';
import { AppLoader } from '../../../components/AppLoader';
import { useAppSelector } from '../../../redux/store';
import { logout } from '../../../redux/features/authSlice';

function DeleteAccount() {
  const dispatch = useDispatch(null);
  const { user } = useAppSelector((state) => state?.authSlice);
  const [deleteAccount, response] = useDeleteAccountMutation();
  const navigation = useNavigation();
  const [reason, setReason] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const formikRef = useRef();

  // handling response
  useEffect(() => {
    if (response?.isSuccess) {
      if (response?.data.message === 'Password is incorrect') {
        Toast.showWithGravity(response?.data?.message, Toast.SHORT, Toast.BOTTOM);
      } else {
        setDeleteModal(true);
        Toast.showWithGravity(response?.data?.message, Toast.SHORT, Toast.BOTTOM);
        setTimeout(() => {
          setDeleteModal(false);
          GoogleSignin.signOut();
          dispatch(logout());
        }, 3000);
      }
    }
    if (response?.isError) {
      Toast.showWithGravity(response?.error?.data?.message, Toast.SHORT, Toast.BOTTOM);
    }
  }, [response?.isLoading]);

  const handleDelete = async (values) => {
    const id = user?.id;
    const body = new FormData();
    body.append('password', values.password);
    body.append('body', reason);
    await deleteAccount({ body, id });
  };

  const onPressContinue = () => {
    setConfirmModal(true);
  };

  const onPressEye = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader
        center="Delete Account"
        left={Icons.leftArrow}
        onPressLeft={() => navigation.goBack()}
      />
      {!confirm ? (
        <ScrollView>
          <Text style={styles.feedbackTxt}>
            We’re sorry to see you go! Could you please let us know why you’d like to delete your
            account? {'\n'}Your feedback would be greatly appreciated and would help us improve our
            services in the future. Thank you!"
          </Text>
          <AppInput
            textInPutProps={{
              value: reason,
              style: styles.inputStyle,
              placeholder: 'Write Here..',
              placeholderTextColor: colors.g25,
              onChangeText: (txt) => setReason(txt),
              multiline: true,
              textAlignVertical: 'top',
            }}
            containerStyle={styles.inputContainer}
          />
          <AppButton
            title="Continue..."
            buttonContainer={styles.buttonStyle}
            touchableOpacity={{
              onPress: () => onPressContinue(),
            }}
          />
        </ScrollView>
      ) : (
        <ScrollView>
          <Text style={styles.headingStyle}>Please Enter your Password.</Text>
          <Formik
            innerRef={formikRef}
            initialValues={deleteAccountFields}
            onSubmit={(values) => {
              handleDelete(values);
            }}
            validationSchema={DeleteAccountVS}
          >
            {({ values, errors, touched, handleSubmit, handleChange }) => (
              <>
                <AppInput
                  textInPutProps={{
                    style: styles.passwordInputStyle,
                    value: values.password,
                    onChangeText: handleChange('password'),
                    placeholder: 'Enter password',
                    secureTextEntry: showPassword,
                    enablesReturnKeyAutomatically: true,
                  }}
                  eyeIconStyle={{ right: HP(2) }}
                  rightIcon={Icons.eye}
                  onPressEye={onPressEye}
                  errorMessage={errors.password}
                  touched={touched.password}
                />
                <AppButton
                  title="Delete Account"
                  buttonContainer={{ marginTop: WP(15) }}
                  clr1={colors.s10}
                  clr2={colors.s10}
                  touchableOpacity={{
                    onPress: () => handleSubmit(),
                  }}
                />
              </>
            )}
          </Formik>
        </ScrollView>
      )}
      <ConfirmModal
        show={confirmModal}
        onTouchCancel={() => setConfirmModal(false)}
        onCancelPress={() => setConfirmModal(false)}
        onConfirmPress={() => {
          setConfirm(true);
          setConfirmModal(false);
        }}
      />
      <DeleteAccountModal
        show={deleteModal}
        onTouchCancel={() => setDeleteModal(false)}
        onOKPress={() => {
          setDeleteModal(false);
        }}
      />
      {/* app loader */}
      <AppLoader loader_color={colors.g19} loading={response?.isLoading} />
    </SafeAreaView>
  );
}

export default DeleteAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  feedbackTxt: {
    marginVertical: WP(10),
    marginHorizontal: WP(7),
    color: colors.g19,
    fontFamily: family.Roboto_Regular,
    fontSize: size.medium,
  },
  inputContainer: {
    marginHorizontal: WP(6),
    height: HP(30),
    borderWidth: 1,
    borderRadius: WP(5),
    borderColor: colors.P2,
    paddingHorizontal: WP(1),
    marginTop: HP(3),
  },
  inputStyle: {
    height: HP(28),
    width: WP(75),
    alignSelf: 'center',
    marginStart: HP(1),
    marginTop: HP(0.5),
  },
  passwordInputStyle: {
    height: HP(5),
    width: WP(75),
    alignSelf: 'center',
  },
  buttonStyle: { marginTop: WP(20) },
  headingStyle: {
    fontSize: size.h5,
    fontFamily: family.Roboto_Regular,
    marginHorizontal: WP(6),
    marginVertical: WP(10),
  },
});
