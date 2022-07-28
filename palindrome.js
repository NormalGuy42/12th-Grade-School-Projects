function isPalindrome(msg){
    var msg = 'kayak';
    var msg_arr = msg.split('');
    var reverse_msg_arr = msg_arr.reverse();
    var reverse_msg = reverse_msg_arr.join('');
    if(msg_arr == reverse_msg_arr)
    console.log(msg,reverse_msg,'This word is a palindrome');
}

function WhatsTheTip(){
    const amount = 100;
    const percentage = 19;
    const tip = amount*(percentage/100);
    const total = amount + tip;
    const currency = '£';
    console.log('You will tip',tip + currency,'and your total will be:',total + currency);
}
