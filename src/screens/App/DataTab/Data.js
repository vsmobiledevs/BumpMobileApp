import {View, Text, Linking} from 'react-native';
import React from 'react';
import BackgroundTimer from 'react-native-background-timer';
import MetaMaskSDK from '@metamask/sdk';
import {ethers} from 'ethers';
import {Provider} from 'react-redux';

const sdk = new MetaMaskSDK({
  openDeeplink: link => {
    Linking.openURL(link);
  },
  timer: BackgroundTimer,
  dappMetadata: {
    name: 'BumpMobileApp',
    url: 'example.com',
  },
});

const ethereum = sdk.getProvider();

const provider = new ethers.providers.Web3Provider(ethereum);
const Data = () => {
  console.log(provider);
  return (
    <View>
      <Text>Data</Text>
    </View>
  );
};

export default Data;
