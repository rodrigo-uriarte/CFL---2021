let readlineSync = require ("readline-Sync");
let vuelta1 = readlineSync.questionInt("ingrese tiempo de vuelta: ");
let vuelta2 = readlineSync.questionInt("ingrese tiempo de vuelta: ");
let vuelta3 = readlineSync.questionInt("ingrese tiempo de vuelta: ");
let vuelta4 = readlineSync.questionInt("ingrese tiempo de vuelta: ");
let tiempoTotal = vuelta1+vuelta2+vuelta3+vuelta4;
console.log ("resultado:  ", tiempoTotal);
let promedio = tiempoTotal/4;
console.log ("El promedio fue:  ", promedio);