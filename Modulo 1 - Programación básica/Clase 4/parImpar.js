/* •Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
•En el caso de ser 0 (cero) el algoritmo deberá
informarlo*/
let readlineSync = require("readline-sync");
let numeroIngresado = readlineSync.questionInt("ingrese un numero: ");
if (numeroIngresado == 0){
    console.log("el numero ingresado es 0");
} else
if (numeroIngresado % 2 == 0){
    console.log("Su numero es un numero par");
}else {
    console.log("El numero ingresado es impar");
}