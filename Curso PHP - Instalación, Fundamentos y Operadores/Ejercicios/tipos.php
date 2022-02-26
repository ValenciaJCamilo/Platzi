<?php
// ============NUMÉRICOS
// Número flotante
$numero = 19.9;
var_dump($numero);
// Número entero
$numero = 248174;
var_dump($numero);

// Combinación de string con número. Me identifica y da 50
$numero_text = "45";
$nuevo_numero = $numero_text + 5;
var_dump($nuevo_numero);

// Acá es un error ya que se inicia con texto 
$papas = "tengo 20 papas";
$nuevas_papas = $papas + 5;
var_dump ($nuevas_papas);
?>