/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { HP, WP, colors, size } from '../../shared/exporter';
import { Icons } from '../../assets/icons';

function NftsCard(props) {
  const { item, arrayLength, onPressIcon, onAddShortCut, index, onEditShortCut, onRemoveShortCut } =
    props;

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.iconsMain}>
      {/* {index === arrayLength - 1 ? (
        <View style={styles.add}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onAddShortCut}
            style={styles.iconContainer}
          >
            {Icons.add}
          </TouchableOpacity>
          <Text style={styles.iconText}>Add Shortcut</Text>
        </View>
      ) : ( */}
      <>
        <Menu>
          <MenuTrigger
            triggerOnLongPress
            onAlternativeAction={onPressIcon}
            style={styles.triggerContainer}
          >
            <View style={styles.iconContainer}>
              <Image
                source={{
                  uri: item.favicon
                    ? item.favicon
                    : 'https://images.unsplash.com/photo-1624973419141-739e19a26793?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
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
      </>
      {/* )} */}
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
    fontSize: size.tiny,
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
  add: {
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    borderRadius: HP(5),
  },
});

export { NftsCard };
