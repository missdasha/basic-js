const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const K= 0.693/HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== "string" || sampleActivity === undefined)
    return false;
  let sample= parseFloat(sampleActivity);  
  if(isNaN(sample) || sample <= 0 || sample > 15)
    return false;
  let age= Math.log(MODERN_ACTIVITY / sample) / K;
  return Math.ceil(age);
};
