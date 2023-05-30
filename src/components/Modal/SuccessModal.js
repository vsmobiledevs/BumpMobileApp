import {HP, WP, appIcons, colors, family, size} from '../../shared/exporter';
import {StyleSheet, Text, View, Image} from 'react-native';
import {AppButton} from '../AppButton/AppButton';
import Modal from 'react-native-modal';
import React from 'react';
import {Icons} from '../../assets/icons';

const SuccessModal = ({show, onLoginBackPress, onTouchCancel, reset}) => {
  return (
    <Modal
      isVisible={show}
      onBackdropPress={onTouchCancel}
      animationIn="fadeIn"
      animationOut="fadeOut">
      <View style={styles.modalContainer}>
        <View style={styles.modalViewStyle}>
          {Icons.done}
          <Text
            style={[
              styles.successTxt,
              {color: reset ? colors.g19 : colors.blue},
            ]}>
            {'Password Changed!'}
          </Text>
          <Text
            style={[
              styles.successTxtDetail,
              {fontSize: reset ? size.medium : size.small},
            ]}>
            {'Your password has been changed successfully.'}
          </Text>
          <AppButton
            title={reset ? 'OK' : 'Back to Login'}
            buttonStyle={styles.buttonStyle}
            touchableOpacity={{
              onPress: () => onLoginBackPress(),
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  modalContainer: {
    padding: HP(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${colors.white}`,
    borderRadius: 10,
  },
  modalViewStyle: {
    width: WP(100),
  },
  iconStyle: {
    width: WP(25),
    height: WP(25),
    alignSelf: 'center',
  },
  successTxt: {
    fontSize: size.h3,

    marginTop: WP(5),
    alignSelf: 'center',
    fontFamily: family.Roboto_Bold,
  },
  successTxtDetail: {
    color: colors.g19,
    marginTop: WP(5),
    width: '80%',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: family.Roboto_Regular,
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: WP(15),
    width: WP(80),
  },
});
