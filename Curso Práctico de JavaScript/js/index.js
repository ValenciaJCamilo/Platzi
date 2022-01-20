window.sr=ScrollReveal();

    sr.reveal('.header', {
        duration:1900,
        origin:'bottom',
        distance:'-100px'
    });

    sr.reveal('.header--title-container h1', {
        delay:700,
        rotate:{
            x:1,
            y:180,
        }
    });

    sr.reveal('.rubik-logo, .geometria-logo',{
        delay:700,
        rotate:{
            x:1,
            y:180,
        }
    });
    


    sr.reveal('.program-detail--card, .main-section--options, .main-section--figures',{
        duration:2000
    });

    sr.reveal('.program-button span', {
        delay:1200,
        rotate:{
            x:1,
            y:180,
        }
    });