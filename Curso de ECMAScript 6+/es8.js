// ===========CLASE #7: ¿QUÉ SE IMPLEMENTÓ EN ES8?===========
// En esta clase vimos las algunas implementaciones de ES8, como Object Entries, Object Values, Padding y Trailing-Comas.


// ---------------------OBJECT ENTRIES-------------------- 
// Devuelve los valores de una matriz.
const data ={
    front:'Camilo',
    back: 'Jhoan',
    design: 'Laura'
};
// Tranformar este objeto en una matriz. 
const entries =Object.entries(data);
console.log(entries);
// Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length);


// ---------------------OBJECT EVALUES-------------------- 
// Devuelve los valores de un objeto a un arreglo. 
const data= {
    front:'Camilo',
    back: 'Jhoan',
    design: 'Laura'
}
// Object debe ir la O en mayúscula
const values = Object.values(data);
console.log(values);
console.log(values.length);


// ---------------------PADDING-------------------- 
// Nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal. Podría servir del lado del front , para mostrar una estructura de elementos.
const string ='Hello';
console.log(string.padStart(7,'hi')) // Se añade al inicio la palabra 'hi'
console.log(string.padEnd(8,'bye')) // Se añade al final la palabra 'bye'


// ---------------------TRAILING COMAS-------------------- 
// Nos permite asignar elementos al objeto mediante comas.
// Podemos dejar al final con coma o sin coma, esto no generará error
const obj= {
    front:'Camilo',
    back: 'Jhoan',
    design: 'Laura',
}




// ===========CLASE #8: ASYNC Y AWAIT===========
// ASYNC: Sirve para "marcar" una función como asíncrona y su valor de retorno es una promesa
/*AWAIT: Solo es aplicable a las funciones marcadas con **async**.
Pone en espera la ejecución de la función mientras la promesa la resuelve, abriendo paso a la ejecución de otras funciones*/
const helloWorld = () =>{
    return new Promise((resolve,reject) =>{
        (true)
        ? setTimeout(() => resolve('Hola'),3000)
        : reject(new Error("Error"))
    })
};

// Función que implementará ASYNC
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch (error){
        console.log(error);
    }
};

anotherFunction();