const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
}
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = [];
    let cypher='';
    for (var i = 0, j = 0;  i <  message.length;  i++) {
      if(message[i].length === 1 && message[i].match(/[A-Z]/i)){
      result=((message[i].charCodeAt() - 65) + (key[j%key.length].charCodeAt() - 65)) % 26;
      cypher += String.fromCharCode(result+65);
      j++;
      }     
      else cypher+=message[i];
  }
  console.log(typeof(cypher))
  if (this.mode) {
    return cypher;
  }
  else {
    return cypher.split('').reverse().join('');
  }
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error();
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let result = [];
    let cypher='';
    for (var i = 0, j = 0;  i <  encryptedMessage.length;  i++) {
      if(encryptedMessage[i].length === 1 && encryptedMessage[i].match(/[A-Z]/i)){
      result=((encryptedMessage[i].charCodeAt()+65)- (key[j%key.length].charCodeAt()-65))%26 ;
      cypher += String.fromCharCode(result+65);
      j++;
      }     
      else cypher+=encryptedMessage[i];
  }
  if (this.mode) {
    return cypher;
  }
  else {
    return cypher.split('').reverse().join('');
  }
  }
  
}

module.exports = VigenereCipheringMachine;
