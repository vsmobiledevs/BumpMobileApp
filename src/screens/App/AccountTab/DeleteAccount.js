import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import {
  AppButton,
  AppInput,
  AuthHeader,
  DeleteAccountModal,
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
import {Icons} from '../../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import {ConfirmModal} from '../../../components/';
import {Formik} from 'formik';

const DeleteAccount = () => {
  const navigation = useNavigation();
  const [reason, setReason] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const formikRef = useRef();

  const handleDelete = async values => {
    setDeleteModal(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader
        center={'Delete Account'}
        left={Icons.leftArrow}
        onPressLeft={() => navigation.goBack()}
      />
      {!confirm ? (
        <>
          <Text style={styles.feedbackTxt}>
            We’re sorry to see you go! Could you please let us know why you’d
            like to delete your account? {'\n'}Your feedback would be greatly
            appreciated and would help us improve our services in the future.
            Thank you!"
          </Text>
          <AppInput
            textInPutProps={{
              value: reason,
              style: styles.inputStyle,
              placeholder: 'Write Here..',
              placeholderTextColor: colors.g25,
              onChangeText: txt => setReason(txt),
              multiline: true,
              textAlignVertical: 'top',
            }}
            containerStyle={styles.inputContainer}
          />
          <AppButton
            title={'Continue...'}
            buttonContainer={styles.buttonStyle}
            touchableOpacity={{
              onPress: () => {
                setConfirmModal(true);
              },
            }}
          />
        </>
      ) : (
        <>
          <Text style={styles.headingStyle}>Please Enter your Password.</Text>
          <Formik
            innerRef={formikRef}
            initialValues={deleteAccountFields}
            onSubmit={(values, {resetForm}) => {
              handleDelete(values);
            }}
            validationSchema={DeleteAccountVS}>
            {({values, errors, touched, handleSubmit, handleChange}) => (
              <>
                <AppInput
                  textInPutProps={{
                    style: [styles.inputStyle, {height: WP(5)}],
                    value: values.password,
                    onChangeText: handleChange('password'),
                    placeholder: 'Enter password',
                  }}
                  errorMessage={errors.password}
                  touched={touched.password}
                />
                <AppButton
                  title={'Delete Account'}
                  buttonContainer={{marginTop: WP(15)}}
                  clr1={colors.s10}
                  clr2={colors.s10}
                  touchableOpacity={{
                    onPress: () => handleSubmit(),
                  }}
                />
              </>
            )}
          </Formik>
        </>
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
          navigation.replace('auth');
          setDeleteModal(false);
        }}
      />
    </SafeAreaView>
  );
};

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
    fontSize: size.large,
  },
  inputContainer: {
    marginHorizontal: WP(6),
    marginTop: WP(5),
    height: HP(30),
    borderWidth: 1,
    borderRadius: WP(5),
    borderColor: colors.P2,
  },
  inputStyle: {
    height: HP(28),
    width: WP(75),
    alignSelf: 'center',
  },
  buttonStyle: {marginTop: WP(20)},
  headingStyle: {
    fontSize: size.h5,
    fontFamily: family.Roboto_Regular,
    marginHorizontal: WP(6),
    marginVertical: WP(10),
  },
});
