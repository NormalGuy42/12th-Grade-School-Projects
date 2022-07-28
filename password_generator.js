var password = '';
var password_length = 9;

const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~`|}{[]:;?><,./-="
}
const getKey = [
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
]
var iter_num = 0;
if(password_length>0){
    while(iter_num<=password_length){
        let AddKey = getKey[Math.floor(Math.random() * getKey.length)];
        password += AddKey();
        iter_num +=1
    }
    console.log('Generated Password:',password)
}
else if(password_length == 0){
    console.log('Error! Password length too small');
}
