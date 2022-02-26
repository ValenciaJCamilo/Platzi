<?php
$horas= readline("Ingresa el numero de horas: ");
    $minutis= readline("Ingresa el numero de minutos: ");
    $segundos= readline("Ingresa el numero de segundos: ");

    $totalSegundos=($horas*3600)+($minutis*60)+($segundos);

    echo "El total de segundos es $totalSegundos";