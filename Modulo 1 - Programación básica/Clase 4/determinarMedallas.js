/* • Desarrolle un algoritmo que, dada una posición en
una carrera se determine el tipo de medalla a
entregar.
• Tenga en cuenta que para el primer puesto se
entrega medalla de oro, segundo puesto medalla
de plata y tercer puesto medalla de bronce. En
caso que quede en otra posición se entrega
certificado de participación
*/
let readlineSync = require("readline-sync");
let posicionDeLlegada = readlineSync.questionInt("ingrese su posicion de llegada: ");

switch(posicionDeLlegada){
    case 1: console.log("Otorgar medalla de oro: ");
    break;
    case 2: console.log("Otorgar medalla de plata");
    break;
    case 3: console.log("Otorgar medalla de bronce: ");
    break;
    default: console.log("Otorgar certificado de participacion");
}
