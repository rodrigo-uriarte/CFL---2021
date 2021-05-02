/* • Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27
*/

const readlineSync= require("readline-sync");
let numero1 = readlineSync.questionInt ("ingrese un numero: ");
let numero2 = readlineSync.questionInt ("ingrese un numero: ");
let suma;
actual = numero1;
suma=0;
while (actual <= numero2){
    suma = suma + actual;
    actual ++;
}
console.log ("el resultado es: ", suma);

