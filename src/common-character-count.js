const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const word_1 = s1.split('');
  const word_2 = s2.split('');

  let count = 0;
  word_2.forEach(char => {
    if (word_1.includes(char)) {
      const i = word_1.findIndex(el => el === char);
      word_1[i] = null;
      count++;
    }
  });
  return count;
}

module.exports = {
  getCommonCharacterCount
};
