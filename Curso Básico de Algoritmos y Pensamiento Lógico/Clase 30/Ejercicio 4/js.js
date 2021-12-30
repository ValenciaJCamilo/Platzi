var primer_numero = parseInt(prompt("Ingresa el primer numero"));
var segundo_numero = parseInt(prompt("Ingresa el segundo numero"));
var array = [primer_numero, segundo_numero];

function fibonacci(){
  for (var i=0; i<= 7; i++)
  {
    var nuevo_numero = primer_numero + segundo_numero;
    array.push(nuevo_numero);
    primer_numero = segundo_numero;
    segundo_numero = nuevo_numero;

  }
  for (x of array){
    document.write(x + "<br>");
  }
}

fibonacci();
