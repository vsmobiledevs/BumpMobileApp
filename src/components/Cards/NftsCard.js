/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { HP, WP, colors } from '../../shared/exporter';
import { Icons } from '../../assets/icons';

function NftsCard(props) {
  const { item, arrayLength, onPressIcon, index, showModal } = props;

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.iconsMain}>
      <Menu>
        <MenuTrigger onPress={onPressIcon} style={styles.triggerContainer}>
          <View style={styles.iconContainer}>
            {index === arrayLength - 1 ? Icons.add : item?.icon}
          </View>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuOptionsStyle}>
          <MenuOption style={styles.menuStyle} onSelect={() => showModal(true)}>
            {Icons.editPenFill}
            <Text style={styles.menuText}>Edit Shortcut</Text>
          </MenuOption>
          <MenuOption style={styles.menuStyle} onSelect={() => true}>
            {Icons.delete}
            <Text style={styles.menuText}>Remove</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>

      <Text style={styles.iconText}>{item?.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: colors.white,
    borderRadius: HP(5),
    width: WP(15),
    height: WP(15),
    margin: HP(1.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsMain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: colors.white,
  },
  menuStyle: {
    margin: HP(0.5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  triggerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuOptionsStyle: {
    width: WP(30),
    borderRadius: HP(1),
    marginTop: HP(1),
  },
  menuText: {
    marginStart: HP(1),
    fontSize: HP(1.3),
  },
});

export { NftsCard };
