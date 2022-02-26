<?php
// ============== VARIABLES Y CONSTANTES
$num_1 = 10;
$num_2 = 12;

echo $num_1 + $num_2;
echo("\n");

# Para definir constantes se hace uso de una función.
# Se recomienda escribir el nombre en mayúscula
# NO usamos signo de dolar, se ponen directamente
define("NUMERO_PI", 3.14);
echo NUMERO_PI;

# Otra manera más sencilla de definir una constante :)
const PI = 3.1416;
echo PI;
?>