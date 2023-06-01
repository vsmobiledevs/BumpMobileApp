import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import React from 'react';
import {colors, family, size, WP, HP} from '../../shared/exporter';
let width = Dimensions.get('window').width;

const AuthHeader = ({
  left,
  center,
  right,
  leftText,
  onPressLeft,
  onPressRight,
  rightText,
}) => {
  return (
    <View style={styles.mainStyle}>
      <View style={{position: 'absolute', left: 0, zIndex: 1}}>
        {left && (
          <TouchableOpacity
            onPress={onPressLeft}
            style={styles.backArrowContainer}>
            {left}
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          zIndex: -1,
        }}>
        {center && <Text style={styles.textStyle}>{center}</Text>}
      </View>
      <View style={{position: 'absolute', right: 0, zIndex: 1}}>
        {right ? (
          <TouchableOpacity
            onPress={onPressRight}
            style={styles.backArrowContainer}>
            {right}
          </TouchableOpacity>
        ) : (
          <Text style={{color: colors.white}}>{rightText}</Text>
        )}
      </View>
    </View>
  );
};

export {AuthHeader};

const styles = StyleSheet.create({
  mainStyle: {
    marginHorizontal: WP(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    marginVertical: Platform.OS === 'android' ? HP(4) : HP(2),
  },
  backArrowContainer: {
    width: WP(10),
    height: HP(5),
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: family.Roboto_Bold,
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: WP(4.5),
    color: colors.g19,
    alignSelf: 'center',
  },
});
