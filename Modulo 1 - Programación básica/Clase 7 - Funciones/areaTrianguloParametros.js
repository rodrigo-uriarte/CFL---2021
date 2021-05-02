/* • Realice un programa que devuelva el área del
triangulo usando los siguientes pares de base-altura:
• (1,2) (2,4) (3,6) (4,8) (5, 10) (6,12) (7,14)
• Implemente un método llamado calcularAreaTriangulo
que reciba dos números por parámetro (uno llamado
base y otro altura)*/


let area = calcularAreaDeTriangulo(1,2);
console.log("el area es: ", area);
area = calcularAreaDeTriangulo (2,4);
console.log("el area es: ", area);
area = calcularAreaDeTriangulo (3,6);
console.log("el area es: ", area);
area = calcularAreaDeTriangulo (4,8);
console.log("el area es: ", area);
area = calcularAreaDeTriangulo (5,10);
console.log("el area es: ", area);
area = calcularAreaDeTriangulo (6,12);
console.log("el area es: ", area);
area = calcularAreaDeTriangulo (7,14);
console.log("el area es: ", area);


function calcularAreaDeTriangulo ( b,a){
    let resultado = (b*a)/2;
    return resultado
}