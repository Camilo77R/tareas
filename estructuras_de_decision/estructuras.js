let prompt = require('prompt-sync')();

let nota = parseFloat(prompt("Digite la nota obtenida en el examen  "));

if(nota >4.5){
     console.log("exelente  ");
}else if(nota >= 4 && nota <= 4.49){
    console.log("Muy bueno  ");
}else if(nota >= 3.5 && nota <= 3.9){
    console.log("Bueno");
}else if(nota >= 2 && nota <= 3.4){
    console.log("Regular");
}else{
    console.log("Deficiente");
}