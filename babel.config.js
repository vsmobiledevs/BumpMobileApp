module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    ["react-native-reanimated/plugin", {
      "relativeSourceLocation": true
    }],
    '@babel/plugin-transform-private-methods',
    '@babel/plugin-proposal-class-properties',
  ],
};
