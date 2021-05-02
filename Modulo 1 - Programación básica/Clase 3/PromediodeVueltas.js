/* let readlineSync = require ("readline-Sync");
let vuelta1 = readlineSync.questionInt("ingrese tiempo de vuelta: ");
let vuelta2 = readlineSync.questionInt("ingrese tiempo de vuelta: ");
let vuelta3 = readlineSync.questionInt("ingrese tiempo de vuelta: ");
let vuelta4 = readlineSync.questionInt("ingrese tiempo de vuelta: ");
let tiempoTotal = vuelta1+vuelta2+vuelta3+vuelta4;
console.log ("resultado:  ", tiempoTotal);
let promedio = tiempoTotal/4;
console.log ("El promedio fue:  ", promedio);
 */

const readlineSync = require("readline-sync");
let suma = 0;
const cantidadVueltas = readlineSync.questionInt("ingrese la cantidad de vueltas");

for(let i = 1; i <= cantidadVueltas; i++) {
    let tiempoVuelta = readlineSync.questionFloat("Ingrese el tiempo de vuelta " + i);
    suma += tiempoVuelta;
}

const promedio = suma / cantidadVueltas;

console.log("el promedio es de ", promedio);