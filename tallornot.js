var tall = 180;
var short = 160;
var height_cm = 190;
if(height_cm <=short){
    var height_feet = height_cm/30
    console.log('Your height in feet is',height_feet);
    console.log('You are short')
}
else if(tall >height_cm >short){
    var height_feet = height_cm/30
    console.log('Your height in feet is',height_feet);
    console.log('You are average')
}
else if(height_cm >=tall){
    var height_feet = height_cm/30
    console.log('Your height in feet is',parseFloat(height_feet));
    console.log('You are tall')
}
else{
    console.log('Error')
}

