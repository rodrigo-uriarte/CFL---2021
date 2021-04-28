/* •Desarrolle un algoritmo que, de acuerdo a la
altura de una persona, decida si puede entrar a
un juego en un parque de diversiones
•Para poder subirse a la montaña rusa la
persona debe medir 1.30 mts. o más
*/
let readlineSync = require("readline-sync");
let alturaDeLaPersona = readlineSync.questionInt ("ingrese su altura: ");
if (alturaDeLaPersona>=130){
    console.log("puede ingresar al juego");
}else{
    console.log("no puede ingresar al juego");
}