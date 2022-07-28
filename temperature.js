//Enter K or F in choice to convert celcius to
var celsius_temp = 0;
var fahrenheit_temp = 'x' ;
var kelvin_temp = 'x';
var choice = 'K'.toLowerCase();
if(choice == 'k'){
    console.log('You have picked K which means you\'re converting from Kelvin to celsius');
    kelvin_temp = celsius_temp + 273.15
    console.log(celsius_temp,'degrees in kelvin is',parseInt(kelvin_temp),'degrees');
}
else if(choice == 'f'){
    console.log('You have picked K which means you\'re converting from Kelvin to celsius');
    fahrenheit_temp = (celsius_temp*1.8)+32;
    console.log(celsius_temp,'degrees in fahrenheit is',parseInt(fahrenheit_temp),'degrees'); 
}
if(celsius_temp<-273.15){
    console.log('Error, the lowest possible temperature in celsius is -273.15')
}