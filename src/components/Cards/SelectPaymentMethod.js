/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icons } from '../../assets/icons';
import { HP, WP, colors, size } from '../../shared/exporter';
import { BankDetailCard } from './BankDetailCard';
import { CardDetail } from './CardDetail';

function SelectPaymentMethod({ item, onPressCard, addAnotherBank, userCards, deleteCard }) {
  return (
    <View>
      <View style={styles.innerContainer}>
        <View style={styles.selectorContainer}>
          <View style={styles.selector}>
            {item?.icon}
            <Text style={styles.text}>{item?.title}</Text>
          </View>
          <TouchableOpacity onPress={onPressCard} style={styles.icon} activeOpacity={0.8}>
            {item?.isUp ? Icons.up : Icons.down}
          </TouchableOpacity>
        </View>
        {item?.isUp && item?.id === 0 && <BankDetailCard addAnotherBank={addAnotherBank} />}
        {item?.isUp && item?.id === 1 && userCards.length > 0
          ? userCards.map((item, index) => (
              <CardDetail key={index} item={item} onPressDelete={deleteCard} />
            ))
          : item?.isUp && item?.id === 1 && <Text style={styles.noCards}>No Cards Found!</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    width: WP(90),
    padding: HP(3),
    marginTop: HP(2),
    borderRadius: HP(2),
    alignSelf: 'center',
    backgroundColor: colors.white,
    shadowColor: colors.b1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  selectorContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.b1,
    marginStart: HP(2),
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    left: HP(1.5),
    padding: 10,
  },
  noCards: {
    alignSelf: 'center',
    fontSize: size.tiny,
    marginTop: HP(2),
    padding: HP(1),
  },
});

export { SelectPaymentMethod };
