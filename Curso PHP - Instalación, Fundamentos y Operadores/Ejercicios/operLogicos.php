<?php
    $es_michi_grande = true;
    $le_gusta_comer = true;
    $sabe_volar = false;
    $tiene_2_patas = false;

    //AND
    var_dump($es_michi_grande && $le_gusta_comer); //bool(true);

    //OR
    var_dump($es_michi_grande || $sabe_volar); //bool(true);

    //OR
    var_dump($sabe_volar || $tiene_2_patas); //bool(false);

    //NOT
    var_dump(!$le_gusta_comer); //bool(false);

    //NOT+AND
    var_dump(!$le_gusta_comer && $es_michi_grande); //bool(false);

    echo ("\n");
?>