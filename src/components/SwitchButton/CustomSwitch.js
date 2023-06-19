/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { HP, WP, colors, size } from '../../shared/exporter';

function CustomSwitch({
  color,
  color2,
  option1,
  option2,
  roundCorner,
  customStyle,
  selectionMode,
  onSelectSwitch,
  option1CustomStyle,
  option2CustomStyle
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updatedSwitchData = (val) => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View style={[styles.container, customStyle]}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(1)}
        style={[{
          flex: 1,
          backgroundColor: getSelectionMode === 1 ? color : colors.white,
          borderTopLeftRadius: roundCorner ? HP(2) : 0,
          borderBottomLeftRadius: roundCorner ? HP(2) : 0,
          justifyContent: 'center',
          alignItems: 'center',
          padding: HP(0.6),
        }, option1CustomStyle]}
      >
        <Text style={[styles.text, { color: getSelectionMode === 1 ? colors.white : colors.g24 }]}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(2)}
        style={[{
          flex: 1,
          backgroundColor: getSelectionMode === 2 ? color2 : colors.white,
          borderTopRightRadius: roundCorner ? HP(2) : 0,
          borderBottomRightRadius: roundCorner ? HP(2) : 0,
          justifyContent: 'center',
          alignItems: 'center',
        }, option2CustomStyle]}
      >
        <Text style={[styles.text, { color: getSelectionMode === 2 ? colors.white : colors.g24 }]}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

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
