/* •Desarrolle un algoritmo que dados tres
números determine cuál es el mayor de los
tres*/

let readlineSync = require("readline-sync");
let numero1 =readlineSync.questionInt("Ingrese el numero 1: ");
let numero2 =readlineSync.questionInt("Ingrese el numero 2: ");
let numero3 = readlineSync.questionInt("ingrese el numero 3: ");
if(numero1>numero2 && numero1 > numero3){
    console.log ("el numero mayor es: ", numero1);
}else
if (numero2 > numero1 && numero2 >numero3){
    console.log("el numero mayor es: ", numero2);
}else
if (numero3 > numero1 && numero3 > numero2){
    console.log("el numero es: ", numero3);
}else
if (numero1==numero2 && numero1==numero3 && numero2==numero3){
    console.log("todos los numeros son iguales");
}