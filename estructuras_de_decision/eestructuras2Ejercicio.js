//leer numero  decir si tiene 2 digitos  el numero tienoo  o no dos digitos 
let  prompt = require('prompt-sync')();
let numero = parseInt(prompt("Digite un numero "));

if((numero >= 10 && numero <= 99) || (numero <= -10 && numero > -100)){
    console.log(`El numero ${numero} tine 2 cifras`);
}else{
    console.log(`El numero ${numero} no tine 2 cifras`);

}