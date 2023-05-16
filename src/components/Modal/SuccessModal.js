import {StyleSheet, Text, View, Modal, Image} from 'react-native';
import React from 'react';
import {WP, appIcons, colors, size} from '../../shared/exporter';
import {AppButton} from '../AppButton/AppButton';

const SuccessModal = ({show, onLoginBackPress, onTouchCancel}) => {
  return (
    <Modal isVisible={show} onTouchCancel={onTouchCancel}>
      <View style={styles.modalContainer}>
        <View style={styles.modalViewStyle}>
          <Image source={appIcons.done} style={styles.iconStyle} />
          <Text style={styles.successTxt}>Password Changed!</Text>
          <Text style={styles.successTxtDetail}>
            Your password has been changed successfully.
          </Text>
          <AppButton
            title={'Back to Login'}
            buttonStyle={styles.buttonStyle}
            onPress={onLoginBackPress}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
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
    color: colors.blue,
    marginTop: WP(5),
    alignSelf: 'center',
  },
  successTxtDetail: {
    fontSize: size.small,
    color: colors.g19,
    marginTop: WP(5),
    width: WP(60),
    textAlign: 'center',
    alignSelf: 'center',
  },
  buttonStyle: {
    marginTop: WP(15),
  },
});
