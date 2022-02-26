<?php
    // readline() ayuda a pedir datos al usuario
    $horas= readline("Ingresa el numero de horas: ");
    $min= readline("Ingresa el numero de minutos: ");
    $segundos= readline("Ingresa el numero de segundos: ");

    $totalSegundos=($horas*3600)+($min*60)+($segundos);

    echo "El total de segundos es $totalSegundos";
?>