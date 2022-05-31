//algoritmo 1

let cantidadDeSumas = +prompt("Ingrese la cantidad de sumas que desea realizar");
let primerNumero = +prompt("Ingrese el primer numero");
let resultado = 0;
for (let i = 1; i <= cantidadDeSumas; i++){
    let numeroIngresado = +prompt ("ingrese el proximo valor a sumar")
    if(resultado == 0){
        resultado = primerNumero + numeroIngresado;
        alert("El resultado es " + resultado);
    }
    else{
        resultado = resultado + numeroIngresado;
        alert("El resultado es " + resultado);
    }
}

//algoritmo 2


let primerIngreso = "";
let textoCompleto = "";
do{
    primerIngreso = prompt("ingrese una palabra");
    if (primerIngreso != "ESC") {
        textoCompleto = textoCompleto + " " + primerIngreso;
        alert("La oracion es: " + textoCompleto);
        alert("si desea finalizar la oracion, escriba ESC");
    }
    else {
        alert("aqui termina el programa");
    }
}
while(primerIngreso != "ESC");

// algoritmo 3

let repeticiones = +prompt("ingrese cuantas flexiones de brazo va a realizar");
let n = 1;
while(n <= repeticiones){
    alert(n + "!")
    n++;
}