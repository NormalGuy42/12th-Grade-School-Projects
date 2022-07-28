var items = ['t-shirt','pants','hoodie'];
var prices = [5000,3000];
var currency = 'cfa';
var items_length = items.length;
var prices_length = prices.length;
var num = 0;
var total = 0;
var wallet =  50000;
if(items_length == prices_length){
    console.log('You have',wallet+currency);
    for(num = 0; num < items_length;num++){
        console.log('You spent',prices[num]+currency,'on',items[num]);
        total += prices[num];
    }
    if(wallet>total){ 
        console.log('Your total is',total+currency+'.','Your balance is',(wallet-total)+currency);
    }
    else{
        console.log('Your total',total+currency,'exceeds the money in your wallet',wallet+currency);
        console.log('You can not afford all these items')
    }
}
else if(items_length < prices_length){
    console.log('Error! Missing item, please enter all the items');
}
else{
    console.log('Error! Missing price, please enter all the prices')
}
