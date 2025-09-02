
 function saludar(nombre){// son declaradas por que inician con function y tienen un nombre(ademas de que pueden ser usadas antes de ser declaradas )
    return "hola " + nombre;
 }

const result =  saludar("Camilo");

console.log(result);



// funciones EXpresadas(anonimas) => son la que se guardan el resultado de una funcion(que no tiene nombre) 
const depesdir = function(nombre = "NN"){
    return "Adios, "+ nombre;
};


console.log(depesdir("Camilo"));
console.log(depesdir()); // toma el parametro por default


// ARROW FUNCTIONS EL return es implicito 
const multiplicar = (a,b)=> a *b; //Las arrow Function tienen RETURN IMPLICITO si no hay llaves
console.log(multiplicar(4,5)); 