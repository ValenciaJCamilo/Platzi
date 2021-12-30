// Acá esta el contexto de villaplatzi
var vp = document.getElementById('villaplatzi');
// Es el papel, el lienzo sobre el cual se dibujará
var papel = vp.getContext("2d");
// Coordenadas en X y en Y de donde iniciará el lobo
var xini = aleatorio(0,420);
var yini = aleatorio(0,420);

// La forma literal de separar elementos en JSON es por coma (,)
// Acá se encuentran los JSON para almacenar las URLS y los esyados de carga de cada imagen
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};
var pollo = {
  url: "pollo.png",
  cargaOK: false
};
var lobo = {
  url:"lobo.png",
  cargaOK: false,
  posX: xini,
  posY: yini
};
var fondo = {
  url: "tile.png",
  cargaOK:false
};

// Creamos un JSON con los keycodes de las teclas arrow
var teclas ={
  LEFT:37,
  UP:38,
  RIGHT:39,
  DOWN:40
}

// Variables que almacenan los randoms de cada animal
var cantidadc = aleatorio(1,8);
var cantidadp = aleatorio(3,6);
var cantidadv = aleatorio(1,4);

// Variables para mantener la posición de los animales una vez son cargados en el lienzo
var VacaX = new Array();
var VacaY = new Array();
var CerdoX = new Array();
var CerdoY = new Array();
var PolloX = new Array();
var PolloY = new Array();

// Creación de isntancia de imagen de los elementos. (Se trae la URL y el evento
// load para crear cada una de las funciones )
// Se crea el evento de carga. El objeto que tiene el evento 'carga' es 'fondo'
// Parámetro 1: Nombre del evento
// Parámetro 2: Nombre de la función

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load",cargarLobo);

document.addEventListener("keydown", moverLobo);


//Función para generar el aleatorio
function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random()*(max-min+1)) + min;
  return resultado;
  document.write(resultado);
}

// Función par mantener en la posición quieta a los animales
function mantenerPosicion()
{
  if(vaca.cargaOK)
  {
    for (var i=0; i<cantidadv; i++)
    {
      var x = aleatorio(0,7);
      var y = aleatorio(0,7);
      x = x*60;
      y = y*60;
      VacaX[i] = x;
      VacaY[i] = y;
    }
  }
  if(cerdo.cargaOK)
  {
    for (var i=0; i<cantidadc; i++)
    {
      var x = aleatorio(0,7);
      var y = aleatorio(0,7);
      x = x*60;
      y = y*60;
      CerdoX[i] = x;
      CerdoY[i] = y;
    }
  }
  if(pollo.cargaOK)
  {
    for (var i=0; i<cantidadp; i++)
    {
      var x = aleatorio(0,7);
      var y = aleatorio(0,7);
      x = x*60;
      y = y*60;
      PolloX[i] = x;
      PolloY[i] = y;
    }
  }
}

// Se define la función dibujar para que si la carga es OK entonces eso es TRUE
// por lo que podremos dibujar sobre el papel
function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0,0);
  }
// Aquí se crea un bucle para crear en este caso vacas en posiciones aleatorias
// gracias al uso de la función random
  if(vaca.cargaOK)
  {
    for(var i=0; i<cantidadv; i++){
      papel.drawImage(vaca.imagen, VacaX[i],VacaY[i]);
    }
  }

  if(cerdo.cargaOK)
  {
    for(var i=0; i<cantidadc; i++){
      papel.drawImage(cerdo.imagen, CerdoX[i],CerdoY[i]);
    }
  }

  if(pollo.cargaOK)
  {
      for(var i=0; i<cantidadp; i++){
        papel.drawImage(pollo.imagen, PolloX[i],PolloY[i]);
      }
  }
// Se crea la carga del lobo que almacenará la ultima posicion del lobo en X y en Y
  if(lobo.cargaOK)
    {
      papel.drawImage(lobo.imagen, lobo.posX, lobo.posY);
    }
  }


// Una vez están listas las imagenes
// se proceden a cargar dentro del lienzo
function cargarFondo()
{
  fondo.cargaOK=true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK=true;
  mantenerPosicion();
}

function cargarCerdos()
{
  cerdo.cargaOK=true;
  mantenerPosicion();
}

function cargarPollos()
{
  pollo.cargaOK=true;
  mantenerPosicion();
}

function cargarLobo()
{
  lobo.cargaOK=true;
  dibujar();
}



// Definimos la funcion mover lobo con el parámetro evento con el que mandamos a llamar a la funcion moverLobo
function moverLobo(evento)
{
  var velocidad = 5;
  switch(evento.keyCode){
    case teclas.LEFT:
    if(lobo.posX > 0){
      lobo.posX = lobo.posX - velocidad;
      dibujar();
      break;
    }
    case teclas.UP:
    if (lobo.posY > 0){
      lobo.posY = lobo.posY - velocidad;
      dibujar();
      break;
    }
    case teclas.RIGHT:
    if(lobo.posX < vp.width-80){
      lobo.posX = lobo.posX + velocidad;
      dibujar();
      break;
    }

    case teclas.DOWN:
    if(lobo.posY < vp.width-80){
      lobo.posY = lobo.posY+velocidad;
      dibujar();
      break;
    }
  }
}
