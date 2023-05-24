import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {
  loginFormFields,
  appImages,
  appIcons,
  LoginVS,
  colors,
  family,
  size,
  WP,
  HP,
} from '../../shared/exporter';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {authIcons} from '../../assets/icons';
import Toast from 'react-native-simple-toast';
import {loginRequest} from '../../redux/actions';
import {AppButton, AppInput} from '../../components';
import {useNavigation} from '@react-navigation/native';

const socialIcons = [
  {id: 0, icon: appIcons.apple},
  {id: 1, icon: appIcons.google},
  {id: 2, icon: appIcons.amazon},
  {id: 3, icon: appIcons.facebook},
];

const Login = () => {
  const dispatch = useDispatch(null);
  const formikRef = useRef();
  const navigation = useNavigation();

  const onPressIcon = id => {
    switch (id) {
      case 0:
        console.log('Apple');
        break;
      case 1:
        console.log('Google');
        break;
      default:
      case 2:
        console.log('AWS');
        break;
      case 3:
        console.log('Facebook');
        break;
    }
  };

  // submit form for login user into app
  const handleLogin = async values => {
    let body = new FormData();
    body.append('email', values?.email);
    body.append('password', values?.password);
    dispatch(loginRequest(body, onLoginSuccess, onLoginFailure));
  };
  // login success response from server
  const onLoginSuccess = async success => {
    console.log('success response:--', success);
  };
  // login failure response from server
  const onLoginFailure = failure => {
    console.log('failure response:--', failure);
    Toast.showWithGravity(failure, Toast.SHORT, Toast.BOTTOM);
  };

  return (
    <ScrollView style={styles.main}>
      <Image source={appImages.bump} style={styles.imageStyle} />
      <Image source={appImages.splash} style={styles.logo} />
      <Formik
        innerRef={formikRef}
        initialValues={loginFormFields}
        onSubmit={(values, {resetForm}) => {
          handleLogin(values);
          // resetForm(loginFormFields);
        }}
        validationSchema={LoginVS}>
        {({values, errors, touched, handleSubmit, handleChange}) => (
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <AppInput
              textInPutProps={{
                style: {color: colors.b1},
                value: values.email,
                placeholder: 'Enter email',
                keyboardType: 'email-address',
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('email'),
              }}
              leftIcon={authIcons.email}
              errorMessage={errors.email}
              touched={touched.email}
            />
            <AppInput
              textInPutProps={{
                value: values.password,
                onChangeText: handleChange('password'),
                placeholder: 'Enter Password',
                placeholderTextColor: colors.b4,
                style: {color: colors.b1},
                secureTextEntry: true,
              }}
              leftIcon={authIcons.password}
              errorMessage={errors.password}
              touched={touched.password}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.forgotPasswordContainer}
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotTxt}>Forgot Password ?</Text>
            </TouchableOpacity>
            <AppButton
              title={'Sign in'}
              touchableOpacity={{
                onPress: () => handleSubmit(),
              }}
            />

            {/* privacy policy */}
            <Text style={styles.descTxtStyle}>
              {'By continuing you accept our '}
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.descTxtBoldStyle}>{'Privacy Policy '}</Text>
              </TouchableOpacity>
              {'and '}
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.descTxtBoldStyle}>{'Term of Use'}</Text>
              </TouchableOpacity>
            </Text>

            <Text style={styles.txtSignInWith}>{'Sign In with'}</Text>

            {/* social icons */}
            <View style={styles.otherSignInView}>
              {socialIcons?.map(item => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => onPressIcon(item?.id)}
                    key={item?.id}>
                    <Image source={item?.icon} style={styles.socialIcon} />
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={styles.createAccountView}>
              <Text style={styles.txtAccount}>
                {'Don’t have an account ? '}
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={[styles.txtAccount, {color: colors.P3}]}>
                  {'Create Account'}
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </ScrollView>
  );
};

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
