/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable new-cap */
/* eslint-disable global-require */
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { } from 'react';
import { Icons } from '../../../assets/icons';
import { AuthHeader, MetaMaskCard } from '../../../components';
import { HP, MetaMasks, WP, colors, size } from '../../../shared/exporter';

function CustodialWallets({ navigation }) {

  const onPressItem = (item) => {
    switch (item.id) {
      case 0:
        console.log("press metamask");
        break;

      default:
        break;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader left={Icons.leftArrow} onPressLeft={() => navigation.goBack()} />

      {/* blockchain list */}
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Select a Custodial NFT Wallet</Text>
        {MetaMasks.map((item) => (
          <MetaMaskCard key={item.id} item={item} onPressItem={() => onPressItem(item)} />
        ))}
      </View>
    </SafeAreaView>
  );
}

export default CustodialWallets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.w1,
  },
  innerContainer: {
    width: WP(90),
    marginTop: HP(8),
    alignSelf: 'center',
    borderColor: colors.P1,
    backgroundColor: colors.white,
    borderWidth: HP(0.1),
    borderRadius: HP(2),
    paddingBottom: HP(4),
    shadowColor: colors.b1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    fontSize: size.normal,
    marginBottom: HP(2),
    fontWeight: 'bold',
    color: colors.g19,
    margin: HP(2),
  },
});
