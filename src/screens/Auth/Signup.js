import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  appImages,
  WP,
  HP,
  SignupVS,
  signupFormFields,
  size,
  appIcons,
  colors,
} from '../../shared/exporter';
import {AppButton, AppInput} from '../../components';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const formikRef = useRef();
  const navigation = useNavigation();

  const handleSignup = values => {};

  return (
    <ScrollView style={styles.main}>
      <ImageBackground
        source={appImages.backgroundSignup}
        style={styles.imageStyle}>
        <Image source={appImages.splash} style={styles.logo} />
      </ImageBackground>
      <Formik
        innerRef={formikRef}
        initialValues={signupFormFields}
        onSubmit={values => {
          handleSignup(values);
        }}
        validationSchema={SignupVS}>
        {({values, errors, touched, handleSubmit, handleChange}) => (
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <AppInput
              title={'Name'}
              value={values.name}
              onChangeText={handleChange('name')}
              placeholder={'Enter Name'}
              errorMessage={errors.name}
              touched={touched.name}
            />
            <AppInput
              title={'Email'}
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder={'Enter email'}
              keyboardType="email-address"
              errorMessage={errors.email}
              touched={touched.email}
            />
            <AppInput
              title={'Password'}
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder={'Enter Password'}
              secureTextEntry
              errorMessage={errors.password}
              touched={touched.password}
            />
            <AppButton title={'Sign Up'} onPress={() => handleSubmit()} />
            <Text style={styles.descTxtStyle}>
              By continuing you accept our{' '}
              <Text onPress={() => navigation.navigate('TermsConditions')}>
                Privacy Policy
              </Text>
              and{' '}
              <Text onPress={() => navigation.navigate('PrivacyPolicy')}>
                Term of Use{' '}
              </Text>
            </Text>
            <View style={styles.orView}>
              <View style={styles.barView}></View>
              <Text style={styles.orTxt}>OR</Text>
              <View style={styles.barView}></View>
            </View>

            <Text style={styles.txtSigninWith}>Sign Up with</Text>

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
              <Text style={styles.txtAccount}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.txtAccount, {color: colors.P3}]}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageStyle: {
    width: WP(100),
    height: HP(25),
  },
  logo: {
    width: WP('42'),
    height: WP('14'),
    alignSelf: 'center',
    justifyContent: 'center',
    margin: WP(5),
    marginTop: WP(28),
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
    marginTop: WP(10),
  },
  otherSigninView: {
    width: WP(45),
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginVertical: WP(3),
    flexDirection: 'row',
    marginTop: WP(5),
  },
  iconStyle: {
    width: WP(10),
    height: WP(10),
  },
  txtAccount: {
    fontSize: size.xxsmall,
    color: colors.g20,
  },
  createAccountView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: WP(5),
  },
  orView: {
    marginHorizontal: WP(6),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: WP(8),
  },
  barView: {
    width: WP(35),
    height: 1,
    backgroundColor: colors.g19,
    marginHorizontal: WP(3),
  },
  orTxt: {
    color: colors.g19,
    fontSize: size.xxlarge,
  },
});
