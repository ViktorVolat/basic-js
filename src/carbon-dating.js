const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  if (sampleActivity.trim().length === 0) return false;
  const sampleActivityNumber = Number(sampleActivity);
  if (sampleActivityNumber > MODERN_ACTIVITY || sampleActivityNumber < 1) return false;
  if ( isNaN(sampleActivityNumber) ) return false;

  const active = MODERN_ACTIVITY / sampleActivityNumber;
  const k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(active) / k);
}

module.exports = {
  dateSample
};
