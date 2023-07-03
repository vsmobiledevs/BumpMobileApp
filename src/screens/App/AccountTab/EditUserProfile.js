/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import React, { useEffect, useRef, useState } from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { Formik } from 'formik';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { HP, colors, WP, family, DummyImage, Options } from '../../../shared/exporter';
import { Icons } from '../../../assets/icons';
import { useAppSelector } from '../../../redux/store';
import { AppLoader } from '../../../components/AppLoader';
import { useUpdateUserMutation } from '../../../redux/api/auth';
import { AppButton, AppInput, AuthHeader } from '../../../components';
import { ImagePickerModal } from '../../../components/Modal/ImagePickerModal';
import { UpdateProfileVS } from '../../../shared/utilities/validations';

function EditUserProfile({ navigation }) {
  const formikRef = useRef(null);
  const [updateUser, response] = useUpdateUserMutation();
  const { user } = useAppSelector((state) => state?.authSlice);
  const [userName] = useState(user?.name || '');
  const [email] = useState(user?.email || '');
  const [image, setImage] = useState(user?.profile_image || null);
  const [isEdit, setIsEdit] = useState(false);
  const [show, setShow] = useState(false);

  // handle response
  useEffect(() => {
    if (response?.isSuccess) {
      Toast.showWithGravity('Profile updated successfully', Toast.SHORT, Toast.BOTTOM);
      navigation.goBack();
    }
    if (response?.isError) {
      Toast.showWithGravity(response?.error?.data?.message, Toast.SHORT, Toast.BOTTOM);
    }
  }, [response.isLoading]);

  // update user
  const handleUpdate = async (values) => {
    const image_data = {
      uri: image?.uri,
      type: image?.type,
      name: image?.fileName,
    };
    const body = new FormData();
    body.append('email', values.email);
    body.append('username', values.name);
    if (image_data?.uri) {
      body.append('avatar', image_data);
    }
    await updateUser(body);
  };

  // handle edit button
  const isEditCheck = () => {
    setIsEdit(!isEdit);
  };

  // Handlers
  const showGallery = () => {
    setShow(false);
    setTimeout(() => {
      try {
        launchImageLibrary(Options, (response) => {
          if (response.didCancel) {
            /* empty */
          } else if (response.error) {
            /* empty */
          } else if (response.customButton) {
            /* empty */
          } else {
            setImage(response?.assets[0]);
          }
        });
      } catch (error) {
        /* empty */
      }
    }, 400);
  };

  // Open Camera
  const showCamera = () => {
    setShow(false);
    setTimeout(() => {
      try {
        launchCamera(Options, (response) => {
          // Use launchImageLibrary to open image gallery
          if (response.didCancel) {
            /* empty */
          } else if (response.error) {
            /* empty */
          } else if (response.customButton) {
            /* empty */
          } else if (response.assets) {
            setImage(response?.assets[0]);
          } else {
            /* empty */
          }
        });
      } catch (error) {
        /* empty */
      }
    }, 400);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader
        left={Icons.leftArrow}
        center="Edit Profile"
        right={isEdit ? Icons.editPenFill : Icons.editPen}
        onPressRight={isEditCheck}
        onPressLeft={() => navigation.goBack()}
      />

      <Formik
        innerRef={formikRef}
        initialValues={{
          name: userName,
          email,
        }}
        onSubmit={(values, { resetForm }) => {
          handleUpdate(values, resetForm);
        }}
        validationSchema={UpdateProfileVS}
      >
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
          <ScrollView>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: image != null ? image?.uri || image : DummyImage }}
                style={styles.imageStyle}
              />
              {isEdit && (
                <TouchableOpacity
                  onPress={() => setShow(true)}
                  activeOpacity={0.8}
                  style={styles.cameraStyle}
                >
                  {Icons.camera}
                </TouchableOpacity>
              )}
            </View>
            <Text style={styles.nameStyle}>{user?.name || ''}</Text>
            <AppInput
              containerStyle={{ borderColor: isEdit ? colors.P3 : colors.g24 }}
              textInPutProps={{
                value: values.name,
                editable: isEdit,
                placeholderTextColor: colors.b4,
                onChangeText: handleChange('name'),
                style: { color: isEdit ? colors.b1 : colors.g26 },
              }}
              title="User Name"
              leftIcon={Icons.account}
              errorMessage={errors.name}
              touched={touched.name}
            />

            <AppInput
              containerStyle={{ borderColor: isEdit ? colors.P3 : colors.g24 }}
              textInPutProps={{
                value: values.email,
                editable: isEdit,
                keyboardType: 'email-address',
                onChangeText: handleChange('email'),
                onblur: handleBlur('email'),
                placeholderTextColor: colors.b4,
                style: { color: isEdit ? colors.b1 : colors.g26, marginStart: HP(2) },
              }}
              title="E-mail"
              leftIcon={Icons.email}
              errorMessage={errors.email}
              touched={touched.email}
            />
            {isEdit && (
              <AppButton
                title="Update"
                buttonContainer={styles.btn}
                touchableOpacity={{
                  onPress: () => handleSubmit(),
                }}
              />
            )}
          </ScrollView>
        )}
      </Formik>

      {/* app loader */}
      <AppLoader loader_color={colors.g19} loading={response?.isLoading} />

      {/* image picker modal */}
      <ImagePickerModal
        show={show}
        onPressHide={() => setShow(false)}
        onPressGallery={() => {
          showGallery();
        }}
        onPressCamera={() => {
          showCamera();
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageContainer: {
    width: WP(40),
    height: WP(40),
    marginTop: HP(3),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: WP(40),
    justifyContent: 'center',
  },
  imageStyle: {
    width: WP(30),
    height: WP(30),
    alignSelf: 'center',
    borderRadius: WP(30),
  },
  cameraStyle: {
    right: HP(2),
    bottom: HP(3.5),
    position: 'absolute',
  },
  nameStyle: {
    fontSize: WP(6),
    lineHeight: HP(4),
    color: colors.g19,
    alignSelf: 'center',
    marginBottom: HP(5),
    fontFamily: family.Roboto_Bold,
  },
  btn: {
    marginTop: HP(5),
  },
});

export default EditUserProfile;
