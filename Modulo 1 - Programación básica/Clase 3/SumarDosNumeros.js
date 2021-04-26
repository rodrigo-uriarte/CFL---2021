let readlineSync = require("readline-sync");
let primerNumero = readlineSync.questionInt("ingrese el primer numero:  "); 
console.log ("El primer numero es:", primerNumero);
let segundoNumero = readlineSync.questionInt("ingrese el segundo numeero:  ");
console.log ("El segundo numero es: ", segundoNumero);
let resultado = primerNumero + segundoNumero;
console.log("el resultado es: ", resultado);