/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { HP, WP, colors, size } from '../../shared/exporter';
import { Icons } from '../../assets/icons';

function NftsCard(props) {
  const { item, onPressIcon, onAddShortCut, onEditShortCut, onRemoveShortCut } = props;

  if (item.id === 0) {
    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.iconsMain}>
        <View style={styles.add}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onAddShortCut}
            style={styles.iconContainer}
          >
            {Icons.add}
          </TouchableOpacity>
          <Text style={styles.iconText}>{item?.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.iconsMain}>
      <Menu>
        <MenuTrigger
          triggerOnLongPress
          onAlternativeAction={onPressIcon}
          style={styles.triggerContainer}
        >
          <View style={styles.iconContainer}>
            <Image
              source={{
                uri: item.favicon ? item.favicon : 'https://images.unsplash.com/photo',
              }}
              style={styles.icon}
            />
          </View>
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuOptionsStyle}>
          <MenuOption style={styles.menuStyle} onSelect={onEditShortCut}>
            {Icons.editPenFill}
            <Text style={styles.menuText}>Edit Shortcut</Text>
          </MenuOption>
          <MenuOption style={styles.menuStyle} onSelect={onRemoveShortCut}>
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
    width: WP(15),
    height: WP(15),
    margin: HP(1.5),
    borderRadius: HP(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  iconsMain: {
    alignItems: 'center',
  },
  iconText: {
    color: colors.white,
    fontSize: size.tiny,
  },
  menuStyle: {
    margin: HP(0.5),
    alignItems: 'center',
    flexDirection: 'row',
  },
  triggerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuOptionsStyle: {
    width: WP(30),
    marginTop: HP(1),
    borderRadius: HP(1),
  },
  menuText: {
    fontSize: HP(1.3),
    marginStart: HP(1),
  },
  add: {
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: HP(5),
    resizeMode: 'contain',
  },
});

export { NftsCard };
