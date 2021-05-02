/* •Desarrolle un algoritmo que dados tres
números determine cuál es el mayor de los
tres*/

let readlineSync = require("readline-sync");

let numero = 0;
let mayor = numero;

for (let index = 0; index < 3; index++) {
    numero = readlineSync.questionInt("ingrese un numero: ");
    if(numero > mayor) {
        mayor = numero;
    }
}
console.log("El mayor es", mayor);
