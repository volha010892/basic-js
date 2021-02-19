const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let activity=/^-?[\d.]+(?:e-?\d+)?$/.test(sampleActivity);
 if(typeof(sampleActivity)!=='string'||!activity){
      return false
 }
 else{
   let log=Math.log(MODERN_ACTIVITY/sampleActivity)
   let k=log/0.693;
   let result=Math.ceil(k/HALF_LIFE_PERIOD);
   if(!isFinite(result))
   return false
   else
   return result; 
 }
};
 
