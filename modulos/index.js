// import { magicNumber }from "./constant";

// console.log(magicNumber);

// export normal
// import { number, hello as fnSaludar, CodeBlock, hello } from "./constant.js";
// console.log(fnSaludar());


// export al final
let name = "Camilo";

import {number} from "./constant.js";
console.log(number);

import {bye, greet} from "./constant.js";
console.log(greet() + " " + name);
console.log(bye() + " " + name);

// import default, le doy nombre al importar(traer)
// el export default es el principal export del documento , solo puede haber uno , es lo que busco en el documento que traigo
import  mensaje from './constant.js';

console.log(mensaje);