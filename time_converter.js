//Turn hours into minutes by choosing min or s
var hours = 10;
var seconds = 'x';
var minutes = 'x';
var days = 'x';
var choice = 's'.toLowerCase();

if(choice == 'min'){
    minutes = hours * 60;
    console.log(hours,'hours in minutes is',minutes,'minutes');
}
else if(choice == 's'){
    seconds = hours*3600;
    console.log(hours,'hours in seconds is',seconds,'seconds');
}
else if(choice == 'd'){
    days = hours/24;
    console.log(hours,'hours in a day',days,'days');
}
else{
    console.log('Error!');
}
