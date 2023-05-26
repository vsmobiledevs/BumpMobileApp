import {ethers} from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';

const MetaMask = {
  async connect() {
    try {
      const provider = await detectEthereumProvider();
      if (provider) {
        await provider.request({method: 'eth_requestAccounts'});
        return new ethers.providers.Web3Provider(provider);
      } else {
        throw new Error('MetaMask not found');
      }
    } catch (error) {
      throw new Error('Failed to connect to MetaMask');
    }
  },
};

export default MetaMask;
