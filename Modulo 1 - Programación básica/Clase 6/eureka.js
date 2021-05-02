/*• Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es la
palabra “eureka”
• Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos
directamente del programa*/

const readlineSync = require("readline-sync");
let clave
let palabraClave = "eureka";
i=0;
while ((clave != palabraClave) && (i<3)) {
 clave= readlineSync.question("ingrese clave: ");
    i++;
    
}
if(palabraClave !=clave){
console.log("Acceso denegado");
}
else{
    console.log("bienvenido");
}