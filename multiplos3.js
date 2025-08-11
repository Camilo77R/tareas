// motrar en pantalla los multiplos de 3 entre 2 numeros ingresados por teclado

let prompt = require('prompt-sync')();

let numero1 = parseInt(prompt("Ingrese un numero inferior"));
let numero2 = parseInt(prompt("Ingrese un numero superior"));

let mayor = 0;
let menor = 0;
if(numero1 > numero2){
    mayor = numero1;
    menor = numero2;
}else{
    mayor = numero2;
    menor = numero1;
}


for(menor ; menor <= mayor ; menor++){
    let multiplos = menor /3 ?   menor : mayor;


}