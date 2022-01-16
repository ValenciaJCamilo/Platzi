/* // Declarativas
function miFuncion(){
    return 3;
}
miFuncion();

// Expresión o anónimas
var miFuncion = function(a,b){
    return a+b;
}
miFuncion(a,b)
 */

// Función para saludar alumnos
function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("Camilo");

// Función para sumar números
function sumar(a,b){
    var resultado=a+b;
    return resultado;
}
sumar(4,5);