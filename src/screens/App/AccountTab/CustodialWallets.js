/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable new-cap */
/* eslint-disable global-require */
import { Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MetaMaskSDK from '@metamask/sdk';
import BackgroundTimer from 'react-native-background-timer';
import { ethers } from 'ethers';
import { HP, MetaMasks, WP, colors, size } from '../../../shared/exporter';
import { AuthHeader, MetaMaskCard } from '../../../components';
import { Icons } from '../../../assets/icons';

const sdk = new MetaMaskSDK({
  openDeeplink: link => {
    Linking.openURL(link);
  },
  timer: BackgroundTimer,
  dappMetadata: {
    name: 'Bump',
    url: 'example.com',
  },
});

const ethereum = sdk.getProvider();
const provider = new ethers.getDefaultProvider()

function CustodialWallets({ navigation }) {
  const [setAccount] = useState();
  const [setChain] = useState();
  const [setBalance] = useState();

  const getBalance = async () => {
    if (!ethereum.selectedAddress) {
      return;
    }
    const bal = await provider.getBalance(ethereum.selectedAddress);
    console.log("Balance--", bal);
    setBalance(ethers.formatEther(bal));
  };

  useEffect(() => {
    ethereum.on('chainChanged', chain => {
      console.log("chain--", chain);
      setChain(chain);
    });
    ethereum.on('accountsChanged', accounts => {
      console.log("accounts--", accounts);
      setAccount(accounts?.[0]);
      getBalance();
    });
  }, []);

  const connect = async () => {
    try {
      const result = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log('RESULT', result?.[0]);
      setAccount(result?.[0]);
      getBalance();
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  const onPressItem = (item) => {
    switch (item.id) {
      case 0:
        connect()
        console.log("click on metamask");
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
    marginTop: HP(3),
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
