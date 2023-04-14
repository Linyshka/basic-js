const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = "";
  let additionString = "";
  let repeatTimes = options.repeatTimes || 1,
      additionRepeateTimes = options.additionRepeatTimes || 1,
      separator = options.separator || "+",
      additionSeparator = options.additionSeparator || "|",
      addition = options.addition;
  if(typeof str != "string") toString(str);
  if(typeof addition != "string") {
    addition = String(addition);
  }
  if(addition === "undefined"){
    addition = "";
  }
  for(let i = 1; i <= additionRepeateTimes; i++){
    additionString += addition;
    if(i + 1 <= additionRepeateTimes){
      additionString += additionSeparator;
    }
  }
  for(let i = 1; i <= repeatTimes; i++){
    result += str + additionString;
    if(i + 1 <= repeatTimes){
      result += separator;
    }
  }
  return result;
}

module.exports = {
  repeater
};
