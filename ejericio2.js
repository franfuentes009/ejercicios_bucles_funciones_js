// Ejercicio 2
// 2.1
const jedi = { nombre: "Luke Skywalker", edad: 19 };
jedi.edad = 25;

// 2.2
const nombre = "Leia";
const apellido = "Organa";
const edad = 20;
console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

// 2.3
const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };
console.log("Precio total:", sable1.precio + sable2.precio);

// 2.4
let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000 };

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log("Nave1 precio final:", nave1.precioFinal);
console.log("Nave2 precio final:", nave2.precioFinal);