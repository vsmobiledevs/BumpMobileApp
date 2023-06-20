import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Formik} from 'formik';
import React, {useState, useRef} from 'react';
import {
  HP,
  colors,
  WP,
  family,
  signupFormFields,
  SignupVS,
} from '../../../shared/exporter';
import {AppButton, AppInput, AuthHeader} from '../../../components';
import {Icons} from '../../../assets/icons';
import {AppLoader} from '../../../components/AppLoader';
import {useUpdateUserMutation} from '../../../redux/api/auth';
import {handleSelectImage} from '../../../components/Modal/ImagePicker';
import {
  UpdateUserVS,
  updateUserFormFields,
} from '../../../shared/utilities/validations';

const EditProfileScreen = ({navigation}) => {
  const [updateUser, res] = useUpdateUserMutation();

  const formikRef = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const [isImg, setIsImg] = useState(null);

  //Select gallery Image
  const SelectImage = async () => {
    const options = {
      mediaType: 'photo',
      allowsEditing: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    let res = await handleSelectImage(options);
    setIsImg(res?.assets[0]);
  };

  console.log(res);
  //Update user API
  const UserUpdate = async values => {
    var body = new FormData();
    body.append('email', values.email);
    body.append('username', values.password);
    body.append('avatar', isImg);
    updateUser(body);
  };

  // if (res?.isLoading) {
  //   return <AppLoader loader_color={colors.g19} loading={isLoading} />;
  // } else {
  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader
        left={Icons.leftArrow}
        center={'Edit Priofile'}
        right={Icons.editPen}
        onPressRight={() => setIsEdit(!isEdit)}
        onPressLeft={() => navigation.goBack()}
      />

      <View style={styles.imageContainer}>
        <Image
          source={
            isImg?.uri
              ? {
                  uri: isImg?.uri,
                }
              : require('../../../assets/images/dummyImage.jpeg')
          }
          style={styles.imageStyle}
        />
        {isEdit && (
          <TouchableOpacity style={styles.cameraStyle} onPress={SelectImage}>
            {Icons.camera}
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.nameStyle}>Alexander Fred</Text>

      <Formik
        innerRef={formikRef}
        initialValues={updateUserFormFields}
        onSubmit={values => {
          UserUpdate(values);
        }}
        validationSchema={UpdateUserVS}>
        {({values, errors, touched, handleSubmit, handleChange}) => (
          <>
            <AppInput
              textInPutProps={{
                style: {color: colors.b1},
                placeholder: 'John Smith',
                keyboardType: 'email-address',
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('name'),
              }}
              leftIcon={Icons.account}
              title={'User Name'}
              errorMessage={errors.name}
              touched={touched.name}
            />

            <AppInput
              textInPutProps={{
                style: {color: colors.b1},
                placeholder: 'Enter email',
                keyboardType: 'email-address',
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('email'),
              }}
              leftIcon={Icons.email}
              title={'E-mail'}
              errorMessage={errors.email}
              touched={touched.email}
            />
            {isEdit && (
              <AppButton
                title="Update"
                buttonContainer={styles.btn}
                touchableOpacity={{
                  onPress: handleSubmit,
                }}
              />
            )}
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
  // }
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  imageContainer: {
    width: WP(40),
    height: WP(40),
    borderRadius: WP(40),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageStyle: {
    width: WP(30),
    height: WP(30),
    borderRadius: WP(30),
    alignSelf: 'center',
  },
  cameraStyle: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  nameStyle: {
    fontFamily: family.Roboto_Bold,
    fontSize: WP(6),
    lineHeight: HP(4),
    color: colors.g19,
    alignSelf: 'center',
    marginBottom: HP(5),
  },
  btn: {
    marginTop: HP(5),
  },
});
