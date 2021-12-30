document.addEventListener("mousedown", pulsarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", moverMouse);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x;
var y;
var estadoClick; //Almacenará el estado del estadoClick
var colorcito = document.getElementById("selecionar_color");
var  botonAnchoAlto = document.getElementById("botonMedidas");
botonAnchoAlto.addEventListener("click", medidasCanvas);

function pulsarMouse(evento)
{
  estadoClick = 1;
  x = evento.layerX;
  y = evento.layerY;
}

function soltarMouse(evento)
{
  estadoClick = 0;
}

function moverMouse(evento)
{
  if (estadoClick == 1) //Solo dibuja si el click esta presionado
  {
    dibujarLinea(colorcito.value, x, y, evento.layerX, evento.layerY, papel);
  }
  else
  {
    x = evento.layerX;
    y = evento.layerY;
  }
}

function medidasCanvas()
{
  var anchoCanvas = document.getElementById("anchoHoja");
  var altoCanvas = document.getElementById("altoHoja");

  cuadrito.width = parseInt(anchoCanvas.value);
  cuadrito.height = parseInt(altoCanvas.value);

  var ancho = cuadrito.width;
  var alto = cuadrito.height;

}


function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}
