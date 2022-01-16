/* 
Variable: Es una representación de algún lugar en la memoria para guardar datos
 */

var nombre = "Camilo"; // Nombre apuntará en algún lugar en la memoria (nosotros no sabemos donde, pero eso no es importante), pero dirá la señal de = tomará ese string y lo guardará en ese lugar.  y después si queremos utilizar ese valor, utilizaremos la variable nombre para pedir que nos traigan ese string de memoria.
var edad; // Declarar
edad = 30; // Inicializar 

var elementos = ['Computador', 'Celular']; // Aquí la variable seleccionará toda una sección para los elementos del array, y después tendremos acceso a toda la sección destinada en memoria.

var persona = {   // Variable de tipo objeto
    nombre: "Camilo",
    edad: 30
}

console.log(elementos[2]); // Consola es de igual forma una variable que le pertenece al navegador, con cierto espacio en memoria, y con un tipo de comportamiento especial. Donde Log es un método de la función. En este caso el resultado será "undefinded" porque no hay ningún elementos en la posición 2 (solo están en la posición 0[Computador] y 1[Celular])