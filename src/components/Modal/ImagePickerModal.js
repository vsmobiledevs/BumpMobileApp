/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { WP, appImages, colors } from '../../shared/exporter';

export function ImagePickerModal({ show, onPressHide, onPressGallery, onPressCamera }) {
  return (
    <View style={styles.container}>
      <Modal onBackdropPress={onPressHide} isVisible={show}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={onPressCamera} style={styles.btn}>
            <View style={styles.leftContainer}>
              <Image source={appImages.themeCamera} style={styles.imageStyle} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.btnText}>Take Image from Camera</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={onPressGallery} style={styles.btn}>
            <View style={styles.leftContainer}>
              <Image source={appImages.gallery} style={styles.imageStyle} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.btnText}>Pick Image from Gallery</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

ImagePickerModal.propTypes = {
  show: PropTypes.bool,
  onPressHide: PropTypes.func,
  onPressGallery: PropTypes.func,
  onPressCamera: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    borderRadius: 30,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  separator: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: colors.b1,
  },
  btn: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnText: {
    fontSize: WP('4'),
    fontWeight: '700',
    color: colors.b1,
    textAlign: 'left',
    paddingVertical: WP('5'),
  },
  imageStyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    tintColor: colors.b1,
  },
  textContainer: {
    width: '85%',
  },
  leftContainer: {
    width: '15%',
    paddingVertical: WP('5'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
