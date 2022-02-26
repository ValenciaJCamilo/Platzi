<?php
    // STRING A INT
    //Número como String 
    $numero = "5";
    var_dump($numero);
    echo ("\n");
    //Número convertido a Int 
    $numInt = (int) $numero;
    var_dump($numInt);

    // FLOAT A INT
    $dias = 5.89;
    var_dump($dias);
    echo ("\n");
    $diasInt = (int) $dias;
    var_dump($diasInt);

    // INT A BOOL
    # Cualquier cosa diferente de 0 será TRUE
    $bandera = 0;
    var_dump($bandera);
    echo ("\n");
    $banderaBool = (bool) $bandera;
    var_dump($banderaBool);
?>