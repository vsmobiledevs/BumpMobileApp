/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { HP, WP, colors } from '../../shared/exporter';
import { Icons } from '../../assets/icons';


function MyDataDropdown({
  value,
  items,
  setValue,
  setItems,
  placeholder,
  dropDownDirection,
  zIndex = 1,
}) {

  const [open, setOpen] = useState(false)
  return (
    <DropDownPicker
      style={styles.main}
      dropDownContainerStyle={[styles.dropDownContainer, {}]}
      containerStyle={styles.container}
      open={open}
      zIndex={zIndex}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={placeholder}
      ArrowUpIconComponent={(props) => Icons.dDUp}
      ArrowDownIconComponent={(props) => Icons.dD}
      dropDownDirection={dropDownDirection}
    />
  );
}

const styles = StyleSheet.create({
  main: {
    width: WP(86),
    alignSelf: 'center',
    borderColor: colors.P1,
    borderWidth: 1,
    backgroundColor: colors.w1,
    marginVertical: HP(1),
    marginTop: HP(2),
  },
  container: {
    width: WP(86),
    alignSelf: 'center',
  },
  dropDownContainer: {
    borderColor: colors.P1,
    borderWidth: 1,
  },
});

export { MyDataDropdown };
