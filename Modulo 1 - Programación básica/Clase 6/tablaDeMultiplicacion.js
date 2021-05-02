/*• Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor*/


const readlineSync= require("readline-sync");
let numero = readlineSync.questionInt ("ingrese un numero: ");
let numero2 = readlineSync.questionInt ("Ingrese otro numero: ");
let i = 0 
let resultado
for (i ; i<=numero2;i++){
    let resultado = i * numero;
    console.log("la tabla de multiplicacion es: ", resultado);
} 
    
