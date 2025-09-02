let frutas = ["Manzana", "banana", "pera"];
console.log(frutas[0]); // Manzana
console.log(frutas.length); // es 3 


// agragar un elemento

// forma1 
// frutas[3] = "uva";
// console.log(frutas[3]); //uva


// forma 2
frutas.push("fresa")//fresa
console.log(frutas[3]);


//borrar ultimo elemento 
frutas.pop() //elimina Fresa
console.log(frutas.length); 


// agregar al principio

frutas.unshift("Uva"); // Se pone en la primera posicion

//  Eliminar el primero
frutas.shift(); // elimina el primer elemento (Uva)



// recorro todos los elementos del array
frutas.forEach((fruta, index)=>{
    console.log(fruta, index);
});


// metodo map crea un nuevo array (no mofica el primero)
const frutaEIndex = frutas.map((fruta,i)=>{
    return `${i+1}: ${fruta}`;
    
} );

console.log(frutaEIndex);




// recorrer el array de forma clasica

for(let i= 0 ; i < frutas.length; i++){
    let element = frutas[i];
    console.log("Esta el valor del array en la posicion  "+ (i+1) +" valor ",element);
}


// recorrer con for of

for(fruta of frutas){
    console.log(fruta );
}

