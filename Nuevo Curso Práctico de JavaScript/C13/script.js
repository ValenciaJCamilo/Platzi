const  input1 = document.querySelector('#calc1');
const input2 = document.querySelector('#calc2');
const form = document.querySelector('#form');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultadoSuma');
const pResta = document.querySelector('#resultadoResta');
const pMulti = document.querySelector('#resultadoMultip');
const pDiv = document.querySelector('#resultadoDiv');

// Es un método, se debe pasar el nombre del evento a ejecutar y de segundo el código JS. No se manda con paréntesis
form.addEventListener('submit',operacionesInputs);


function operacionesInputs(event){
    // Sirve para que la página no se recarge
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerText = "La suma es " +sumaInputs;
    const restaInputs = parseInt(input1.value) - parseInt(input2.value);
    pResta.innerText = "La resta es " +restaInputs;
    const multiInputs = parseInt(input1.value) * parseInt(input2.value);
    pMulti.innerText = "La multiplicación es " +multiInputs;
    const diviInputs = parseInt(input1.value) / parseInt(input2.value);
    pDiv.innerText = "La división es " +diviInputs;
}