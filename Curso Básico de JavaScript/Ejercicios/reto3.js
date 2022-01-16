// RETO 3 - Función constructora y hacer un loop que se vayan construyendo solor

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 1 ; i < 3 ; i++){
    var marca = prompt("Ingresa la marca del auto #" +i);
    var modelo = prompt("Ingresa el modelo del auto #" +i);
    var annio = prompt("Ingresa el año del auto #" +i);
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }