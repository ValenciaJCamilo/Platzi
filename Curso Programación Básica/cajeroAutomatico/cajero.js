
// CLASE BILLETE QUE TIENE 2 ATRIBUTOS: VALOR Y CANTIDAD
class Billete
{
    constructor (v,c)
    {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
}

//CARGA DE IMAGENES
var imagenes =[];
imagenes["100000"] = "100.jpg";
imagenes["50000"] = "50.jpg";
imagenes["20000"] = "20.jpg";
imagenes["10000"] = "10.jpg";
imagenes["5000"] = "5.jpg";

var caja = [];
// ASIGANCIÓN DE VALOR Y CANTIDAD DE BILLETES
caja.push(new Billete(100000, 2));
caja.push(new Billete(50000, 20));
caja.push(new Billete(20000, 5));
caja.push(new Billete(10000, 8));
caja.push(new Billete(5000, 8));

var entregado = [];
var cantidad = 0;
var dinero = 0;
var div = 0;
var papeles = 0;
var img;


// FUNCIÓN PARA ARROJAR EL RESULTADO
function entregarDinero()
{
    // Acá se trae el valor que se ingresa en la caja de texto
    var t = document.getElementById("dinero");
    // Se debe pasar el texto a número entero
    dinero = parseInt(t.value);


    /*Agarrar todos los elementos que se tienen en la caja
    e ir uno por uno y colocarlo en el bi*/
    for(var bi of caja)
    {
       if(dinero > 0)
       {
           div = Math.floor(dinero/bi.valor);
           if(div > bi.cantidad)
           {
               papeles = bi.cantidad;
           }
           else
           {
               papeles = div;
           }
        entregado.push(new Billete(bi.valor, papeles));
        dinero -= (bi.valor*papeles);
       }
    }
    if (dinero > 0 )
    {
        /*
        innerHTML NO es una función, es un atributo, por eso se pone el signo igual
        */
        resultado.innerHTML = "No soy capaz de retirar esa cantidad 🥲";
    }
    else
    {
        //Recorrer el array entregado y en cada ciclo se mostrará la cantidad de billetes correcta
        for (var e of entregado)
        {
            if(e.cantidad > 0)
            {
                resultado.innerHTML += e.cantidad + " billete(s) de $ " + e.valor + "</br>"  + "<img src=" + e.imagen.src + " /> <br/> <hr/>";

            }
            }
        }
    }


// FUNCIÓN PARA LIMPIAR LA PANTALLA
function limpiarPantalla()
{
    resultado.innerHTML = "";
    entregado = [];
}


// INTRERACCIÓN
var b = document.getElementById("extraer");
var resultado = document.getElementById("resultado");
var l = document.getElementById("limpiar");
// Aquí se da click al botón y se manda a la función entregarDinero
b.addEventListener("click", entregarDinero);
l.addEventListener("click", limpiarPantalla);


/*
Para crear objetos:
1. Crear el elemento con el document.createElement(p)
2. Para poder usarlo es con las funciones normales p.Text
*/