// ===========CLASE #11: ECMASCRIPT 2020===========
/*Dynamic import ( importación dinámica)
    - Permite llamar nuestro código cuando lo necesitemos.
    - El archivo no se va a cargar de manera automatica.
    - Con esto podremos dividir nuestro codigo y evitar que la app sea muy grande.
    - Por todo lo anterior, mejora el performance. */
    const button = document.getElementById("btn");
    button.addEventListener("click", async function(){
        const module = await import("./file.js");
        module.hello();
    });



// ===========CLASE #12: ECMASCRIPT 2020 - CARACTERÍSTICAS===========
// 🔢 Big INT: permite trabajar con numeros mayores a 2^53
// 1- Añadiendo una "n" al final activas el big int en el valor
const aBigNumber = 9007199254740991n;
// 2- Con el método BigInt activas el valor
const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber);
console.log(anotherBigNumber);


// 🤝 Promise All Settled
const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


// 🌎 Global This
console.log(window);
console.log(globalThis);
// 🔍 Nuevo operador lógico: null operator
const fooo = null ?? 'default string';
console.log(fooo);
const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)


// ⛓ Optional chaining
const user = {};
console.log(user?.profile?.email)
if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}