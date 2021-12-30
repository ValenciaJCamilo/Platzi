/*
Escribe una función recursiva para un timer que cada
5 minutos se agregue 10 minutos más a su cuenta total.
*/
var minuto = 5;
var contador = 0;
function timer(){
  console.log(minuto);
  minuto = minuto-1;
  contador++;
  if(contador==5){
    minuto+=10;
    contador=0;
  }
  if(minuto>=1 && minuto<=20){
  setTimeout(timer,1000);
  }
}
timer()
