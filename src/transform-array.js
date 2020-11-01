const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Not array');
  }
  if (arr.length === 0) {
   return [];
  }
  let transformed = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == '-') {
      if (arr[i] === '--discard-prev' && i > 0) {
        transformed.pop();
      }
      if (arr[i] === '--double-prev' && i > 0) {
        transformed.push(arr[i-1]);
      }
      if (arr[i] === '--double-next' && i < arr.length - 1) {
        transformed.push(arr[i+1]);
      }
      if (arr[i] == '--discard-next' && i < arr.length - 1){
        arr[i+2] == '--double-prev' || arr[i+2] == '--discard-prev' ? (i += 2) : i ++;
      } 
    } else {
      transformed.push(arr[i]);
    }
  }
  return transformed;
};
