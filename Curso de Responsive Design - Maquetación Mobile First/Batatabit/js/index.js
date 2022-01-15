window.sr=ScrollReveal();

    /*Header*/
    sr.reveal('.header', {
        duration:1900,
        origin:'bottom',
        distance:'-100px'
    });

    /*Main Logo Header*/
    sr.reveal('.logo-batatabit', {
        delay:700,
        rotate:{
            x:1,
            y:180,
        }
    });

    /*Tasas de Cambios*/
    sr.reveal('.main-exchange-container', {
        duration:2500
    });

    /*Slide izquierdo "Producto sin comparación" */
    sr.reveal('.product-detail--card', {
        duration:1500,
        origin:'left',
        distance:'120px'
    });

    /*Fondo conócelo hoy*/
    sr.reveal('.bitcoin-img-container', {
        duration:1500
    });

    /*Slide derecho Planes*/
    sr.reveal('.plans-container--slider',{
        duration:1000
    });
