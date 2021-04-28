/* ingrese un numero y verifique que sea mayor que veinte*/

let readlineSync = require("readline-sync");
let numeroAIngresar =readlineSync.questionInt("ingrese un numero: ");
if (numeroAIngresar>20){
    console.log("elnumero ingresado es mayor a 20: " + numeroAIngresar);
}
else {
    console.log("el numero es menor o igual que 20: "+numeroAIngresar);
}