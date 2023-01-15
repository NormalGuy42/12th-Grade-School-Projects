function reverse(msg){
    console.log('Your original message was: ',msg)
    var msg_list = msg.split(''); //We first turn the message into a list or array using split
    
    var reverse_msg_list = msg_list.reverse(); //We use the reverse command To reverse the list
                                              
    var reverse_msg = reverse_msg_list.join(''); //We turn the reversed list into a string
    
    console.log(reverse_msg);
}

reverse('Python is the best programming language');