/* • Desarrolle un algoritmo que permita loguearse (registrarse)
a un sistema, ingresando un nombre de usuario y la
contraseña adecuada.
• Considerar que tanto el usuario como la contraseña están
formados sólo por letras.
• El sistema deberá validar que el usuario y la contraseña
sean correctas, comparándolas con lo que es sistema tiene
registrado para ese usuario. Tenga en cuenta que el sistema
tiene registrado el usuario: Juan y la clave claveJuan
*/
let readlineSync = require("readline-sync");
let usuario = "juan";
let clave = "claveJuan";
let usuarioIngresado = readlineSync.question("ingrese su usuario ");
let claveIngresada =readlineSync.question("ingrese su clave ");
if (usuario == usuarioIngresado && clave == claveIngresada){
    console.log("Acceso permitido");
}else{
    console.log("Acceso denegado");
}if (usuario != usuarioIngresado && clave == claveIngresada){
    console.log("Su usuario es incorrecto");
}else{
    console.log("La clave es incorrecta");
}

