//Convert meter into other values
var meter = 1090;
var num = 0;
var result = 0;
var choice = 'ce';

if(choice == 'milli'){
    num = 1000;
    result = meter*num;
    console.log(meter,'m in millimeter is',result,'mm');
}
else if(choice == 'centi'){
    num = 100;
    result = meter*num;
    console.log(meter,'m in centimeter is',result,'cm');
}
else if(choice == 'deci'){
    num = 10;
    result = meter*num;
    console.log(meter,'m in decimeter is',result,'dm');
}
else if(choice =='deca'){
    num = 10;
    result = meter/num;
    console.log(meter,'m in decameter is',result,'dam');
}
else if(choice == 'hecto'){
    num = 100;
    result = meter/num;
    console.log(meter,'m in hectometer is',result,'hm');

}
else if(choice == 'kilo'){
    num = 1000;
    result = meter/num;
    console.log(meter,'m in kiloometer is',result,'km');

}
else{
    var choices = ['kilo','hecto','deca','deci','centi','milli']
    console.log('Error! Pick one of the availabe choices to convert to',choices)
}
