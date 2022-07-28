//Enter heights in cm
//For gender you need to enter either m for male or f for female
var name = 'Saadiya';
var gender = 'f'.toLowerCase();
var mom_height = 160 ;
var dad_height = 190;
var height = 0;

console.log('Hi',name,'I will predict your adult height')
function GuessHeight(){
    if(gender == 'm'){
        var parents_height = mom_height + dad_height;
        height = (parents_height + 13)/2;
    }
    else if(gender == 'f'){
        var parents_height = mom_height + dad_height;
        height = (parents_height - 13)/2;
    }
    else{
        console.log('Error! You have not correctly entered gender (enter m or f)')
    }
}
GuessHeight();
console.log('You will grow up to be',height,'cm')