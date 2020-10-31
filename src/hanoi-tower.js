const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let num, num2;

  num = Math.pow(2, disksNumber)  - 1;
  num2 = Math.floor((3600 / turnsSpeed * num));
  
  return {
    turns: +num,
    seconds: +num2 
   }
};
