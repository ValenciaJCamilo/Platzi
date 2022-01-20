//----------------FUNCIONES PARA MOSTRAR LAS FIGURAS GEOMÉTRICAS
function mostrarCuadrado()
{
    document.getElementById('triangulo').style.display = 'none';
    document.getElementById('circulo').style.display = 'none';
    document.getElementById('cuadrado').style.display = 'block';
}
function mostrarTriangulo()
{
    document.getElementById('circulo').style.display = 'none';
    document.getElementById('cuadrado').style.display = 'none';
    document.getElementById('triangulo').style.display = 'block';
}
function mostrarCirculo()
{
    document.getElementById('cuadrado').style.display = 'none';
    document.getElementById('triangulo').style.display = 'none';
    document.getElementById('circulo').style.display = 'block';
}

//----------------OBTENEMOS EL ID DE LOS BOTONES
const btnCuaPer = document.getElementById('CuaPer');
const btnCuaAr = document.getElementById('CuaAr');
const btnTriaPer = document.getElementById('TriaPer');
const btnTriaAr = document.getElementById('TriaAr');
const btnCirPer = document.getElementById('CirPer');
const btnCirAr = document.getElementById('CirAr');

//---------------FORMULAS PARA EL CUADRAD0
function perimetroCuadrado(ladoCua) {
    return ladoCua * 4;
  }
  
  function areaCuadrado(ladoCua) {
    return ladoCua * ladoCua;
  }

const resCua = document.getElementById('resultado-cuadrado');

//----------------INTERACTIVIDAD CON HTML - CUADRADO
btnCuaPer.addEventListener('click', function resPerimetroCuadrado() {
    const ladoCua = document.getElementById('InputCuadrado')
    let data = perimetroCuadrado(parseFloat(ladoCua.value))
    if (data>0)
    {
        resCua.innerHTML = `P = ${data.toFixed(2)} cm`  
    }
    else
    {
        resCua.innerHTML = `Por favor, ingresa un número`;
    }
})

btnCuaAr.addEventListener('click', function reAreaCuadrado() {
    const ladoCua = document.getElementById('InputCuadrado')
    let data = areaCuadrado(parseFloat(ladoCua.value))
    if (data>0)
    {
        resCua.innerHTML = `A = ${data.toFixed(2)} cm^2`  
    }
    else
    {
        resCua.innerHTML = `Por favor, ingresa un número`;
    }
})


//---------------FORMULAS PARA EL TRIANGULO EQUILATERO
function perimetroTriangulo(ladoTria) {
    return ladoTria*3;
  }
  
  function areaTriangulo(ladoTria) {
    let area=(Math.sqrt(3)/4)*ladoTria**2;
    /*let dataTr=area.toFixed(2);*/
    return area;
  }
  const resTria = document.getElementById('resultado-triangulo');

//-----------------INTERACTIVIDAD CON HTML - TRIANGULO
btnTriaPer.addEventListener('click', function resPerimetroTriangulo() {
    const ladoTria = document.getElementById('InputTriangulo')
    let data1 = perimetroTriangulo(parseFloat(ladoTria.value))
    if (data1>0)
    {
        resTria.innerHTML = `P = ${data1.toFixed(2)} cm`  
    }
    else
    {
        resTria.innerHTML = `Por favor, ingresa un número`;
    }
})

btnTriaAr.addEventListener('click', function resAreaTriangulo() {
    const ladoTria = document.getElementById('InputTriangulo')
    let data1 = areaTriangulo(parseFloat(ladoTria.value))
    if (data1>0)
    {
        resTria.innerHTML = `A = ${data1.toFixed(2)} cm^2`  
    }
    else
    {
        resTria.innerHTML = `Por favor, ingresa un número`;
    }
})


//---------------FORMULAS PARA EL CIRCULO
function diametroCirculo(radio) {
    return radio * 2;
  }
  const PI = Math.PI;
  function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
  }
  function areaCirculo(radio) {
    return (radio * radio) * PI;
  }
  const resCir = document.getElementById('resultado-circulo');

  //-----------------INTERACTIVIDAD CON HTML - CIRCULO
  btnCirPer.addEventListener('click', function resPerimetroCiruclo() {
    const radio = document.getElementById('InputCirculo')
    let data2 = perimetroCirculo(parseFloat(radio.value))
    if (data2>0)
    {
        resCir.innerHTML = `P = ${data2.toFixed(2)} cm`  
    }
    else
    {
        resCir.innerHTML = `Por favor, ingresa un número`;
    }
})

btnCirAr.addEventListener('click', function resAreaCirculo() {
    const radio = document.getElementById('InputCirculo')
    let data2 = areaCirculo(parseFloat(radio.value))
    if (data2>0)
    {
        resCir.innerHTML = `A = ${data2.toFixed(2)} cm^2`  
    }
    else
    {
        resCir.innerHTML = `Por favor, ingresa un número`;
    }
})


