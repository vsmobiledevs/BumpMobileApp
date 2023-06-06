/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import { Icons } from '../../assets/icons';
import { AppButton } from '../AppButton/AppButton';
import { HP, WP, colors, family, size } from '../../shared/exporter';

function DeleteAccountModal({ show, onTouchCancel, onOKPress }) {
  return (
    <Modal
      isVisible={show}
      onBackdropPress={onTouchCancel}
      animationIn="fadeIn"
      animationOut="fadeOut"
      transparent
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalViewStyle}>
          {Icons.done}
          <Text style={[styles.successTxtDetail, { fontSize: size.h5 }]}>Account Deleted!</Text>

          <AppButton
            title="OK"
            buttonStyle={styles.buttonStyle}
            buttonContainer={{ marginTop: WP(15) }}
            touchableOpacity={{
              onPress: () => onOKPress(),
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

export { DeleteAccountModal };

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
    marginTop: WP(7),
    width: '80%',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: family.Roboto_Medium,
  },
  buttonStyle: {
    alignSelf: 'center',
    width: WP(80),
  },
});
