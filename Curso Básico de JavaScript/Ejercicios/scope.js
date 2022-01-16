//El alcance (scope) de una variable puede ser:
//1- Global:
var miNombre = "Camilo";

//2- Local:
function nombre(){
    var miApellido = "Valencia";
    console.log(miNombre + " " + miApellido);
}

nombre(); //Devuelve "Camilo Valencia"

/* En todo el código podemos utilizar la variable global.
Las variables locales sólo pueden ser accedidas 
dentro de la función en la que fueron declaradas. */