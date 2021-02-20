const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if((typeof(position)==='number')&&Number.isInteger(position)&&position>0){
      this.arr.splice(position - 1, 1);
      return this;
    }
    else { 
    this.arr = [];
    throw Error();
    }
  },
  reverseChain() {
    this.arr.reverse()
    return this;
  },
  finishChain() {
    let chain = this.arr.join('~~');
    this.arr.splice(0, this.arr.length);
    return chain;
  }
};

module.exports = chainMaker;
