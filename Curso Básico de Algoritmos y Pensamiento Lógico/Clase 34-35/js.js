// Se define la función
// Se recibe el parámetro numbers, el array de los números
function secondLargestNumber(numbers){
// Partir desde la primera posición del array de nuestros números
  let first = numbers[0];
// Almacena el segundo valor que será sobre el cual empezaremos a trabajar
  let second = 0;
// Lógica de la búsqueda del array de nuestro segundo número más grande
// Ciclo for que recorra cada posición del array
  for(i=0;i<numbers.length;i++){
    if(numbers[i]>first){
      second = first;
      first = numbers[i];
    }
    if(numbers[i]>second && numbers[i]<first){
      second = numbers[i];
      }
    }
    return second
}
let nums = [8,4,4,3,1,7,11]
console.log(secondLargestNumber(nums));
