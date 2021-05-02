/* • Realice un programa que devuelva el área del
triangulo usando los siguientes pares de base-altura:
• (1,2) (2,4) (3,6) (4,8) (5, 10) (6,12) (7,14)
• Implemente un método llamado calcularAreaTriangulo
que reciba dos números por parámetro (uno llamado
base y otro altura)*/

let readlineSync = require ("readline-sync");
let base = readlineSync.questionInt ("ingrese la base: ");
let altura = readlineSync.questionInt("ingrese la altura: ");
let area = calcularAreaDeTriangulo (base , altura);
console.log("El area del triagulo es: ", area);

function calcularAreaDeTriangulo (b , a){
    let resultado = (b * a) / 2;
    return resultado;
}