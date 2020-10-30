const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {  
  let number = 0;
  let str;
  if(backyard.length === 0) {
    number = 0;
  }
  str = backyard.join(',').replace(/ \^\^/gi, '').replace(/\^ \^/gi, '').match(/\^\^/g);
  if (str !== null) {
    number = str.length;
  } else {
    number = 0;
  } 
  return number;
  //throw new CustomError('Not implemented');
};
