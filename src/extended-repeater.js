const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {
  let repeatTimes=1;
  let additionRepeatTimes=1;
  let separator = '+';
  let additionSeparator = '|';
  let addition='';
  let result = [];

  if(typeof(str)!=='string')
  str = String(str);

  if (options !== undefined && options.addition !== undefined) {
    if(typeof(options.addition)!=='string')
    addition=String(options.addition);
    else addition=options.addition;
}
if (options !== undefined && options.additionRepeatTimes !== undefined) {
  additionRepeatTimes = options.additionRepeatTimes;
}
if (options !== undefined && options.separator !== undefined) {
  separator = options.separator;
}

if (options !== undefined && options.additionSeparator !== undefined) {
  additionSeparator = options.additionSeparator;
}

if (options !== undefined && options.repeatTimes !== undefined) {
  repeatTimes = options.repeatTimes;
}

  for (let i = 0; i < repeatTimes; i++) {
    result.push(str); 
    for (let k = 0; k < additionRepeatTimes; k++) {
      result.push(addition);
       if (k < additionRepeatTimes - 1) 
        result.push(additionSeparator);
    }
    if (i < repeatTimes - 1) 
      result.push( separator);
    
  }
  return result.join('');
};
  