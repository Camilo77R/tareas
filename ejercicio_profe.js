const $div1 = document.querySelector(".sumaRs");
const $div2 = document.querySelector(".restaRs");
const $div3 = document.querySelector(".multpRs");
const $div4 = document.querySelector(".divRs");
const $div5 = document.querySelector(".potenciaRs");



const n1 = parseFloat(prompt("Ingrese un numero: "));
const n2 = parseFloat(prompt("Ingrese otro numero: "));

const suma = n1 + n2;
console.log(`La suma da como resultado: ${suma}`);

const resta = n1 - n2;
console.log(`La resta da como resultado: ${resta}`);

const multiplicacion = n1 * n2;
console.log(`La multiplicacion da como resultado: ${multiplicacion}`);

let divicion = Math.floor (n1 / n2);
console.log(`La division da como resultado: ${divicion}`);

let exponente = n1 ** n2;
console.log(`La da como resultado: ${exponente.toFixed(4)}`);


$div1.innerHTML = `La suma de ${n1} + ${n2} es ${suma}`
$div2.innerHTML = `la resta de ${n1} + ${n2} es ${resta}`
$div3.innerHTML = `La multiplicacion de ${n1} + ${n2} es es ${multiplicacion}`
$div4.innerHTML = `la division de ${n1} + ${n2} es ${divicion}`
$div5.innerHTML = `la potencia de ${n1} + ${n2} es ${exponente}`