// ===========CLASE #2: DEFAULT PARAMS Y CONCATENACIÓN===========
// ===========ANTES DE ES6===========
function newFunction(name,age,country){
    var name = name || 'Camilo';
    var age = age || 20;
    var country = country || 'Colombia';
    console.log(name,age,country);
}
// ===========DESPUÉS DE ES6===========
function newFunction2(name = 'Camilo',age = 20, country = "Colombia"){
    console.log(name,age,country);
}

// ===========PARA LLAMAR LA FUNCIÓN===========
// 1. Si no le paso los valores de los parámetros, tomará los que son por defecto
newFunction2();
// 2. Así sería si le pasara los que yo quisiera
newFunction2('Laura',18,'Colombia');

// ===========CONCATENACIÓN SIMPLE===========
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// ===========TEMPLATE LITERAL===========
// Se denominan comillas francesas ``
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);




// ===========CLASE #3: LET Y CONST, MULTILÍNEA, SPREAD OPERATOR Y DESESTRUCTURACIÓN===========
// ===========MULTILÍNEA===========
// 1. Usando "\n" y "+". No es la mejor manera
let lorem ="Hola, yo soy Camilo Valencia y me encuentro cursando Ingeniería de Sistemas. \n" + "Me gusta el desarrollo frontend";
console.log(lorem);
// 2. Usando nuevamente las comillas francesas y simplemente dando "Enter"
let lorem2 = `Hola, yo soy Camilo Valencia y me encuentro cursando Ingeniería de Sistemas.
Ahora así podemos hacer el salto de línea de una mejor manera`;
console.log(lorem2);

// ===========DESTRUCTURACIÓN===========
// Objeto con 3 elementos
let person = {
    'name1':'Camilo',
    'age': 32,
    'country': 'Colombia'
}
// 1. Antes de ECMAScript 
console.log(person.name1,person.age,person.country);
// 2. Después de ECMAScript
let {name1,age,country} = person;
console.log(name1,age,country);

// ===========SPREAD OPERATOR = OPERADOR DE PROPAGACIÓN===========
// Vamos a trabajar con Arrays
let team1 = ['Juan','Andrés','Camilo'];
let team2 = ['Laura','Rangel','Jhon'];
// Ahora, queremos tener un array que contenga al equipo 1 y 2 en uno solo. Para ello, usaremos "..." que nos permitirá traer un array completo
let education = ['David', ...team1,...team2];
console.log(education);

// ===========LET: ES MEJOR QUE VAR===========
// Disponible de forma global. Se puede reasignar.
{
    var global = "Global Var";
}
// Disponible en el scope (bloque). No se puede reasignar.
{
    let globalLet = "Global Let";
    // Desde acá si podemos hacer uso de let porque estamos dentro del bloque de código.
    console.log(globalLet);
}
// Podemos acceder a la variable con Var
console.log(global);
// NO podemos acceder a la variable let
console.log(globalLet);
// La variable const NO PUEDE CAMBIAR SU VALOR
const a = 'b';



// ===========CLASE #4: ARROW FUNCTIONS, PROMESAS Y PARÁMETROS EN OBJETOS===========
let name2 = 'Camilo';
let age = 20;
// Antes para crear objetos con estos elementos
obj = {name:  name2, age:age};
// Ahora con ECMAScript6
obj2 = {name2,age};
console.log(obj2);

// ===========ARROW FUNCTIONS===========
const names = [
    {name:"Camilo", edad:20},
    {name:"Laura",edad:18}
]
// Antes
// Iteerar por cada uno de estos antes. Se hace uso de .map con función anónima
let listOfNames = names.map(function(item){
    console.log(item.name);
});
// Ahora
// Forma #1
let listOfNames2 = names.map(item => console.log(item.name));
// Forma #2
const listOfNames3 = (name, age) =>{
}
// Forma #3
const listOfNames4 = name =>{
}
// No es necesario el return 
const square = num => num*num;

// ===========ASINCRONISMO===========
// Esto quiere decir que JS NO es sincrónico (ejecutar muchos elementos al mismo tiempo). Entonces para poder trabajar con asincronismo han implementado las promesas.
// Una promesa es que algo va a pasar, algo que nosotros establecemos.
const helloPromise = () => {
    return new Promise((resolve,reject)=> {
        if(true){
            resolve("Hey, se resolvió");
        }else{
            reject("Ups, no se resolvió");
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .then(()=> console.log("Hey"))
    .catch(error => console.log(error));



// ===========CLASE #5: CLASES, MÓDULOS Y GENERADORES===========
// ===========CLASES===========
//Clase que tiene un constructor que asigna dentro del scope global dos variables
class calculator{
    constructor(){
        // Variables dentro del scope
        this.valueA = 0;
        this.valueB = 0;
    }
    //Método para sumar
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,4)); 

// ===========MÓDULOS===========
//Import y export es trabajar con módulos
// Acá importo el módulo, lo que significa que  podemos tener funciones que hagan ciertas tareas en específico (como llamar una API) fuera de nuestro documento principal y simplemente importarlas.
import {hello} from './module-es6';
hello();

// ===========GENERADORES===========
// Generators es una función especial que retorna una serie de valores según el algoritmo definido
function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};
const generatorHello = helloWorld();
//Valor next permite ejecutar la lógica
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);