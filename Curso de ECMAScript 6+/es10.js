// ===========CLASE #10: ¿QUÉ SE IMPLEMENTÓ EN ES10?===========
// ----------------MÉTOFO FLAT
// Creamos un arreglo
let array = [1,2,3, [1,2,3, [1,2,3]]];
// El método flat() crea una nueva matriz con todos los elementos del sub-array.
// flat recibe como arumento la profundidad (nivel)
console.log(array.flat(2))

// ----------------MÉTOFO FLAT MAP
// Cuando trabajamos con arreglos y lo queremos pasar a objetos
// Creamos el arreglo de arreglos
let entries = [["name", "Camilo"], ["age",20]];
// Nos devuelve un objeto construido con el arreglo.
console.log(Object.fromEntries(entries))

// ----------------OBJETO DE TIPO SÍMBOLO
// Permite acceder a una descripción
let mySymbol = "Pequeña descripción";
let symbol = Symbol(mySymbol);
console.log(symbol.description);