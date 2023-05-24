import {HP, WP, appIcons, colors, family, size} from '../../shared/exporter';
import {StyleSheet, Text, View, Image} from 'react-native';
import {AppButton} from '../AppButton/AppButton';
import Modal from 'react-native-modal';
import React from 'react';

const SuccessModal = ({show, onLoginBackPress, onTouchCancel}) => {
  return (
    <Modal
      isVisible={show}
      onBackdropPress={onTouchCancel}
      animationIn="fadeIn"
      animationOut="fadeOut">
      <View style={styles.modalContainer}>
        <View style={styles.modalViewStyle}>
          <Image source={appIcons.done} style={styles.iconStyle} />
          <Text style={styles.successTxt}>{'Password Changed!'}</Text>
          <Text style={styles.successTxtDetail}>
            {'Your password has been changed successfully.'}
          </Text>
          <AppButton
            title={'Back to Login'}
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
    color: colors.blue,
    marginTop: WP(5),
    alignSelf: 'center',
    fontFamily: family.Roboto_Bold,
  },
  successTxtDetail: {
    fontSize: size.small,
    color: colors.g19,
    marginTop: WP(5),
    width: WP(60),
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: family.Roboto_Regular,
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: WP(15),
    width: WP(50),
  },
});
