// ===========CLASE #9: ¿QUÉ SE IMPLEMENTÓ EN ES9?===========
const obj = {
    name: "Camilo",
    age: 20,
    country: 'CO'
};
let {name, ...all} = obj;
// Aquí se desestructura el objeto, se saca la llave (Key) que nos interesa,y para no escribir el resto se escribe ...all
console.log(all);


// ========Unir elementos a otros objetos
const obj = {
    name: "Camilo",
    age: 20,
};
const obj1 = {
    ...obj,
    country: 'CO',
};
console.log(obj1);


// ========Promise Finally
const helloWorld =() => {
    return new Promise( ( resolve, reject) => {
    (true)
        ? setTimeout (()=> resolve('Hello world'),3000)
        : reject (new Error('Test Error'))
    });
}

helloWorld()
    .then (response => console.log(response))
    .catch(error => console.log(error)) 
    // Nueva forma de llamar lo que terminó. Permite ejecutar bloque de código según sea el caso
    .finally(()=> console.log('finalizo'))


// ========REGEX
/*Esto es muy útil para trabajar con fechas. Las fechas tienen día,mes y año.
El [0-9] indica el rango de números, mientras que el ///{4} indica el máximo de números
El formato es AÑO-MES-DÍA. No puede tener espacio entre -*/
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
// Match para poder verificar
const match =regexData.exec('2022-02-21');
// Entender cómo está constituído cada elemento
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day);