//----------------FUNCIONES PARA MOSTRAR LAS OPCIONES
function mostrarMedia()
{
    document.getElementById('mediana').style.display = 'none';
    document.getElementById('moda').style.display = 'none';
    document.getElementById('media').style.display = 'block';
}
function mostrarMediana()
{
    document.getElementById('media').style.display = 'none';
    document.getElementById('moda').style.display = 'none';
    document.getElementById('mediana').style.display = 'block';
}
function mostrarModa()
{
    document.getElementById('mediana').style.display = 'none';
    document.getElementById('media').style.display = 'none';
    document.getElementById('moda').style.display = 'block';
}



//-------------------------------------------------------SECCIÓN MEDIA
let listarUsuario = [];

function datosUsuario () {
    let valorNumeroDatos =  numeroDatos ();

    //trae los datos a js y los agrega a la lista
    for (let i = 1; i < (valorNumeroDatos + 1); i++){
        let id = 'campoMedia'+i;
        let dato = inputDatoUsuario = document.getElementById(id);
        let valueDato = parseInt(dato.value);

        let aggElemento = listarUsuario.push(valueDato);
    }
}


function calcularMediaAritmetica () {
    //Borrar datos del array 
    listarUsuario = [];

    datosUsuario ();

    const sumaLista = listarUsuario.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    //Recibe una función y lo que permite es sumar o cualquie operacion cada uno de los elementos del array

    const promedioLista = sumaLista / listarUsuario.length;
    let promLis=promedioLista.toFixed(2);

    const resultado = document.getElementById("resultado");
    resultado.innerText = "El promedio es: " + promLis;
}

function numeroDatos () {
    //Saber cuantos input son
    const inputNumeroDatos = document.getElementById("numDatosMedia");
    const value = parseInt(inputNumeroDatos.value);
    return value;
}

function aggInput () {
    //eliminar todos los elementos hijos del padre;
    var elemento = document.getElementById("aggInputs");
    while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
    };
    //quitar respuesta
    const resultado = document.getElementById("resultado");
    resultado.innerText = "";

    //colocar los imput
    let valorNumeroDatos =  numeroDatos ();

for(let i = 1; i < (valorNumeroDatos + 1); i++ ) {
        
        var direccion = '<label for="' + i + '"></label> <input id="campoMedia' + i + '"type="number" class="label-values"></input>';
        let input1 = document.getElementById("aggInputs");
        input1.insertAdjacentHTML('beforeend', direccion);
    }
    let button = document.getElementById("aggInputs");
    button.insertAdjacentHTML('beforeend', '<button type="button" class="button-calc" onclick="calcularMediaAritmetica()">Calcular </button>');
}






//-------------------------------------------------------SECCIÓN MEDIANA
let listarUsuario1 = [];

function datosUsuario1 () {
    let valorNumDatos1 =  numeroDatos1 ();

    //trae los datos a js y los agrega a la lista
    for (let x = 1; x < (valorNumDatos1 + 1); x++){
        let id1 = 'campoMediana'+x;
        let dato1 = u1 = document.getElementById(id1);
        let valueDato1 = parseInt(dato1.value);
        let aggElemento1 = listarUsuario1.push(valueDato1);
    }
}

