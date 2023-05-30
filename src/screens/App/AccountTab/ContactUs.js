import {AppButton, AppInput, AuthHeader} from '../../../components';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useRef, useState} from 'react';
import {Formik} from 'formik';
import {Icons} from '../../../assets/icons';
import {
  HP,
  ResetPassVS,
  WP,
  colors,
  family,
  resetPassFormFields,
} from '../../../shared/exporter';
import SuccessModal from '../../../components/Modal/SuccessModal';

const ContactUs = () => {
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
        center={'Contact US'}
        onPressLeft={() => navigation.goBack()}
        rightText={'a'}
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
                value: values.username,
                placeholder: 'Username',
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('username'),
              }}
              title={'User Name'}
              errorMessage={errors.username}
              touched={touched.username}
            />
            <AppInput
              textInPutProps={{
                style: {color: colors.b1},
                value: values.email,
                placeholder: 'example@gmail.com',
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('email'),
              }}
              title={'E-mail'}
              errorMessage={errors.email}
              touched={touched.email}
            />

            <AppButton
              title={'Send'}
              buttonContainer={{marginTop: WP(10)}}
              touchableOpacity={{
                onPress: () => handleSubmit(),
              }}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },

  miniContainer: {
    marginTop: HP(5),
  },

  headingStyle: {
    marginHorizontal: WP(6),
    color: colors.g19,
    fontFamily: family.Roboto_Medium,
    fontSize: WP(5),
    marginVertical: HP(5),
  },
});
