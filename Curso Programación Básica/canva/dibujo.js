var texto = document.getElementById("texto_lineas");
var btn = document.getElementById("boton");
btn.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dimension");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }


function dibujoPorClick()
{
  lienzo.clearRect(0,0,300,300);
  var lineas = parseInt(texto.value);;
  var l = 0;
  var yi,xf;
  var colorcito = "white"
  var espacio = ancho/lineas;

  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l+1);
    dibujarlinea(colorcito, 0, yi, xf, 300);
    dibujarlinea(colorcito, yi, 0, 300, xf);
    dibujarlinea(colorcito, yi, 300, 300, 300-xf);
    dibujarlinea(colorcito, yi, 0, 0, 300-xf);
    console.log("linea" + l);
  }

  dibujarlinea(colorcito,1,1,1,ancho);
  dibujarlinea(colorcito,1,ancho-1,ancho-1,ancho-1);
  dibujarlinea(colorcito,ancho,1,1,1);
  dibujarlinea(colorcito,ancho-1,ancho-1,ancho-1,1);
}
