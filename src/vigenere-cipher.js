const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool = true){
    if(bool){
      this.type = "direct";
    } else{
      this.type = "reverse";
    }
    this.charCodeA = "A".charCodeAt(0);
  }

  encrypt(message, key) {
    if(!message || !key){
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase().split("");
    key = key.repeat(Math.floor(message.length / key.length)) + key.slice(0, message.length % key.length);
    key = key.toUpperCase().split("").map(k => k.charCodeAt(0));
    let result = [];
    for(let i = 0, j = 0; i < message.length; i++){
      if(message[i] >= "A" && message[i] <= "Z"){
        let char = message[i].charCodeAt(0) + key[j] - this.charCodeA;
        if(char > 90){
          char = char - 91 + this.charCodeA;
        }
        result.push(String.fromCharCode(char));
        j++;
      }
      else{
        result.push(message[i]);
      }
    }

    return this.type === "direct" ? result.join("") : result.reverse().join("");
  }

  decrypt(message, key) {
    if(!message || !key){
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase().split("");
    key = key.repeat(Math.floor(message.length / key.length)) + key.slice(0, message.length % key.length);
    key = key.toUpperCase().split("").map(k => k.charCodeAt(0));
    let result = [];
    for(let i = 0, j = 0; i < message.length; i++){
      if(message[i] >= "A" && message[i] <= "Z"){
        let char = message[i].charCodeAt(0) - key[j] + this.charCodeA;
        if(char < 65){
          char = 91 - this.charCodeA + char;
        }
        result.push(String.fromCharCode(char));
        j++;
      }
      else{
        result.push(message[i]);
      }
    }

    return this.type === "direct" ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'))