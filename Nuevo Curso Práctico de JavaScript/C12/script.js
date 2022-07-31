const  input1 = document.querySelector('#calc1');
const input2 = document.querySelector('#calc2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultadoSuma');
const pResta = document.querySelector('#resultadoResta');
const pMulti = document.querySelector('#resultadoMultip');
const pDiv = document.querySelector('#resultadoDiv');

function btnCalc(){
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerText = "La suma es " +sumaInputs;
    const restaInputs = parseInt(input1.value) - parseInt(input2.value);
    pResta.innerText = "La resta es " +restaInputs;
    const multiInputs = parseInt(input1.value) * parseInt(input2.value);
    pMulti.innerText = "La multiplicación es " +multiInputs;
    const diviInputs = parseInt(input1.value) / parseInt(input2.value);
    pDiv.innerText = "La división es " +diviInputs;
}