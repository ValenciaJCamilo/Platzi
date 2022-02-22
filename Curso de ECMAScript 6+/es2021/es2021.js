// ===========CLASE #13: ECMASCRIPT 2021===========
// 🧯 Replace
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString); // Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2); // Output: Python es maravilloso, con Python puedo crear el futuro de la web.



// 🔒 Metodos privados
// Creamos una clase
class Message {
    //Método show
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
};
// Instancia de la clase
const message = new Message();
message.show('Hola!');



//  👽 Promise Any
// Devuelve el primero que se resuelva
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));
Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));



//  🦴 WeakRef(element);
class anyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
}



// 🧪 Nuevos operadores lógicos
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);