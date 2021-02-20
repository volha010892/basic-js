const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result={turns: null, seconds:null};
  let turns=(Math.pow(2, disksNumber))-1;
  let time=Math.floor(turns*3600/turnsSpeed);
  result.turns=turns;
  result.seconds=time;
  return  result;
};
