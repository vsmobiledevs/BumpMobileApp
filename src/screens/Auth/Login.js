import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
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
import {Formik} from 'formik';
import {Icons} from '../../assets/icons';
import {AppButton, AppInput} from '../../components';
import {AppLoader} from '../../components/AppLoader';
import {useNavigation} from '@react-navigation/native';
import {useLoginUserMutation} from '../../redux/api/auth';
import {socialIcons} from '../../shared/utilities/dummyData';
import {login} from '../../redux/features/authSlice';
import {useDispatch} from 'react-redux';

const Login = () => {
  const dispatch = useDispatch(null);
  const [loginUser] = useLoginUserMutation();
  const formikRef = useRef();
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);

  // login user
  const handleLogin = async (values, resetForm) => {
    setIsLoading(true);
    try {
      var body = new FormData();
      body.append('email', values.email);
      body.append('password', values.password);
      const response = await loginUser(body);
      if (response?.data) {
        resetForm();
        setIsLoading(false);
        alert(response?.data?.message);
        dispatch(login(response?.data));
        navigation.navigate('BottomTabs');
      } else {
        setIsLoading(false);
        console.log('inside else case--', response?.error);
        alert(response?.error?.data?.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.log('login api error--', error);
    }
  };

  // social login buttons
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

  return (
    <ScrollView style={styles.main}>
      <Image source={appImages.bump} style={styles.imageStyle} />
      <Image source={appImages.splash} style={styles.logo} />
      <Formik
        innerRef={formikRef}
        initialValues={loginFormFields}
        onSubmit={(values, {resetForm}) => {
          handleLogin(values, resetForm);
        }}
        validationSchema={LoginVS}>
        {({values, errors, touched, handleSubmit, handleChange}) => (
          <>
            <AppInput
              textInPutProps={{
                style: {color: colors.b1},
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
                style: {color: colors.b1},
                secureTextEntry: true,
              }}
              leftIcon={Icons.password}
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
              title="Sign in"
              touchableOpacity={{
                onPress: () => handleSubmit(),
              }}
            />

            {/* privacy policy */}
            <Text style={styles.descTxtStyle}>
              {'By continuing you accept our '}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('privacyTerms', {
                    screen: 'privacy',
                  })
                }
                activeOpacity={0.8}>
                <Text style={styles.descTxtBoldStyle}>{'Privacy Policy '}</Text>
              </TouchableOpacity>
              {'and '}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('privacyTerms', {
                    screen: 'terms',
                  })
                }
                activeOpacity={0.8}>
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
                    {item?.icon}
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
          </>
        )}
      </Formik>
      <AppLoader loader_color={colors.g19} loading={isLoading} />
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
