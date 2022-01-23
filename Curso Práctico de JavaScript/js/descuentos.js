function aplicarDescuento(){
    let precioInput = document.getElementById("InputValor");
    let precio = parseFloat(precioInput.value);

    let descuentoInput = document.getElementById("InputDescuento");
    let descuento = parseFloat(descuentoInput.value);

    let precioFinal = (precio * (100-descuento))/100;

    const p = document.getElementById("resultado-descuento");
    if (precioFinal < 0)
    {
        p.innerText='Parece que no tienes que pagar por tu producto ¡GRATIS! 😂';
    }
    else if (precio>0 && descuento>=0)
    {
        p.innerText=`El precio final es: $${precioFinal} 🤩`;
    }
    else
    {
        p.innerText='Por favor ingresa valores válidos en ambos campos, chistosito 🙂';
    }
}