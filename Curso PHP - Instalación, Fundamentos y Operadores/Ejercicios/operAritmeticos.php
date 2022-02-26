<?php

    $timeCalc = 7501; //valor ingresado en segundos
    $HOUR_SEG = 3600;
    $HOUR_MINUTES = 60;

    //Cuántas horas equivale $timeCalc
    $hora = $timeCalc / $HOUR_SEG;
    $minuto = $hora * $HOUR_MINUTES;
    $segundo = $timeCalc % $HOUR_SEG;
    echo $timeCalc . " segundos equivalen a: " . $hora . " hora/s, " . $minuto . " minuto/s y " . $segundo . " segundo/s";
    echo "\n";
?>