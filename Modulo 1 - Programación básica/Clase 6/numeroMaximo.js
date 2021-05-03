/*         Encontrar el Número Máximo

• Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo
*/

let readlinesync = require("readline-sync");
let valor = readlinesync.questionInt("Introduzca un valor: ");
let max = 0 , min = 0 ;

while (valor != 0) {
    valor = readlinesync.questionInt(" introduzca un valor: ");
    if (valor > max) {
       max = valor;
     }
     else if ( valor < 0){
        min = valor;
    }
}   
console.log("el numero maximo fue: ", max);
console.log("el numero minimo fue: ", min);



