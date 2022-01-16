// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación

var frutas = []; // Array Literal Syntax 

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"]; 
console.log(frutas); 
console.log(frutas.length); // length es una propiedad del array

// Acceder (por índice) a un elemento del Array
console.log(frutas[0]);   // Los arrays inician en "0" 


// === Metodos para mutar arrays ===


// .push();
frutas.push("Uvas"); // Esté metodo añadirá "Uvas" al final del array
console.log(frutas);

// .pop();
frutas.pop(); // Eliminará "Uvas" del final 
console.log(frutas);

// .unshift()
frutas.unshift("Uvas"); // Añade "Uvas" al inicio 
console.log(frutas);

// .shift()
frutas.shift("Manzana"); // Elimina "Manzana" del inicio
console.log(frutas);

// .indexOf();
frutas.indexOf("Platano"); // Te dará la posición de ese item en el array
console.log(frutas);