import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';

const AuthHeader = ({onArrowPress, heading, detail, image}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onArrowPress}
        style={styles.backArrowContainer}>
        <Image
          {...image}
          source={appIcons.backArrow}
          style={styles.iconStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.headingTxt}>{heading}</Text>
      <Text style={styles.detailsTxt}>{detail}</Text>
    </View>
  );
};

export {AuthHeader};

const styles = StyleSheet.create({
  backArrowContainer: {
    marginTop: WP(20),
    marginHorizontal: WP(6),
    width: WP(5),
  },
  iconStyle: {
    width: WP(4),
    height: WP(4),
  },
  headingTxt: {
    color: colors.g19,
    fontSize: size.h1,
    marginHorizontal: WP(6),
    marginTop: WP(8),
  },
  detailsTxt: {
    color: colors.g19,
    fontSize: size.normal,
    marginHorizontal: WP(6),
    marginTop: WP(6),
    marginBottom: WP(10),
  },
});
