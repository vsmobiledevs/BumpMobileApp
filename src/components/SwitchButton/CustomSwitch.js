import React, {useState} from 'react';

import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {HP, WP, colors, size} from '../../shared/exporter';

const CustomSwitch = ({
  selectionMode,
  roundCorner,
  option1,
  option2,
  onSelectSwitch,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(1)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 1 ? colors.orange : colors.white,
          borderTopLeftRadius: roundCorner ? HP(2) : 0,
          borderBottomLeftRadius: roundCorner ? HP(2) : 0,
          justifyContent: 'center',
          alignItems: 'center',
          padding: HP(0.6),
        }}>
        <Text
          style={[
            styles.text,
            {color: getSelectionMode == 1 ? colors.white : colors.g24},
          ]}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 2 ? colors.P4 : colors.white,
          borderTopRightRadius: roundCorner ? HP(2) : 0,
          borderBottomRightRadius: roundCorner ? HP(2) : 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={[
            styles.text,
            {color: getSelectionMode == 2 ? colors.white : colors.g24},
          ]}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WP(24),
    height: HP(4.2),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: size.xtiny,
    textAlign: 'center',
  },
});
export default CustomSwitch;
