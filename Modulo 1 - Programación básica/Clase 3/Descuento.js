let readlineSync = require ("readline-Sync");
let precioProducto = 450.5;
let porcentajeDeDescuento = precioProducto * 0.1;
let precioFinal = precioProducto-porcentajeDeDescuento;
console.log (" PRECIO FINAL: ", precioFinal);
