
function isPrime(num){
    if(num<=3){
        if(num>1){
            return console.log(num,'is prime');
        }
        else{
            return console.log(num,'is not prime');
        }
    }
    else if(num%2==0){
        return console.log(num,'is not prime');
        
    }
    else if(num%3==0){
        return console.log(num,'is not prime');
    }
    var i = 5;
    while(num>=i**2){
        if(num % i==0){
            return console.log(num,'is not prime');
        }
        else if(num %(i+2) ==0){
            return console.log(num,'is not prime');
        }
        i += 6
        console.log(i);
    }
    return console.log(num,'is prime')
}
isPrime(17);