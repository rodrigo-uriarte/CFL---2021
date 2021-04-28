/* •Una tienda al cumplir años en Octubre ofrece
un descuento del 15% a sus clientes en todas
sus compras
•Desarrolle un algoritmo que dada una compra:
precio unitario, cantidad y el mes, indicados
por el usuario, determine si el cliente tiene
descuento o no*/
let readlineSync = require("readline-sync");
let precioUnitario = readlineSync.questionInt ("ingrese precio unitario: ");
let cantidad = readlineSync.questionInt ("cantidad de articulos: ");
let mes = readlineSync.question("mes de la compra: ");
let montoTotal = precioUnitario*cantidad;
let descuento = (montoTotal *15)/100
let precioFinal = montoTotal - descuento ;

if (mes == "octubre"){
    console.log ("Precio final del producto con descuento:", precioFinal);

}else{   
console.log ("No tiene descuento");
}