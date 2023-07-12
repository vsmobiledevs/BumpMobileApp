/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable new-cap */
/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ethers } from 'ethers';
import MetaMaskSDK from '@metamask/sdk';
import _BackgroundTimer from 'react-native-background-timer';
import { Icons } from '../../../assets/icons';
import { AuthHeader, MetaMaskCard } from '../../../components';
import { HP, MetaMasks, WP, colors, size } from '../../../shared/exporter';

const sdk = new MetaMaskSDK({
  openDeeplink: (link) => {
    Linking.openURL(link);
  },
  timer: _BackgroundTimer,
  dappMetadata: {
    name: 'Bump mobile app',
    url: 'example.com',
  },
});

const ethereum = sdk.getProvider();

const provider = new ethers.providers.Web3Provider(ethereum);

function CustodialWallets({ navigation }) {
  useEffect(() => {
    ethereum.on('chainChanged', (chain) => {
      console.log(chain);
    });
    ethereum.on('accountsChanged', (accounts) => {
      console.log(accounts);
    });
    getBalance();
  }, []);

  const getBalance = async () => {
    if (!ethereum.selectedAddress) {
      return;
    }
    try {
      const balance = await provider.getBalance(ethereum.selectedAddress);
      console.log('Balance:', balance);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const connect = async () => {
    try {
      const result = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log('RESULT', result);
      getBalance();
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  // const exampleRequest = async () => {
  //   try {
  //     const result = await ethereum.request({
  //       method: 'wallet_addEthereumChain',
  //       params: [
  //         {
  //           chainId: '0x89',
  //           chainName: 'Polygon',
  //           blockExplorerUrls: ['https://polygonscan.com'],
  //           nativeCurrency: { symbol: 'MATIC', decimals: 18 },
  //           rpcUrls: ['https://polygon-rpc.com/'],
  //         },
  //       ],
  //     });
  //     console.log('RESULT', result);
  //   } catch (e) {
  //     console.log('ERROR', e);
  //   }
  // };

  // const sign = async () => {
  //   const msgParams = JSON.stringify({
  //     domain: {
  //       // Defining the chain aka Rinkeby testnet or Ethereum Main Net
  //       chainId: parseInt(ethereum.chainId, 16),
  //       // Give a user friendly name to the specific contract you are signing for.
  //       name: 'Ether Mail',
  //       // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
  //       verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
  //       // Just let's you know the latest version. Definitely make sure the field name is correct.
  //       version: '1',
  //     },

  //     // Defining the message signing data content.
  //     message: {
  //       /*
  //        - Anything you want. Just a JSON Blob that encodes the data you want to send
  //        - No required fields
  //        - This is DApp Specific
  //        - Be as explicit as possible when building out the message schema.
  //       */
  //       contents: 'Hello, Bob!',
  //       attachedMoneyInEth: 4.2,
  //       from: {
  //         name: 'Cow',
  //         wallets: [
  //           '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
  //           '0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF',
  //         ],
  //       },
  //       to: [
  //         {
  //           name: 'Bob',
  //           wallets: [
  //             '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  //             '0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57',
  //             '0xB0B0b0b0b0b0B000000000000000000000000000',
  //           ],
  //         },
  //       ],
  //     },
  //     // Refers to the keys of the *types* object below.
  //     primaryType: 'Mail',
  //     types: {
  //       // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
  //       EIP712Domain: [
  //         { name: 'name', type: 'string' },
  //         { name: 'version', type: 'string' },
  //         { name: 'chainId', type: 'uint256' },
  //         { name: 'verifyingContract', type: 'address' },
  //       ],
  //       // Not an EIP712Domain definition
  //       Group: [
  //         { name: 'name', type: 'string' },
  //         { name: 'members', type: 'Person[]' },
  //       ],
  //       // Refer to PrimaryType
  //       Mail: [
  //         { name: 'from', type: 'Person' },
  //         { name: 'to', type: 'Person[]' },
  //         { name: 'contents', type: 'string' },
  //       ],
  //       // Not an EIP712Domain definition
  //       Person: [
  //         { name: 'name', type: 'string' },
  //         { name: 'wallets', type: 'address[]' },
  //       ],
  //     },
  //   });

  //   const from = ethereum.selectedAddress;

  //   const params = [from, msgParams];
  //   const method = 'eth_signTypedData_v4';

  //   const resp = await ethereum.request({ method, params });
  //   console.log("response--", resp);
  // };

  // const sendTransaction = async () => {
  //   const to = '0x0000000000000000000000000000000000000000';
  //   const transactionParameters = {
  //     to, // Required except during contract publications.
  //     from: ethereum.selectedAddress, // must match user's active address.
  //     value: '0x5AF3107A4000', // Only required to send ether to the recipient from the initiating external account.
  //   };

  //   try {
  //     // txHash is a hex string
  //     // As with any RPC call, it may throw an error
  //     const txHash = await ethereum.request({
  //       method: 'eth_sendTransaction',
  //       params: [transactionParameters],
  //     });

  //     console.log("txHash--", txHash);

  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const onPressItem = (item) => {
    switch (item.id) {
      case 0:
        connect();
        break;

      default:
        break;
    }
  };

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
