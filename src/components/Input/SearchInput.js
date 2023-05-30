import {StyleSheet, Text, View, TextInput} from 'react-native';
import {HP, WP, colors, size} from '../../shared/exporter';
import React from 'react';
import CustomSwitch from '../SwitchButton/CustomSwitch';

const SearchInput = ({
  leftIcon,
  title,
  textInPutProps,
  containerStyle,
  onSelectSwitch,
}) => {
  return (
    <View style={[styles.mainContainer]}>
      {title && <Text style={styles.titleStyle}>{title}</Text>}
      <View style={[styles.inputContainer, containerStyle]}>
        {leftIcon}
        <TextInput
          {...textInPutProps}
          style={[styles.inputStyle, {...textInPutProps.style}]}
        />

        <View style={styles.buttonContainer}>
          <CustomSwitch
            selectionMode={1}
            roundCorner={true}
            option1={'Private'}
            option2={'Paid'}
            onSelectSwitch={onSelectSwitch}
            selectionColor={colors.orange}
          />
        </View>
      </View>
    </View>
  );
};

export {SearchInput};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: HP(1),
  },
  inputContainer: {
    borderWidth: 1,
    height: WP(12),
    borderRadius: WP(7),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.P3,
    marginHorizontal: WP(6),
    paddingHorizontal: WP(5),
    backgroundColor: colors.t1,
  },
  inputStyle: {
    width: WP(42),
    color: colors.g18,
  },
  titleStyle: {
    color: colors.g19,
    fontSize: size.normal,
    marginHorizontal: WP(8),
    marginVertical: HP(1),
  },
  buttonContainer: {
    width: WP(24),
    marginStart: HP(1),
    flexDirection: 'row',
    borderRadius: HP(2),
    backgroundColor: colors.white,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    height: HP(4.2),
    padding: HP(0.6),
    borderTopLeftRadius: HP(2),
    borderBottomLeftRadius: HP(2),
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paidButton: {
    borderTopLeftRadius: HP(0),
    borderBottomLeftRadius: HP(0),
    borderTopRightRadius: HP(2),
    borderBottomRightRadius: HP(2),
  },
  txt: {
    fontSize: size.xtiny,
    color: colors.white,
    textAlign: 'center',
  },
});
