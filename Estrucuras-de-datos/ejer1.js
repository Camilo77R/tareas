const persona = {
    nombre : "carlos",
    edad : 30,
    profesion : "ingeniero"
};

console.log(persona.nombre);//accedo con notacion de punto a la propiedad
console.log(persona["edad"]); //accedo con notacion de llaves a la propiedad

console.log(typeof persona); // tipo object


// agrego propiedad
persona.email = "carlos@gmail.com"
console.log(` nueva propiedad : ${persona.email}`);


// ver todas las claves

console.log(`claves del objeto persona : ${Object.keys(persona)}`);
// ver todos los values
console.log(`values de objeto persona : ${Object.values(persona)}`);


// modificar propiedad 
persona.edad = 33;
console.log(`Persona nueva edad : ${persona.edad}`);


// borrar propiedad
console.log(`Se borro la propiedad profesion ${delete persona.profesion 
}`);
