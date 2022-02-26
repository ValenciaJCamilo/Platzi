<?php
//=============== SINTÁXIS BÁSICA ================
$nombre = "Camilo";
$apellido = "Valencia";
$edad = 20;
// Forma 1
echo "Mi nombre es $nombre $apellido y tengo $edad años de edad :)";
// Forma 2
echo "Mentira, yo me llamo " . $nombre . $apellido.  "\n";


//=============== DEBUGGING Y COMENTARIOS ===============
$personas = [
    "Carlos" => 20,
    "Camilo" => 15,
    "Juan" => 65
];

//Debugging con var_dump
var_dump($personas);

#Debugging con print_r
print_r($personas);
echo("\n");
/*Estos son comentarios de varias
líneas. Es igual que en CSS*/
?>
