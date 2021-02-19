const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!members)
  return false;
  else{
let result='';
let arr=[];
for(let i=0; i<members.length; i++){
  if(typeof(members[i])==='string'){
    let alphabet=members[i].trim().substring(0, 1);
    arr.push(alphabet.toUpperCase());
   }
}
arr.sort();
for(let i=0; i<arr.length; i++){
  result+=arr[i];
}
return result;
  }
};
