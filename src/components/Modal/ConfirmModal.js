import {HP, WP, colors, family, size} from '../../shared/exporter';
import {StyleSheet, Text, View} from 'react-native';
import {AppButton} from '../AppButton/AppButton';
import Modal from 'react-native-modal';
import React from 'react';
import {Icons} from '../../assets/icons';

const ConfirmModal = ({show, onCancelPress, onTouchCancel, onConfirmPress}) => {
  return (
    <Modal
      isVisible={show}
      onBackdropPress={onTouchCancel}
      animationIn="fadeIn"
      animationOut="fadeOut"
      transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalViewStyle}>
          {Icons.alert}
          <Text style={[styles.successTxtDetail, {fontSize: size.small}]}>
            Are you sure you want to delete your {'\n'} account? It will
            permanently {'\n'}erase your data!
          </Text>
          <AppButton
            title={'Confirm Delete'}
            buttonStyle={styles.buttonStyle}
            buttonContainer={{marginTop: WP(20)}}
            clr1={colors.s10}
            clr2={colors.s10}
            touchableOpacity={{
              onPress: () => onConfirmPress(),
            }}
          />
          <AppButton
            title={'Cancel'}
            buttonStyle={styles.buttonStyle}
            buttonContainer={{marginTop: WP(0)}}
            touchableOpacity={{
              onPress: () => onCancelPress(),
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export {ConfirmModal};

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
    fontFamily: family.Roboto_Regular,
  },
  buttonStyle: {
    alignSelf: 'center',
    width: WP(80),
  },
});
