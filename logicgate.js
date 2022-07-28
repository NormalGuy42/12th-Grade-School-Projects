//Gates are AND, OR, NAND NOR
var a = 0;
var b = 1;
var gate = 'or'.toUpperCase();
console.log('This program is a logic gate simulator : enter one of the available choices AND, OR, NAND NOR ');
if(gate != 'AND'&& gate && gate != 'OR' && gate != 'NAND'&& gate != 'NOR'){
    console.log('ERROR! GATE NOT REGISTERED! PICK (AND, OR, NAND NOR)');
}
else{
    LogicGate();
}

function LogicGate(){
    if(gate == 'AND'){
        if(a==b){
            console.log('The result from entering',a,'and',b,'in an AND gate is',a);
        }
        else{
            console.log('The result from entering',a,'and',b,'in an AND gate is 0');
        }
    }
    else if(gate == 'OR'){
        if(a == 1 || b == 1){
            console.log('The result from entering',a,'and',b,'in an OR gate is 1');
        }
        else{
            console.log('The result from entering',a,'and',b,'in an OR gate is 0');
        }
    }
    else if(gate == 'NAND'){
        if(a==b){
            console.log('The result from entering',a,'and',b,'in an NAND gate is 0');
        }
        else{
            console.log('The result from entering',a,'and',b,'in an NAND gate is 1');
        }
    }
    else if(gate == 'NOR'){
        if(a == 1 || b == 1){
            console.log('The result from entering',a,'and',b,'in an NOR gate is 0');
        }
        else{
            console.log('The result from entering',a,'and',b,'in an NOR gate is 1');
        }
    }  
}