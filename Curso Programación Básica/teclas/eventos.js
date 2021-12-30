/*Colección de variables es igual a un bloque de código
Es muy parecido a escribir código en CSS o un tipo de dato para transmitir información entre sí llamado JSON
JSON = JavaScript Object Notation = Notación de Objetos de JavaScript
Así funciona la notación de objetos de Js que sirve para entender JSON
La excepción es que aquí SI toca poner ( ; )
Las variables se separan por ( , ) porque tecnicamente todo es una línea de código*/
var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};


document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;


dibujarlinea("red", x-1, y-1, x++, y++, papel);
function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 4;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujarTeclado(evento)
{
  var col = "red"
  var movimiento = 8;
  switch(evento.keyCode)
  {
    case teclas.UP:
    dibujarlinea(col, x, y, x, y-movimiento, papel);
    y -= movimiento;
    break;
    case teclas.DOWN:
    dibujarlinea(col, x, y, x, y+movimiento, papel);
    y += movimiento;
    break;
    case teclas.LEFT:
    dibujarlinea(col, x, y, x-movimiento, y, papel);
    x -= movimiento;
    break;
    case teclas.RIGHT:
    dibujarlinea(col, x, y, x+movimiento, y, papel);
    x += movimiento;
    break;
    default:
    console.log("Tecla erronea");
  }
}
