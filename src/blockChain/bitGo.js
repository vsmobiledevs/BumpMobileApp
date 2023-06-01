const BitGoJS = require('bitgo');
const bitgo = new BitGoJS.BitGo({env: 'test'});
const Promise = require('bluebird');

// TODO: set your access token here
const accessToken = null;

// TODO: set a label for your new wallet here
const label = 'Example Test Wallet';

// TODO: set your passphrase for your new wallet here
const passphrase = 'test_wallet_passphrase';

const coin = 'tltc';

// Create the wallet
Promise.coroutine(function* () {
  bitgo.authenticateWithAccessToken({accessToken});

  const walletOptions = {
    label,
    passphrase,
  };

  const wallet = yield bitgo.coin(coin).wallets().generateWallet(walletOptions);

  const walletInstance = wallet.wallet;

  console.log(`Wallet ID: ${walletInstance.id()}`);
  console.log(`Receive address: ${walletInstance.receiveAddress()}`);

  console.log('BACK THIS UP: ');
  console.log(
    `User keychain encrypted xPrv: ${wallet.userKeychain.encryptedPrv}`,
  );
  console.log(`Backup keychain xPrv: ${wallet.backupKeychain.prv}`);
})();
