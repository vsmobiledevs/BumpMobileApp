// Fix for https://github.com/facebook/react-native/issues/5667

const chars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
if (typeof global.atob === 'undefined') {
  global.atob = function (input) {
    let str = String(input).replace(/=+$/, '');
    let output = '';

    if (str.length % 4 === 1) {
      throw new Error(
        "'atob' failed: The string to be decoded is not correctly encoded.",
      );
    }

    for (
      // Initialize result and counters
      let bc = 0, bs, buffer, idx = 0;
      // Get next character
      (buffer = str.charAt(idx++));
      // Character found in table? initialize bit storage and add its ascii value;
      ~buffer &&
      ((bs = bc % 4 ? bs * 64 + buffer : buffer),
      // And if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4)
        ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
        : 0
    ) {
      // Try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer);
    }

    return output;
  };
}

if (typeof global.self === 'undefined') {
  global.self = global;
}

if (typeof __dirname === 'undefined') {
  global.__dirname = '/';
}

if (typeof __filename === 'undefined') {
  global.__filename = '';
}

if (typeof process === 'undefined') {
  global.process = require('process');
} else {
  const bProcess = require('process');
  for (const p in bProcess) {
    if (!(p in process)) {
      process[p] = bProcess[p];
    }
  }
}

process.browser = false;
if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer;
}

// global.location = global.location || { port: 80 }
const isDev = typeof __DEV__ === 'boolean' && __DEV__;
process.env.NODE_ENV = isDev ? 'development' : 'production';
if (typeof localStorage !== 'undefined') {
  localStorage.debug = isDev ? '*' : '';
}

// If using the crypto shim, uncomment the following line to ensure
// crypto is loaded first, so it can populate global.crypto
// require('crypto')
