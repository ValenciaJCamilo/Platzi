/*
requiere es una opción que no existe por defecto en los navegadores
no existe en el FrontEnd pero sí en el Backend. Va y busca las librerías 
instaladas en el PC usando npm y las trae. 
*/
var express = require("express");

/*
Crearemos uns instancia de la librería express
*/
var aplicacion = express();

/*
Get es la URL.
*/
aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);


/*
Peticion: Lo que se pide
Response: Es el resultado de lo que se pide
*/
function inicio(peticion,resultado)
{
    resultado.send("Este es el <strong> home </strong>");
}

function cursos(peticion,resultado)
{
    resultado.send("Estos son los <strong> cursos</strong>");
}

/*
Ponerla a escuchar en el puerto.
Toca abrirlo con el servidor gracias a NodeJS
*/
aplicacion.listen(8989);