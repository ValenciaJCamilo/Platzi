// Definimos el Array
var estudiantes = [ 'Maria', 'Sergio', 'Rosa', 'Daniel' ]; 
// Función saludar
function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
// While
while (estudiantes.length > 0) {   // Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea
    var estudiante = estudiantes.shift();  // shift() es un método que saca un elemento del array de la posición 0 a la última, Pop() comienza de la última a la primera.
    saludarEstudiante(estudiante);
}
// ----RESULTADOS----
// Hola, María
// Hola, Sergio
// Hola, Rosa
// Hola, Danie