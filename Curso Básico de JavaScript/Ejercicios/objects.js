// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

var objecto = {}; // Object Literal Syntax 

var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.annio}`;
  }
};

miAuto.annio 
miAuto.modelo 

miAuto.detallesDelAuto(); 