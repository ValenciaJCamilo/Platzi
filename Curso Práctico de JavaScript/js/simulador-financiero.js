// Función para calcular la tasa de interés. Acá va en base al porcentaje
function calculoTasaInteres(interesRate) {
    const operacion = Math.pow(1 + (interesRate / 100), 1 / 12) - 1;
    return operacion;
}
// Función para calcular la cuota mensual: Interes/
function calculoPlazos(cantidadCompra, cuotas, tasaInteresMes) {
    const num = Math.pow(1 + tasaInteresMes, cuotas) * tasaInteresMes * cantidadCompra;
    const den = Math.pow(1 + tasaInteresMes, cuotas) - 1;
    return num / den;
}

// Función completa para calcular los resultados
function calculate() {
    // Capturamos los valores desde el HTML
    const cantidadCompra = Number(document.getElementById('InputValor').value);
    const interesRate = Number(document.getElementById('InputDescuento').value);
    const cuotas = Number(document.getElementById('InputCuotas').value);

    // Llamamos las funciones
    const tasaInteresMes = calculoTasaInteres(interesRate);
    const cantidadCuotas = calculoPlazos(cantidadCompra, cuotas, tasaInteresMes);


    if(cantidadCompra <=0 || interesRate<=0 || cuotas<=0)
    {
        // Acá pongo el texto del error
        const textCond = document.getElementById('texto-condicional');
        textCond.innerHTML = `Hmmm, algo anda mal... revisa que los campos estén llenos y que sean valores positivos 🙂`;
        // Acá seteo los campos de resultados
        const textCuota = document.getElementById('texto-mensual');
        textCuota.innerHTML = ``;
        const resultCuota = document.getElementById('resultado-mensual');
        resultCuota.innerHTML = ``;

        const textInteres = document.getElementById('texto-interes');
        textInteres.innerHTML = ``;
        const resultInteres = document.getElementById('resultado-interes');
        resultInteres.innerHTML = ``;

        const textTotal = document.getElementById('texto-total');
        textTotal.innerHTML = ``;
        const resultTotal = document.getElementById('resultado-total');
        resultTotal.innerHTML = ``;
    }
    else
    {
        // Imprimimos la Cuota Mensual
        const textCond = document.getElementById('texto-condicional');
        textCond.innerHTML = `RESULTADOS`;
        const textCuota = document.getElementById('texto-mensual');
        textCuota.innerHTML = `Cuota`;
        const resultCuota = document.getElementById('resultado-mensual');
        resultCuota.innerHTML = `$${(cantidadCuotas).toFixed(0)*1}`;

        // Imprimimos los Intereses
        const textInteres = document.getElementById('texto-interes');
        textInteres.innerHTML = `Interés`;
        const resultInteres = document.getElementById('resultado-interes');
        resultInteres.innerHTML = `$${((cantidadCuotas)*cuotas-cantidadCompra).toFixed(0)}`;

        // Imprimimos el Total a Pagar
        const textTotal = document.getElementById('texto-total');
        textTotal.innerHTML = `Total`;
        const resultTotal = document.getElementById('resultado-total');
        resultTotal.innerHTML = `$${(cantidadCuotas).toFixed(0)*cuotas}`;
    }

}