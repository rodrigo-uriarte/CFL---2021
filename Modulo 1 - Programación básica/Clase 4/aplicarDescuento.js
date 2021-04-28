/* •Desarrolle un algoritmo que diga el precio de
una compra
• La compra se compone del precio del producto
y la cantidad
•Si el cliente gasta más de $1000 debemos
aplicarle un descuento del 10%
*/
let readlineSync = require("readline-sync");
let precioProducto = readlineSync.questionInt("Ingrese precio de producto ");
let cantidad = readlineSync.questionInt("Ingrese cantidad de productos ");
let precioTotal=precioProducto*cantidad;
let descuento = precioTotal*0.1;
let precioFinal; 
console.log("El precio total es: "+ precioTotal);
if (precioTotal > 1000){
     precioFinal = precioTotal-descuento;
}else{
    console.log("El monto no es suficiente para adquirir descuentos");
}
console.log(" Precio Final con descuento incluido es: ", precioFinal);
