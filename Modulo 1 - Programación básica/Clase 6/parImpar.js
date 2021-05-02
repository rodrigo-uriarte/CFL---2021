/*Realizar un algoritmo que dado un
número entero ingresado por el
usuario, visualice en pantalla si es
par o impar
• En el caso de ingresar un cero, se
debe volver a pedir el número por
teclado (hasta que se ingrese un
número mayor que cero) */

const readlineSync= require("readline-sync");
let numeroIngresado = readlineSync.questionInt ("ingrese un numero: ");
while (numeroIngresado == 0) {
    numeroIngresado = readlineSync.question ("ingrese otro numero");
}

if(numeroIngresado % 2 == 0){
    console.log("su numero es par");
}
else{
    console.log("su numero es impar ");
}