import {HP, WP, colors, family, size} from '../../shared/exporter';
import {StyleSheet, Text, View} from 'react-native';
import {AppButton} from '../AppButton/AppButton';
import Modal from 'react-native-modal';
import React from 'react';
import {AppInput} from '../Input/AppInput';

const RNModal = props => {
  const {
    show,
    onTouchCancel,
    title = 'Edit Shortcut',
    name = 'Name',
    url = 'URL',
  } = props;
  return (
    <Modal
      isVisible={show}
      onBackdropPress={onTouchCancel}
      animationIn="fadeIn"
      animationOut="fadeOut">
      <View style={styles.modalContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>{name}</Text>
          <AppInput
            containerStyle={styles.containerStyle}
            textInPutProps={{
              style: styles.input,
              placeholder: 'Google play store',
              placeholderTextColor: colors.g24,
            }}
          />
          <Text style={[styles.inputLabel, {marginTop: HP(2)}]}>{url}</Text>
          <AppInput
            containerStyle={styles.containerStyle}
            textInPutProps={{
              style: styles.input,
              placeholder: '',
              placeholderTextColor: colors.g24,
            }}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <AppButton
            title={'Done'}
            buttonContainer={{width: WP(20)}}
            buttonStyle={styles.done}
            // touchableOpacity={{
            //   onPress: () => onLoginBackPress(),
            // }}
          />
          <AppButton
            title={'Cancel'}
            clr1={colors.white}
            clr2={colors.white}
            buttonContainer={{width: WP(20)}}
            buttonStyle={styles.cancel}
            txtStyle={{color: colors.P6}}
            // touchableOpacity={{
            //   onPress: () => onLoginBackPress(),
            // }}
          />
        </View>
      </View>
    </Modal>
  );
};

export {RNModal};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: `${colors.white}`,
    padding: HP(2),
    borderRadius: 10,
  },
  title: {
    fontSize: size.medium,
    marginTop: HP(1.5),
  },
  inputLabel: {
    fontSize: size.small,
    marginStart: HP(1),
  },
  inputContainer: {
    marginTop: HP(5),
  },
  containerStyle: {
    marginHorizontal: 0,
    width: WP(80),
    height: WP(11),
  },
  input: {
    color: colors.b1,
    marginStart: 0,
  },
  buttonsContainer: {
    width: WP(45),
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
  done: {
    width: WP(20),
    paddingVertical: WP(3),
  },
  cancel: {
    width: WP(20),
    paddingVertical: WP(3),
    borderColor: colors.P3,
    borderWidth: 1,
  },
});
