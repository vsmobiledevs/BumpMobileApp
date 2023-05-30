import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {HP, colors, WP, family} from '../../../shared/exporter';
import {AppButton, AppInput, AuthHeader} from '../../../components';
import {Icons} from '../../../assets/icons';
import {AppLoader} from '../../../components/AppLoader';

const EditProfileScreen = ({navigation}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isEditCheck = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsEdit(!isEdit);
      setIsLoading(false);
    }, 500);
  };

  if (isLoading) {
    return <AppLoader loader_color={colors.g19} loading={isLoading} />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar animated={true} barStyle="dark-content" />
        <View style={styles.headerSytle}>
          <AuthHeader
            left={Icons.backIcon}
            center={'Edit Priofile'}
            right={Icons.editPen}
            onPressRight={isEditCheck}
            onPressLeft={() => navigation.goBack()}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
            }}
            style={styles.imageStyle}
          />
          {isEdit && (
            <TouchableOpacity style={styles.cameraStyle}>
              {Icons.camera}
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.nameStyle}>Alexander Fred</Text>
        <AppInput
          textInPutProps={{
            style: {color: colors.b1},
            placeholder: 'John Smith',
            keyboardType: 'email-address',
            placeholderTextColor: colors.b4,
          }}
          leftIcon={Icons.account}
          title={'User Name'}
        />

        <AppInput
          textInPutProps={{
            style: {color: colors.b1},
            placeholder: 'Enter email',
            keyboardType: 'email-address',
            placeholderTextColor: colors.b4,
          }}
          leftIcon={Icons.email}
          title={'E-mail'}
        />
        {isEdit && <AppButton title="Update" buttonContainer={styles.btn} />}
      </View>
    );
  }
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerSytle: {
    marginTop: HP(4),
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
