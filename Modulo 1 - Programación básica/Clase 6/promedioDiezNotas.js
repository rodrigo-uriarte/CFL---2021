/*CALCULAR EL PROMEDIO DE DIEZ NOTAS*/

let readlineSync = require("readline-sync");
let nota, suma, promedio, contador;
contador = 1;
suma = 0;
while (contador<=10){
    nota = readlineSync.questionInt("ingrese la nota: ");
    suma = suma + nota;
    contador ++;
}
promedio = suma / 10;
console.log("su promedio es: ", promedio);
