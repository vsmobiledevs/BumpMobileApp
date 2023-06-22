/* eslint-disable import/no-cycle */
/* eslint-disable camelcase */
import { Icons } from '../../assets/icons';
import { appImages } from '../exporter';

const DummyImage =
  'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg';

const TaxDocumentInfo = [
  {
    id: 0,
    heading: 'Crypto Blockchain tax Firm',
    title: 'F9-B Tax Document',
    description:
      'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    date: '4/17/2023',
    bgColor: `#237B9F20`,
  },
  {
    id: 1,
    heading: 'Crypto Blockchain tax Firm',
    title: 'F9-B Tax Document',
    description:
      'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    date: '4/17/2023',
    bgColor: `#CEDFD2`,
  },

  {
    id: 2,
    heading: 'Crypto Blockchain tax Firm',
    title: 'F9-B Tax Document',
    description:
      'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    date: '4/17/2023',
    bgColor: `#CBCED0`,
  },
];

const History = [
  {
    id: 0,
    checked: false,
    time: '11:10 AM',
    icon: Icons.nft1,
    title: 'NFT Blockchain Marketplace',
  },
  {
    id: 1,
    checked: true,
    time: '02:18 PM',
    icon: Icons.nft1,
    title: 'NFT Blockchain Marketplace',
  },
  {
    id: 3,
    checked: true,
    time: '21:10 AM',
    icon: Icons.nft1,
    title: 'NFT Blockchain Marketplace',
  },
  {
    id: 4,
    checked: false,
    time: '07:10 AM',
    icon: Icons.nft1,
    title: 'NFT Blockchain Marketplace',
  },
];

const Options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const SocialIcons = [
  {
    id: 0,
    name: 'apple',
    icon: appImages?.apple,
  },
  {
    id: 1,
    name: 'google',
    icon: appImages?.google,
  },
  {
    id: 2,
    name: 'amazon',
    icon: appImages?.aws,
  },
  {
    id: 3,
    name: 'facebook',
    icon: appImages?.facebook,
  },
];

const AccountButtons = [
  {
    id: 0,
    title: 'Earnings',
    leftIcon: Icons?.earn,
    parentScreen: 'accountTabScreens',
    screen: 'EarningTab',
  },
  {
    id: 1,
    title: 'Edit Profile',
    leftIcon: Icons?.edit,
    parentScreen: 'accountTabScreens',
    screen: 'EditProfile',
  },
  {
    id: 2,
    title: 'Custodial Wallet',
    leftIcon: Icons?.wallet,
    screen: 'CustodialWallets',
  },
  {
    id: 3,
    title: 'Tax Documents',
    leftIcon: Icons?.tax,
    parentScreen: 'accountTabScreens',
    screen: 'TaxDocument',
  },
  {
    id: 4,
    title: 'Change Password',
    leftIcon: Icons?.lock,
    parentScreen: 'accountTabScreens',
    screen: 'ResetPassword',
  },
  {
    id: 421,
    title: 'Payment Method',
    leftIcon: Icons?.payment,
    parentScreen: 'accountTabScreens',
    screen: 'SelectMethod',
  },
  {
    id: 5,
    title: 'FAQs',
    leftIcon: Icons?.faq,
    parentScreen: 'accountTabScreens',
    screen: 'Faq',
  },
  {
    id: 6,
    title: 'Terms & Conditions',
    leftIcon: Icons?.terms,
    parentScreen: 'accountTabScreens',
    screen: 'Terms',
  },
  {
    id: 7,
    title: 'Privacy Policy',
    leftIcon: Icons?.privacy,
    parentScreen: 'accountTabScreens',
    screen: 'Terms',
  },
  {
    id: 8,
    title: 'Contact Us',
    leftIcon: Icons?.contact,
    parentScreen: 'accountTabScreens',
    screen: 'ContactUs',
  },
  {
    id: 9,
    title: 'Delete Account',
    leftIcon: Icons?.delete,
    parentScreen: 'accountTabScreens',
    screen: 'deleteAccount',
  },
  {
    id: 10,
    title: 'Log Out',
    leftIcon: Icons?.logout,
    parentScreen: 'accountTabScreens',
    screen: 'logout',
  },
];

const MetaMasks = [
  {
    id: 0,
    name: 'Metamask',
    icon: appImages.metaMask,
  },
  {
    id: 1,
    name: 'Binance',
    icon: appImages.binance,
  },
  {
    id: 2,
    name: 'BitGo',
    icon: appImages.bitGo,
  },
  {
    id: 3,
    name: 'Blockchain.com',
    icon: appImages.blockchain,
  },
  {
    id: 4,
    name: 'BitMex',
    icon: appImages.bitMax,
  },
  {
    id: 5,
    name: 'Wallet Connect',
    icon: appImages.walletConnect,
  },
  {
    id: 6,
    name: 'Ewallet',
    icon: appImages.eWallet,
  },
];

const WithdrawButtons = [
  {
    id: 0,
    bank: Icons.bank,
    bankName: 'Bank Transfer',
    rightIcon: Icons.rightGrey
  },
  {
    id: 1,
    bank: Icons.metaMask,
    bankName: 'Metamask Account',
    rightIcon: Icons.rightGrey
  }
]

const PayoutsRecord = [
  {
    id: 0,
    date: '4/4/2023',
    status: 'In Progress',
    orderNumber: '#mcj84538',
    amount: '$50.00'
  }
]

export {
  SocialIcons,
  AccountButtons,
  DummyImage,
  Options,
  MetaMasks,
  TaxDocumentInfo,
  History,
  WithdrawButtons,
  PayoutsRecord,
};
