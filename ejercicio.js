 
 const $text = document.querySelector(".text");
 
 let n1 = parseFloat(prompt("Ingrese un numero    "));
 let n2 = parseFloat(prompt("Ingrese un numero    "));
 let operacion = prompt("Que tipo de operacin quieres realizar ");
 let result;
  function calculadora(numero1 ,numero2,tipOperacion){
    if(tipOperacion === "s"){
        return numero1 + numero2;
    }else if(tipOperacion === "m"){
        return numero1 * numero2;
    }else if (tipOperacion === "r"){
        return numero1 - numero2;
    }else if( tipOperacion === "d"){
        return numero1 / numero2;
    }else if(tipOperacion === "ex"){
        return numero1 ** numero2;
    }else{
        return "El valor es incorrecto";
    }
  }

// document.writeln(calculadora(n1,n2, operacion));
 result =  calculadora(n1,n2, operacion);

$text.innerHTML = `EL resultado es ${result}`;

//   console.log();
