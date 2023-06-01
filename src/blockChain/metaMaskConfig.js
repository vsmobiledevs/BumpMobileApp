import BackgroundTimer from 'react-native-background-timer';
import MetaMaskSDK from '@metamask/sdk';
import {ethers} from 'ethers';
import {Linking} from 'react-native';

const sdk = new MetaMaskSDK({
  openDeeplink: link => {
    Linking.openURL(link);
  },
  timer: BackgroundTimer,
  dappMetadata: {
    name: 'React Native Test Dapp',
    url: 'example.com',
  },
});

const ethereum = sdk.getProvider();

const provider = new ethers.providers.Web3Provider(ethereum);

// Connect with metaMask

const connect = async () => {
  try {
    const result = await ethereum.request({method: 'eth_requestAccounts'});
    console.log('RESULT', result?.[0]);
    getBalance();
    return result?.[0];
  } catch (e) {
    console.log('ERROR', e);
  }
};

// Get Balance
const getBalance = async () => {
  if (!ethereum.selectedAddress) {
    return;
  }
  const bal = await provider.getBalance(ethereum.selectedAddress);

  return ethers.utils.formatEther(bal);
};

//sign

const sign = async (domain, message, from, to) => {
  const msgParams = JSON.stringify({
    domain: {
      // Defining the chain aka Rinkeby testnet or Ethereum Main Net
      chainId: parseInt(ethereum.chainId, 16),
      // Give a user friendly name to the specific contract you are signing for.
      name: 'Ether Mail',
      // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
      verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
      // Just let's you know the latest version. Definitely make sure the field name is correct.
      version: '1',
    },

    // Defining the message signing data content.
    message: {
      /*
         - Anything you want. Just a JSON Blob that encodes the data you want to send
         - No required fields
         - This is DApp Specific
         - Be as explicit as possible when building out the message schema.
        */
      contents: 'Hello, Bob!',
      attachedMoneyInEth: 4.2,
      from: {
        name: 'Cow',
        wallets: [
          '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
          '0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF',
        ],
      },
      to: [
        {
          name: 'Bob',
          wallets: [
            '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
            '0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57',
            '0xB0B0b0b0b0b0B000000000000000000000000000',
          ],
        },
      ],
    },
    // Refers to the keys of the *types* object below.
    primaryType: 'Mail',
    types: {
      // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
      EIP712Domain: [
        {name: 'name', type: 'string'},
        {name: 'version', type: 'string'},
        {name: 'chainId', type: 'uint256'},
        {name: 'verifyingContract', type: 'address'},
      ],
      // Not an EIP712Domain definition
      Group: [
        {name: 'name', type: 'string'},
        {name: 'members', type: 'Person[]'},
      ],
      // Refer to PrimaryType
      Mail: [
        {name: 'from', type: 'Person'},
        {name: 'to', type: 'Person[]'},
        {name: 'contents', type: 'string'},
      ],
      // Not an EIP712Domain definition
      Person: [
        {name: 'name', type: 'string'},
        {name: 'wallets', type: 'address[]'},
      ],
    },
  });

  var from = ethereum.selectedAddress;

  var params = [from, msgParams];
  var method = 'eth_signTypedData_v4';

  const resp = await ethereum.request({method, params});
  return resp;
};

const sendTransaction = async (to, from, value) => {
  const too = '0x0000000000000000000000000000000000000000';
  const transactionParameters = {
    to, // Required except during contract publications.
    from: ethereum.selectedAddress, // must match user's active address.
    value: '0x5AF3107A4000', // Only required to send ether to the recipient from the initiating external account.
  };

  try {
    // txHash is a hex string
    // As with any RPC call, it may throw an error
    const txHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    return txHash;
  } catch (e) {
    console.log(e);
  }
};

// useEffect(() => {
//   ethereum.on('chainChanged', chain => {
//     console.log(chain);
//   });
//   ethereum.on('accountsChanged', accounts => {
//     console.log(accounts?.[0]);
//     getBalance();
//   });
// }, []);

export {provider, ethereum, getBalance, connect, sign, sendTransaction};
