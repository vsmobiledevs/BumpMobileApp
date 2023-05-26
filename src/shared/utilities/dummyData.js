import {Icons} from '../../assets/icons';

const socialIcons = [
  {
    id: 0,
    name: 'Apple',
    icon: Icons?.apple,
  },
  {
    id: 1,
    name: 'Google',
    icon: Icons?.google,
  },
  {
    id: 2,
    name: 'Amazon',
    icon: Icons?.amazon,
  },
  {
    id: 3,
    name: 'Facebook',
    icon: Icons?.facebook,
  },
];

const AccountBtns = [
  {
    id: 0,
    title: 'Earnings',
    leftIcon: Icons?.earn,
    screen: ['EditProfile'],
  },
  {
    id: 1,
    title: 'Edit Profile',
    leftIcon: Icons?.edit,
    screen: ['EditProfile'],
  },
  {
    id: 2,
    title: 'Custodial Wallet ',
    leftIcon: Icons?.wallet,
    screen: ['EditProfile'],
  },
  {
    id: 3,
    title: 'Tax Documents',
    leftIcon: Icons?.tax,
    screen: ['EditProfile'],
  },
  {
    id: 4,
    title: 'Change Password',
    leftIcon: Icons?.lock,
    screen: ['EditProfile'],
  },
  {
    id: 5,
    title: 'FAQs',
    leftIcon: Icons?.faq,
    screen: ['EditProfile'],
  },
  {
    id: 6,
    title: 'Terms & Conditions',
    leftIcon: Icons?.terms,
    screen: ['EditProfile'],
  },
  {
    id: 7,
    title: 'Privacy Policy',
    leftIcon: Icons?.privacy,
    screen: ['EditProfile'],
  },
  {
    id: 8,
    title: 'Contact Us',
    leftIcon: Icons?.contact,
    screen: ['EditProfile'],
  },
  {
    id: 9,
    title: 'Delete Account',
    leftIcon: Icons?.delete,
    screen: ['EditProfile'],
  },
];

export {socialIcons, AccountBtns};
