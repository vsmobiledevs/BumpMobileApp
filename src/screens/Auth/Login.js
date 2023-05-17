import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {
  appImages,
  WP,
  HP,
  loginFormFields,
  LoginVS,
  size,
  colors,
  appIcons,
  family,
} from '../../shared/exporter';
import {useNavigation} from '@react-navigation/native';
import {AppButton, AppInput} from '../../components';
import {Formik} from 'formik';
import {icons} from '../../assets/icons';
import Email from '../../assets/icons/email.svg';

const Login = () => {
  const formikRef = useRef();
  const navigation = useNavigation();

  console.log(<Email />);
  const handleLogin = values => {};
  return (
    <ScrollView style={styles.main}>
      <Image source={appImages.bump} style={styles.imageStyle} />
      <Image source={appImages.splash} style={styles.logo} />
      <Formik
        innerRef={formikRef}
        initialValues={loginFormFields}
        onSubmit={values => {
          handleLogin(values);
        }}
        validationSchema={LoginVS}>
        {({values, errors, touched, handleSubmit, handleChange}) => (
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <AppInput
              textInPutProps={{
                value: values.email,
                onChangeText: handleChange('email'),
                placeholder: 'Enter email',
                keyboardType: 'email-address',
                placeholderTextColor: colors.b4,
                style: {color: colors.b1},
              }}
              // leftIcon={<Email />}
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
              // leftIcon={icons.pass}
              errorMessage={errors.password}
              touched={touched.password}
            />
            <TouchableOpacity
              style={styles.forgotPasswordContainer}
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotTxt}>Forgot Password ?</Text>
            </TouchableOpacity>
            <AppButton
              title={'Sign in'}
              touchableOpacity={{
                onPress: () => navigation.navigate('BottomTabScreen'),
                disabled: false,
              }}
            />
            <Text style={styles.descTxtStyle}>
              By continuing you accept our{' '}
              <Text
                style={styles.descTxtBoldStyle}
                // onPress={() => navigation.navigate('TermsConditions')}
              >
                Privacy Policy
              </Text>{' '}
              and{' '}
              <Text
                style={styles.descTxtBoldStyle}
                // onPress={() => navigation.navigate('PrivacyPolicy')}
              >
                Term of Use{' '}
              </Text>
            </Text>

            <Text style={styles.txtSigninWith}>Sign In with</Text>
            <View style={styles.otherSigninView}>
              <TouchableOpacity>
                {/* <Image
                  source={icons.apple}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
                 */}
                {/* {icons.apple} */}
              </TouchableOpacity>
              <TouchableOpacity>
                {/* <Image
                  source={icons.google}
                  style={styles.iconStyle}
                  resizeMode="contain"
                /> */}
                {/* {icons.google} */}
              </TouchableOpacity>
              <TouchableOpacity>
                {/* <Image
                  source={icons.amazon}
                  style={styles.iconStyle}
                  resizeMode="contain"
                {/* /> */}
                {/* {icons.amazon}  */}
              </TouchableOpacity>
              <TouchableOpacity>
                {/* <Image
                  source={icons.facebook}
                  style={styles.iconStyle}
                  resizeMode="contain"
                /> */}
                {/* {icons.facebook} */}
              </TouchableOpacity>
            </View>
            <View style={styles.createAccountView}>
              <Text style={styles.txtAccount}>Don’t have an account ? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={[styles.txtAccount, {color: colors.P3}]}>
                  Create Account
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
    width: WP('42'),
    height: WP('14'),
    alignSelf: 'center',
    justifyContent: 'center',
    margin: WP(5),
  },
  descTxtStyle: {
    alignItems: 'center',
    fontSize: size.xxtiny,
    marginHorizontal: WP(10),
    alignSelf: 'center',
    fontFamily: family.Roboto_Light,
    color: colors.g23,
  },
  descTxtBoldStyle: {
    fontFamily: family.Roboto_Regular,
    color: colors.g19,
    textDecorationLine: 'underline',
  },

  txtSigninWith: {
    fontSize: size.normal,
    alignSelf: 'center',
    marginTop: WP(15),
    color: colors.g19,
    fontFamily: family.Roboto_Light,
  },
  otherSigninView: {
    width: WP(45),
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
});
