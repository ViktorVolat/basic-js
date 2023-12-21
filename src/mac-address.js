const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const address = n.split('-');
  let isGood = true;

  address.map(octet => {
    const byte = octet.split('');

    for (let b of byte) {
      if ((b.charCodeAt() <= 47 || b.charCodeAt() >= 71) && isGood) {
        isGood = false;
      }
    }
  });
  return isGood;
}
module.exports = {
  isMAC48Address
};
