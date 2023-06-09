/* eslint-disable react-hooks/exhaustive-deps */
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Formik } from 'formik';
import Toast from 'react-native-simple-toast';
import { useNavigation } from '@react-navigation/native';
import {
  HP,
  WP,
  size,
  family,
  colors,
  LoginVS,
  appImages,
  loginFormFields,
} from '../../shared/exporter';
import { Icons } from '../../assets/icons';
import { AppButton, AppInput } from '../../components';
import { AppLoader } from '../../components/AppLoader';
import { useLoginUserMutation } from '../../redux/api/auth';
import { SocialIcons } from '../../shared/utilities/staticInfo';

function Login() {
  const formikRef = useRef();
  const navigation = useNavigation();
  const [loginUser, res] = useLoginUserMutation();

  // handling response
  useEffect(() => {
    if (res?.isSuccess) {
      Toast.showWithGravity('User successfully logged in', Toast.SHORT, Toast.BOTTOM);
    }
    if (res?.isError) {
      Toast.showWithGravity(res?.error?.data?.message, Toast.SHORT, Toast.BOTTOM);
    }
  }, [res.isLoading]);

  // login user
  const handleLogin = async (values) => {
    const body = new FormData();
    body.append('email', values.email);
    body.append('password', values.password);
    await loginUser(body);
  };

  // social login buttons
  const onPressIcon = (id) => {
    switch (id) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      default:
    }
  };

  return (
    <ScrollView style={styles.main}>
      <Image source={appImages.bump} style={styles.imageStyle} />
      <Image source={appImages.splash} style={styles.logo} resizeMode="contain" />
      <Formik
        innerRef={formikRef}
        initialValues={loginFormFields}
        onSubmit={(values, { resetForm }) => {
          handleLogin(values, resetForm);
        }}
        validationSchema={LoginVS}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <>
            <AppInput
              textInPutProps={{
                style: { color: colors.b1 },
                value: values.email,
                placeholder: 'Enter email',
                keyboardType: 'email-address',
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('email'),
              }}
              leftIcon={Icons.email}
              errorMessage={errors.email}
              touched={touched.email}
            />
            <AppInput
              textInPutProps={{
                value: values.password,
                onChangeText: handleChange('password'),
                placeholder: 'Enter Password',
                placeholderTextColor: colors.b4,
                style: { color: colors.b1 },
                secureTextEntry: true,
              }}
              leftIcon={Icons.password}
              errorMessage={errors.password}
              touched={touched.password}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.forgotPasswordContainer}
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              <Text style={styles.forgotTxt}>Forgot Password ?</Text>
            </TouchableOpacity>
            <AppButton
              title="Sign in"
              touchableOpacity={{
                onPress: () => handleSubmit(),
              }}
            />

            {/* privacy policy */}
            <Text style={styles.descTxtStyle}>
              {'By continuing you accept our '}
              <TouchableOpacity
                onPress={() => navigation.navigate('Terms', { screenId: 7 })}
                activeOpacity={0.8}
              >
                <Text style={styles.descTxtBoldStyle}>{'Privacy Policy '}</Text>
              </TouchableOpacity>
              {'and '}
              <TouchableOpacity
                onPress={() => navigation.navigate('Terms', { screenId: 6 })}
                activeOpacity={0.8}
              >
                <Text style={styles.descTxtBoldStyle}>Term of Use</Text>
              </TouchableOpacity>
            </Text>

            <Text style={styles.txtSignInWith}>Sign In with</Text>

            {/* social icons */}
            <View style={styles.otherSignInView}>
              {SocialIcons?.map((item) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => onPressIcon(item?.id)}
                  key={item?.id}
                >
                  {item?.icon}
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.createAccountView}>
              <Text style={styles.txtAccount}>{'Don’t have an account ? '}</Text>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Signup')}>
                <Text style={[styles.txtAccount, { color: colors.P3 }]}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>

      {/* app loader */}
      <AppLoader loader_color={colors.g19} loading={res?.isLoading} />
    </ScrollView>
  );
}

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageStyle: {
    width: WP(100),
    height: HP(30),
  },
  logo: {
    width: WP(42),
    height: WP(14),
    margin: WP(5),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  descTxtStyle: {
    fontFamily: family.Roboto_Light,
    fontSize: size.xtiny,
    color: colors.g23,
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: HP(2),
    width: WP(75),
  },
  descTxtBoldStyle: {
    color: colors.g19,
    fontSize: size.xtiny,
    fontFamily: family.Roboto_Regular,
    textDecorationLine: 'underline',
  },

  txtSignInWith: {
    fontSize: size.normal,
    alignSelf: 'center',
    marginTop: WP(15),
    color: colors.g19,
    fontFamily: family.Roboto_Light,
  },
  otherSignInView: {
    width: WP(45),
    marginTop: HP(2),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconStyle: {
    width: WP(10),
    height: WP(10),
  },
  txtAccount: {
    fontSize: size.xxsmall,
    fontFamily: family.Roboto_Regular,
    color: colors.g19,
  },
  createAccountView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: WP(5),
  },
  forgotPasswordContainer: {
    marginHorizontal: WP(10),
    alignSelf: 'flex-end',
  },
  forgotTxt: {
    fontFamily: family.Roboto_Regular,
    color: colors.g19,
  },
  socialIcon: {
    width: WP(8),
    height: WP(8),
    alignSelf: 'center',
  },
});
