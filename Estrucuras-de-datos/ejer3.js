let auto  ={
    marca : "Toyota",
    modelo : "Corolla",
    encender :  function(){
        return `el Auto ${this.marca} esta encendido`;
    },
    rrecorrido : function(){
        return `El Auto ${this.marca} esta avanzandoooooo!`
    },
    apagar : function(){
        return `El Auto ${this.marca}  se ha apagado`
    }

}


console.log(auto.encender());
console.log(auto.rrecorrido());
console.log(auto.apagar());




// cuenta 

const cuenta = {
    titular : "Ana",
    saldo : 15000,
    mostrarSaldo : function(){
        return `El saldo del titula ${this.titular} es $${this.saldo} pesos`;
    },

};

console.log(cuenta["mostrarSaldo"]());




