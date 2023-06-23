/* eslint-disable object-shorthand */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-native-modal';
import { StyleSheet, Text, View } from 'react-native';
import { HP, WP, colors, size } from '../../shared/exporter';
import { AppButton } from '../AppButton/AppButton';
import { AppInput } from '../Input/AppInput';

function RNModal(props) {
  const { show, onTouchCancel, title, name, setName, url, setUrl, onPressDone, onPressCancel } =
    props;

  return (
    <Modal
      isVisible={show}
      onBackdropPress={onTouchCancel}
      animationIn="fadeIn"
      animationOut="fadeOut"
    >
      <View style={styles.modalContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Name</Text>
          <AppInput
            containerStyle={styles.containerStyle}
            textInPutProps={{
              value: name,
              style: styles.input,
              placeholder: 'Enter name here',
              placeholderTextColor: colors.g24,
              onChangeText: (val) => setName(val),
            }}
          />
          <Text style={[styles.inputLabel, { marginTop: HP(2) }]}>URL</Text>
          <AppInput
            containerStyle={styles.containerStyle}
            textInPutProps={{
              style: styles.input,
              value: url,
              placeholder: 'Enter URL here',
              placeholderTextColor: colors.g24,
              onChangeText: (val) => setUrl(val),
            }}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <AppButton
            title="Done"
            buttonContainer={{ width: WP(20) }}
            buttonStyle={styles.done}
            touchableOpacity={{
              onPress: onPressDone,
            }}
          />
          <AppButton
            title="Cancel"
            clr1={colors.white}
            clr2={colors.white}
            buttonContainer={{ width: WP(20) }}
            buttonStyle={styles.cancel}
            txtStyle={{ color: colors.p8 }}
            touchableOpacity={{
              onPress: onPressCancel,
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

export { RNModal };

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: `${colors.white}`,
    borderRadius: 10,
    padding: HP(2),
  },
  title: {
    fontSize: size.medium,
    marginTop: HP(1.5),
    color: colors.b1,
  },
  inputLabel: {
    fontSize: size.small,
    marginStart: HP(1),
    color: colors.b1,
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
