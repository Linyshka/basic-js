const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date === undefined) return 'Unable to determine the time of year!';
  if(Object.prototype.toString.call(date) !== '[object Date]' || Object.getOwnPropertySymbols(date).length !== 0){
      throw new Error("Invalid date!");
  }
  let number = date.getMonth();
  if(number === 11 || number < 2) return "winter";
  else if(number >= 2 && number < 5) return "spring";
  else if(number >= 5 && number < 8) return "summer";
  else if(number >= 8 && number < 11) return "autumn";
} 

module.exports = {
  getSeason
};
