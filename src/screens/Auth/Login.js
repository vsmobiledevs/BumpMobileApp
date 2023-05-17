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

const Login = () => {
  const formikRef = useRef();
  const navigation = useNavigation();

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
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder={'Enter email'}
              keyboardType="email-address"
              leftIcon={appIcons.email}
              errorMessage={errors.email}
              touched={touched.email}
            />
            <AppInput
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder={'Enter Password'}
              leftIcon={appIcons.password}
              errorMessage={errors.password}
              touched={touched.password}
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.forgotPasswordContainer}
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={{fontFamily: family.Roboto_Bold}}>
                Forgot Password ?
              </Text>
            </TouchableOpacity>
            <AppButton
              title={'Sign in'}
              touchableOpacity={{
                onPress: () => handleSubmit(),
                disabled: false,
                style: {backgroundColor: 'red'},
              }}
            />
            <Text style={styles.descTxtStyle}>
              By continuing you accept our{' '}
              <Text
              // onPress={() => navigation.navigate('TermsConditions')}
              >
                Privacy Policy
              </Text>
              and{' '}
              <Text
              // onPress={() => navigation.navigate('PrivacyPolicy')}
              >
                Term of Use{' '}
              </Text>
            </Text>

            <Text style={styles.txtSigninWith}>Sign In with</Text>
            <View style={styles.otherSigninView}>
              <TouchableOpacity>
                <Image
                  source={appIcons.apple}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={appIcons.google}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={appIcons.amazon}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={appIcons.facebook}
                  style={styles.iconStyle}
                  resizeMode="contain"
                />
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
  },

  txtSigninWith: {
    fontSize: size.normal,
    fontWeight: '300',
    alignSelf: 'center',
    marginTop: WP(15),
  },
  otherSigninView: {
    width: WP(45),
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginVertical: WP(3),
    flexDirection: 'row',
  },
  iconStyle: {
    width: WP(10),
    height: WP(10),
  },
  txtAccount: {
    fontSize: size.xxsmall,
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
});
