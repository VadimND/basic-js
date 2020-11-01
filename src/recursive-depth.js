const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) {
    let switcher = false;
    let level = 1;

    stop: for (let i = 0; i < arr.length && switcher == false; i++) {
      if (Array.isArray(arr[i])) {
        switcher = true;
        break stop;
      }
    }
    return switcher ? (level = this.calculateDepth(arr.flat(1)) + 1): level;
  }
}