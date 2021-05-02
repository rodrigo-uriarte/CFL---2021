/*Cuando llegamos a la parada,
miramos si el colectivo arribó a
la parada
o Siempre tenemos que esperar
antes de que llegue*/

const readlineSync = require("readline-sync");

console.log("esperando el colectivo");

let respuesta = readlineSync.question("llego el colectivo? Y/N");

while (respuesta !== "Y") {
    console.log("esperando el colectivo");
    respuesta = readlineSync.question("llego el colectivo? Y/N");
}

console.log("llego el colectivo");