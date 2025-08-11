const prompt = require('prompt-sync')();

function menu() {
    let opt = 0;
    do {
        console.log("BIENVENIDO AL MENU DE EJERCICIOS");
        console.log("1. Area del circulo");
        console.log("2. Adivinar el numero");
        console.log("3. Salir");
        opt = parseInt(prompt("Seleccione opción: "));

        switch (opt) {
            case 1:
                areaDeCirculo();
                break;
            case 2:
                adivinarNumero();
                break;
            case 3:
                console.log("Saliendo...");
                break;
            default:
                console.log("Opción incorrecta!");
        }
    } while (opt != 3);
}

function areaDeCirculo() {
    const radio = parseFloat(prompt("Ingrese el radio del circulo: "));
    const areaCirculo = Math.PI * (radio * radio);
    console.log(`El área del circulo es ${areaCirculo.toFixed(2)}`);
}

function adivinarNumero() {
    const numeroRd = Math.floor(Math.random() * 100) + 1;
    let numeroIntentos = 5;
    console.log("(Pista) Número generado:", numeroRd); 

    for (let i = 0; i < numeroIntentos; i++) {
        const response = parseInt(prompt("Digite un número entre 1 y 100: "));

        if (response === numeroRd) {
            console.log("¡Ganaste!");
            return; // salir de la función
        } else if (response > numeroRd) {
            console.log(`El número oculto es menor que ${response}`);
        } else {
            console.log(`El número oculto es mayor que ${response}`);












































































            
        }
        console.log(`Quedan ${numeroIntentos - i - 1} intentos`);
    }
    console.log("Se acabaron los intentos. El número era:", numeroRd);
}


menu();


