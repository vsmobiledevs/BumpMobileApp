import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';
import Toast from 'react-native-simple-toast';

import { AppButton, AppInput, AuthHeader } from '../../../components';
import { Icons } from '../../../assets/icons';
import { HP, WP, colors, family } from '../../../shared/exporter';
import FileUpload from '../../../components/FileUpload';
import { useContactUsMutation } from '../../../redux/api/contact';
import { ContactUsVS, contactUsV } from '../../../shared/utilities/validations';
import { AppLoader } from '../../../components/AppLoader';

function ContactUs() {
  const formikRef = useRef();
  const navigation = useNavigation();
  const [getImg, setGetImg] = useState(null);
  const [contactUs, { isLoading, isSuccess }] = useContactUsMutation();

  const handleApiCall = async (v) => {
    const body = new FormData();
    body.append('username', v?.username);
    body.append('email', v?.email);
    body.append('body', v?.body);
    if (getImg) {
      body.append('contact_images[]', getImg);
    }
    await contactUs(body);
  };

  useEffect(() => {
    if (isSuccess) {
      setGetImg(null);
      Toast.showWithGravity('Request Successfully Submit', Toast.SHORT, Toast.BOTTOM);
      navigation.goBack();
    }
  }, [isSuccess, isLoading, navigation]);

  if (isLoading) {
    return <AppLoader loader_color={colors.g19} loading={isLoading} />;
  }

  return (
    <SafeAreaView style={styles.main}>
      <AuthHeader
        left={Icons.leftArrow}
        center="Contact US"
        onPressLeft={() => navigation.goBack()}
        rightText="a"
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
        <Formik
          innerRef={formikRef}
          initialValues={contactUsV}
          onSubmit={(values) => {
            handleApiCall(values);
          }}
          validationSchema={ContactUsVS}
        >
          {({ values, errors, touched, handleSubmit, handleChange }) => (
            <View style={styles.miniContainer}>
              <AppInput
                textInPutProps={{
                  style: { color: colors.b1 },
                  value: values.username,
                  placeholder: 'Username',
                  placeholderTextColor: colors.g25,
                  onChangeText: handleChange('username'),
                }}
                title="User Name"
                errorMessage={errors.username}
                touched={touched.username}
              />
              <AppInput
                textInPutProps={{
                  style: { color: colors.b1 },
                  value: values.email,
                  placeholder: 'example@gmail.com',
                  placeholderTextColor: colors.g25,
                  onChangeText: handleChange('email'),
                }}
                title="E-mail"
                errorMessage={errors.email}
                touched={touched.email}
              />

              <AppInput
                containerStyle={{ height: HP(30) }}
                textInPutProps={{
                  style: styles.inputStyle,
                  value: values.body,
                  placeholder: 'Message',
                  placeholderTextColor: colors.g25,
                  onChangeText: handleChange('body'),
                  multiline: true,
                  textAlignVertical: 'top',
                }}
                errorMessage={errors.body}
                touched={touched.body}
              />

              <FileUpload getData={setGetImg} />

              <AppButton
                title="Send"
                buttonContainer={{ marginTop: WP(10) }}
                touchableOpacity={{
                  onPress: () => handleSubmit(),
                }}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ContactUs;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },

  miniContainer: {
    // marginTop: HP(5),
  },

  headingStyle: {
    marginHorizontal: WP(6),
    color: colors.g19,
    fontFamily: family.Roboto_Medium,
    fontSize: WP(5),
    marginVertical: HP(5),
  },
  inputStyle: {
    height: HP(28),
    width: WP(75),
    alignSelf: 'center',
    marginStart: HP(1),
    marginTop: HP(0.5),
  },
});
