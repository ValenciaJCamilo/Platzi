// ===========CLASE #6: ¿QUÉ SE IMPLEMENTÓ EN ES7?===========
// Definimos un array
let numbers = [1,2,3,4,5,6];
// Se incluye el método includes, y en este caso en particular permite conocer si un atributo se encuentra dentro del array. Esto también se puede usar con strings
if(numbers.includes(4)){
    console.log("El valor 4 se incluye");
}else{
    console.log("El valor NO se incluye");
}

//¿Cómo elevar una potencia?
let base = 5;
let exponente = 2;
// El uso de ** se incluyó en esta versión de ES7
let result = base ** exponente;
console.log(result);