function esPar(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana () {
    //Borrar datos del array 
    listarUsuario1 = [];

    datosUsuario1 ();

    const sumaLista1 = listarUsuario1.reduce(
        function(valorAcumulado1 = 0, nuevoElemento1){
            return valorAcumulado1 + nuevoElemento1;
        }
    )

    if(esPar(listarUsuario1.length)){
        const orden = listarUsuario1.sort(function(a,b)
        {
            return a-b
        });
        const num1 = orden[(orden.length/2)];
        const num2 = orden[(orden.length/2)-1];
        const ordenRes = (num1+num2)/2;
        const resultado1 = document.getElementById("resultadoMediana");
        resultado1.innerText = "La mediana es: " + ordenRes;
    }
    else
    {
        const orden = listarUsuario1.sort(function(a,b)
        {
            return a-b
        });
        const ordenRes = orden[(orden.length/2)-0.5];
        const resultado1 = document.getElementById("resultadoMediana");
        resultado1.innerText = "La mediana es: "+ordenRes;
    }
}


function numeroDatos1 () {
    //Saber cuantos input son
    const inputnumeroDatos1 = document.getElementById("numDatosMediana");
    const value1 = parseInt(inputnumeroDatos1.value);
    return value1;
}

function aggInput1 () {
    //eliminar todos los elementos hijos del padre;
    var elemento1 = document.getElementById("aggInputs1");
    while (elemento1.firstChild) {
    elemento1.removeChild(elemento1.firstChild);
    };
    //quitar respuesta
    const resultado1 = document.getElementById("resultadoMediana");
    resultado1.innerText = "";

    //colocar los input
    let valorNumDatos1 =  numeroDatos1 ();

for(let i = 1; i < (valorNumDatos1 + 1); i++ ) {
        
        var direccion1 = '<label for="' + i + '"></label> <input id="campoMediana' + i + '"type="number" class="label-values"></input>';
        let input2 = document.getElementById("aggInputs1");
        input2.insertAdjacentHTML('beforeend', direccion1);
    }
    let button1 = document.getElementById("aggInputs1");
    button1.insertAdjacentHTML('beforeend', '<button type="button" class="button-calc" onclick="calcularMediana()">Calcular</button>');
}



//-------------------------------------------------------SECCIÓN MODA
let listarUsuario2 = [];


function datosUsuario2 () {
    let valorNumDatos2 =  numeroDatos2 ();

    //trae los datos a js y los agrega a la lista
    for (let y = 1; y < (valorNumDatos2 + 1); y++){
        let id2 = 'campoModa'+y;
        let dato2 = u2 = document.getElementById(id2);
        let valueDato2 = parseInt(dato2.value);
        let aggElemento2 = listarUsuario2.push(valueDato2);
    }
}



function calcularModa(){
    //Borrar datos del array 
    listarUsuario2 = [];

    datosUsuario2 ();
    const listarUsuario2Count = {};  //Creamos un OBJETO que guadará las veces que se repite cada número

    /*.map me ayuda a recorrer todo el array*/
    listarUsuario2.map(
        function(elemento){
        // Si el elemento ya existe, aumentar el contador
            if(listarUsuario2Count[elemento]){
                listarUsuario2Count[elemento]+=1;
        //Si no existe el elemento todavía, lo marca que ya existe para la siguiente iteración contandolo como 1 inicialmente
            }else
            {
                listarUsuario2Count[elemento] = 1;
            }
        }
    )

    /*
    Esto me ayuda a convertir el objeto en Array
    "object.entries" es para crear un array de los elementos del objeto listarUsuario2Array y "sort" para ordenarlo de menor a mayor dependiendo de las veces que se repite cada elemento
    */
    const listarUsuario2Array = Object.entries(listarUsuario2Count).sort(
        //función anónima que recorre el array listarUsuario2Array
    function (valorAcumulado2, nuevoValor2){
        return valorAcumulado2[1]-nuevoValor2[1]; // El [1] se refiere a la segunda propiedad de cada elemento del objeto que es el que dice cuántas veces se repite el elemento
        /*
            que es lo mismo que :
            if(valorAcumulado2 > nuevoValor2    ) return 1; //número positivo
            if(valorAcumulado2 == nuevoValor2) return 0;
            if(valorAcumulad2 < nuevoValor2) return -1; //número negativo
        */
    });

    //La moda es el último elemento del array "listarUsuario2Array"
    const moda = listarUsuario2Array[listarUsuario2Array.length - 1];
    const resultado2 = document.getElementById("resultadoModa");
    function resModa()
    {
        let resultadoFinal= [];
        for (let [key, value] of listarUsuario2Array) {
            if (value == moda[1] && moda[1]>1){
                resultadoFinal.push(key);
            } 
        }
        if(resultadoFinal!=0){ 
            const resultado2 = document.getElementById("resultadoModa");
            resultado2.innerText = "La moda es: "+resultadoFinal;
        } else
        {
            resultado2.innerText="Ups, no existen datos repetidos"
        }
    }
    resModa();
}


function numeroDatos2 () {
    //Saber cuantos input son
    const inputNumeroDatos2 = document.getElementById("numDatosModa");
    const value2 = parseInt(inputNumeroDatos2.value);
    return value2;
}

function aggInput2 () {
    //eliminar todos los elementos hijos del padre;
    var elemento2 = document.getElementById("aggInputs2");
    while (elemento2.firstChild) {
    elemento2.removeChild(elemento2.firstChild);
    };
    //quitar respuesta
    const resultado2 = document.getElementById("resultadoModa");
    resultado2.innerText = "";

    //colocar los input
    let valorNumDatos2 =  numeroDatos2 ();

for(let i = 1; i < (valorNumDatos2 + 1); i++ ) {
        
        var direccion2 = '<label for="' + i + '"></label> <input id="campoModa' + i + '"type="number" class="label-values"></input>';
        let input3 = document.getElementById("aggInputs2");
        input3.insertAdjacentHTML('beforeend', direccion2);
    }
    let button2 = document.getElementById("aggInputs2");
    button2.insertAdjacentHTML('beforeend', '<button type="button" class="button-calc" onclick="calcularModa()">Calcular</button>');
}
