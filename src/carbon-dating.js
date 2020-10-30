const CustomError = require("../extensions/custom-error");

module.exports = function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  let number;

  if (typeof sampleActivity === 'string') {
    sampleActivity = parseInt(sampleActivity);
    if (sampleActivity > 0 && typeof sampleActivity === 'number' && sampleActivity < 15) {
      number = (Math.log(MODERN_ACTIVITY / sampleActivity).toFixed(4) / (0.693 / HALF_LIFE_PERIOD).toFixed(8)).toFixed(0);
    } else {
      number = false;
    }
  } else {
    number = false;
  }
  return number;
};