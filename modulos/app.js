
import { areaTriagulo,areaCirculo } from "./funciones.js";

const $inputRadio = document.getElementById('textRadio');
const $inputRta = document.getElementById('textRta');
const btn = document.getElementById("btn-calcular");


const $inputBase = document.querySelector("#baseTr");
const $inputAltura = document.querySelector("#alturaTr");
const $inputRtaTr = document.querySelector("#rta-tr");
const $btnCalcularArea = document.querySelector("#btn-calcularTr");



btn.addEventListener('click', () => {
  const areaCircle = areaCirculo($inputRadio.value);

  // pongo el valor en el input de rta
  $inputRta.value = areaCircle.toFixed(2);

  console.log($inputRta);
});


const calcularAreaTr = ()=>{
    const areaTrianguloRta = areaTriagulo($inputBase.value, $inputAltura.value);
    // pongo el valor en el input de resouesta
    $inputRtaTr.value = areaTrianguloRta;
    console.log($inputRtaTr);

}

// creo el evento para pasar la fn
$btnCalcularArea.addEventListener("click", calcularAreaTr);
