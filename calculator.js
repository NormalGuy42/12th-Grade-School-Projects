var a = 0;
var b = 0;
var result = 0;
var operator = 'x';
if(operator == '+'){
    result = a + b;
    console.log('The result of the addition of',a,'and',b,'is',result);
}
else if(operator == '-'){
    result = a - b;
    console.log('The result of the substraction of',a,'and',b,'is',result);
}
else if(operator == '*'){
    result = a * b;
    console.log('The result of the multiplication of',a,'and',b,'is',result);
}
if(b!=0){
    result = a / b;
    console.log('The result of the division of',a,'and',b,'is',result);
}
