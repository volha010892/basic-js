const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
       let death=this.calculateDepth(arr[i]);
       if(death>=count)
       count=death+1;
      }
    }
    return count;
  }
};