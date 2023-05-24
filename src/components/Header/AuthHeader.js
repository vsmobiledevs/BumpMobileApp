import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appIcons, colors, family, size, WP} from '../../shared/exporter';

const AuthHeader = ({onArrowPress, heading, detail}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onArrowPress}
        style={styles.backArrowContainer}>
        <Image
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
    marginTop: WP(10),
    fontFamily: family.Roboto_Bold,
  },
  detailsTxt: {
    color: colors.g19,
    fontSize: size.normal,
    marginHorizontal: WP(6),
    marginRight: WP(10),
    marginTop: WP(4),
    marginBottom: WP(10),
    fontFamily: family.Roboto_Medium,
  },
});
