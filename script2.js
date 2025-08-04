// ambito de las variables 
 

let ciudad ="Popayan"
console.log(`Tengo la ciudad en el scope global ${ciudad}`);

function  imprimir (){
    ciudad = "Medelin"
    console.log(`Dentro de la  fn en otro Scope ${ciudad}`);
}

imprimir();