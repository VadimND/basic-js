const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length();
  },
  addLink(value) {
    if (value !== undefined) {
      this.arr.push("( " + value + " )");
    }
    return this;
  },
  removeLink(position) {
    if (position > this.arr.length || position < 1) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const str = this.arr.join('~~');
    this.arr = [];
    return str;
  }
};

module.exports = chainMaker;