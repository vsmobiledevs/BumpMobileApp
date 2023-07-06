/* eslint-disable default-case */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import { Formik } from 'formik';
import { Auth, Hub } from 'aws-amplify';
import {
  HP,
  WP,
  size,
  family,
  colors,
  LoginVS,
  onGoogle,
  appImages,
  loginFormFields,
} from '../../shared/exporter';
import { Icons } from '../../assets/icons';
import { AppButton, AppInput } from '../../components';
import { AppLoader } from '../../components/AppLoader';
import { SocialIcons } from '../../shared/utilities/staticInfo';
import { useLoginUserMutation, useSocialLoginMutation } from '../../redux/api/auth';

function Login() {
  const formikRef = useRef();
  const navigation = useNavigation();
  const [socialLogin, response] = useSocialLoginMutation();
  const [loginUser, res] = useLoginUserMutation();
  const [checked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [user, setUser] = useState(null);
  const [customState, setCustomState] = useState(null);

  // handling response
  useEffect(() => {
    if (res?.isSuccess) {
      Toast.showWithGravity('User successfully logged in', Toast.SHORT, Toast.BOTTOM);
    }
    if (res?.isError) {
      Toast.showWithGravity(res?.error?.data?.message, Toast.SHORT, Toast.BOTTOM);
    }
  }, [res.isLoading || response.isLoading]);

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          setUser(data);
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'customOAuthState':
          setCustomState(data);
      }
    });

    Auth.currentAuthenticatedUser()
      .then((currentUser) => {
        console.log('current user--', currentUser);
      })
      .catch(() => console.log('Not signed in'));

    return unsubscribe;
  }, []);

  // login user
  const handleLogin = async (values) => {
    if (checked) {
      const body = new FormData();
      body.append('email', values.email);
      body.append('password', values.password);
      await loginUser(body);
    } else {
      Toast.showWithGravity(
        'Please accept privacy policy and terms & conditions',
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
  };

  // handle social login
  const handleSocialLogin = async (provider) => {
    const token = await onGoogle();
    const body = new FormData();
    body.append('provider', provider);
    body.append('token', token);
    await socialLogin(body);
  };

  // social login buttons
  const onPressIcon = (item) => {
    switch (item?.id) {
      case 0:
        break;
      case 1:
        handleSocialLogin(item.name);
        break;
      case 2:
        Auth.federatedSignIn({
          provider: 'LoginWithAmazon',
        });
        break;
      case 3:
        break;
      default:
    }
  };

  const onPressChecked = () => {
    setIsChecked(!checked);
  };

  const onPressEye = () => {
    setShowPassword(!showPassword);
  };

  const socialIcons = Platform.OS === 'android' ? SocialIcons.slice(1, 4) : SocialIcons;

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
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
          <>
            <AppInput
              textInPutProps={{
                style: { color: colors.b1 },
                value: values.email,
                placeholder: 'Enter email',
                keyboardType: 'email-address',
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('email'),
                onblur: handleBlur('email'),
                autoCapitalize: 'none',
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
                secureTextEntry: showPassword,
                enablesReturnKeyAutomatically: true,
              }}
              leftIcon={Icons.password}
              rightIcon={Icons.eye}
              onPressEye={onPressEye}
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
            <View style={styles.privacyPolicyContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPressChecked}
                style={styles.checkBox}
              >
                {checked ? Icons.checked : Icons.greyUnChecked}
              </TouchableOpacity>
              <View style={styles.footerLine}>
                <Text style={styles.descTxtStyle}>{'By continuing you accept our '}</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Terms', { screenId: 7 })}
                  style={{ height: HP(3) }}
                  activeOpacity={0.8}
                >
                  <Text style={styles.descTxtBoldStyle}>{'Privacy Policy '}</Text>
                </TouchableOpacity>
                <Text style={styles.descTxtStyle}>{' and '}</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Terms', { screenId: 6 })}
                  style={{ height: HP(3) }}
                  activeOpacity={0.8}
                >
                  <Text style={styles.descTxtBoldStyle}>Term of Use</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.txtSignInWith}>Sign In with</Text>

            {/* social icons */}
            <View style={styles.otherSignInView}>
              {socialIcons?.map((item) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => onPressIcon(item)}
                  key={item?.id}
                >
                  <Image source={item.icon} style={styles.socialIcon} />
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
  footerLine: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginStart: HP(0.5),
    top: Platform.OS == 'android' ? HP(0.4) : HP(0.7),
  },
  descTxtStyle: {
    fontFamily: family.Roboto_Light,
    fontSize: size.xtiny,
    color: colors.g23,
    textAlign: 'center',
    justifyContent: 'center',
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
    resizeMode: 'contain',
  },
  checkBox: {
    width: HP(2.5),
    height: HP(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: HP(0.5),
  },
  privacyPolicyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
