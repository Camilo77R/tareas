export default class Persona{
    
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
       
    }

    info(){
        return  `Nombre ${this.nombre} , apellido : ${this.apellido} y tiene ${this.edad} años. `;
    }xx
}