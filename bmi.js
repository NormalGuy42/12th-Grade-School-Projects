//Enter height in cm and weight in kg
var username = 'Adja';
var height = 198;
var height_in_meters = height/100;
var weight = 70;
var stat = '';
console.log('Hello',username,'my program gives you your BMI and gives you indications')
var bmi = weight/(height_in_meters ** 2)
console.log('Your body mass index is',parseInt(bmi));

if(bmi < 18.5){
    stat = 'underweight';
    console.log(username,'you are',stat+'.','You are too thin for your height');
}
else if(18.5<bmi<24.9){
    stat = 'healthy weight';
    console.log(username,'you are',stat+'.','You are perfect for your height');
}
else if(24.9<bmi<29.9){
    stat = 'overweight';
    console.log(username,'you are',stat+'.','You are too heavy for your height');
}
else if(bmi>=30){
    stat = 'obese';
    console.log(username,'you are',stat+'.','You should lose some weight');
}