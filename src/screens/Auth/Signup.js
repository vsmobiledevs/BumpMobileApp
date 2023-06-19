/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import Toast from 'react-native-simple-toast';
import {
  signupFormFields,
  appImages,
  SignupVS,
  colors,
  family,
  size,
  WP,
  HP,
} from '../../shared/exporter';
import { SocialIcons } from '../../shared/utilities/staticInfo';
import { useCreateUserMutation } from '../../redux/api/auth';
import { AppButton, AppInput } from '../../components';
import { AppLoader } from '../../components/AppLoader';

function Signup() {
  // mutation
  const [createUser, response] = useCreateUserMutation();

  // references
  const formikRef = useRef();
  const navigation = useNavigation();

  // handling response
  useEffect(() => {
    if (response?.isSuccess) {
      Toast.showWithGravity('User successfully registered!', Toast.SHORT, Toast.BOTTOM);
      navigation.navigate('Login');
    }
    if (response?.isError) {
      Toast.showWithGravity(response?.error?.data?.message, Toast.SHORT, Toast.BOTTOM);
    }
  }, [response.isLoading]);

  // calling register mutation
  const handleSignup = async (values) => {
    const body = new FormData();
    body.append('username', values.name);
    body.append('email', values.email);
    body.append('password', values.password);
    body.append('password_confirmation', values.password);
    await createUser(body);
  };

  // social login icons
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
      <ImageBackground source={appImages.backgroundSignup} style={styles.imageStyle}>
        <Image source={appImages.splash} style={styles.logo} />
      </ImageBackground>
      <Formik
        innerRef={formikRef}
        initialValues={signupFormFields}
        onSubmit={(values) => {
          handleSignup(values);
        }}
        validationSchema={SignupVS}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <AppInput
              textInPutProps={{
                style: { color: colors.b1 },
                value: values.name,
                placeholder: 'Enter Name',
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('name'),
              }}
              errorMessage={errors.name}
              touched={touched.name}
            />
            <AppInput
              textInPutProps={{
                style: { color: colors.b1 },
                value: values.email,
                placeholder: 'Enter email',
                keyboardType: 'email-address',
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('email'),
              }}
              errorMessage={errors.email}
              touched={touched.email}
            />
            <AppInput
              textInPutProps={{
                style: { color: colors.b1 },
                value: values.password,
                placeholder: 'Enter Password',
                keyboardType: 'email-address',
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('password'),
                secureTextEntry: true,
              }}
              errorMessage={errors.password}
              touched={touched.password}
            />
            <AppButton
              title="Sign Up"
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

            <View style={styles.orView}>
              <View style={styles.barView} />
              <Text style={styles.orTxt}>OR</Text>
              <View style={styles.barView} />
            </View>

            <Text style={styles.txtSigninWith}>Sign Up with</Text>

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
              <Text style={styles.txtAccount}>Already have an account? </Text>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.txtAccount, { color: colors.P3 }]}>Login</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
      <AppLoader loader_color={colors.g19} loading={response?.isLoading} />
    </ScrollView>
  );
}

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
  txtSigninWith: {
    fontSize: size.normal,
    alignSelf: 'center',
    marginVertical: WP(5),
    color: colors.g19,
    fontFamily: family.Roboto_Light,
  },
  iconStyle: {
    width: WP(10),
    height: WP(10),
  },
  txtAccount: {
    fontSize: size.xxsmall,
    fontFamily: family.Roboto_Regular,
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
    fontFamily: family.Roboto_Medium,
  },
  otherSignInView: {
    width: WP(45),
    marginTop: HP(2),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialIcon: {
    width: WP(8),
    height: WP(8),
    alignSelf: 'center',
  },
});
