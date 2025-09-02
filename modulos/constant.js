// Export normal
// export const magicNumber = 42;

// export let number = 42;                  // Se añade la variable number al módulo
// export const hello = () => "Hello!";     // Se añade la función hello al módulo
// export class CodeBlock { };              // Se añade la clase vacía CodeBlock al módulo



// export al final => primero declaro y luego exporto Como en node
let number = 42;
const hello = () => "Hello!";
const goodbye = () => "¡Adiós!";
class CodeBlock { };

export {number};
export{hello, goodbye as bye};
export{hello as greet}


// default es el nombre de la variable
// el export default es el principal export del documento , solo puede haber uno , es lo que busco en el documento que traigo
export default  "La pagina del sena no fuciona";


// traigo la clase (import)
import Persona from "./Persona.js";
console.log(Persona);
const persona1 = new Persona("Juan", "Martinez", 32);
console.log(persona1);
console.log(persona1.info());