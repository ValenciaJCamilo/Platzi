// Creación de la clase: definición de un objeto
class JuegosDex {
  /* Para que esto ocurra se tiene que construír la clase.Dentro de las
  clases hay unas funciones que se disparan cuando se hace una nuevaa imagen.
  Esas funciones que se disparan cuando se está creando el objeto se
  llaman CONSTRUCTORES.
  CONSTRUCTOR es como escribir function, pero no tiene nombre; funciona igual*/
  constructor(nom, gen, emdes) {
    /* Se le tiene que decir que ESTO es parte de la clase.
  This es un indicador de la instancia de donde estoy
  Normalmente se refiere a la instancia de la clase, pero
  por ejemplo si se estuviera en una sola función que no
  fuese clase, entonces THIS se referiría a todas las
  variables que fueron creadas dentro de las llaves */
    this.nombre = nom;
    this.genero = gen;
    this.empresa = emdes;
    /*Representación visual. Se crea una nueva clase de tipo Image
  La última vez se agregó al Canvas, en este caso será al documento del HTML*/
    this.imagen = new Image();
    this.imagen.src = imagenes[this.nombre];
  }

  mostrar() {
    /*Agregar imagen al documento (todo lo visual) es con
    appendChild. Es a la etiqueta body a la que se le
    agregan las imagenes*/
    document.write("<p>");
    document.body.appendChild(this.imagen);
    document.write("</p>");
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong><br />");
    document.write("Género: " + this.genero + "<br />");
    // La etiqueta <hr> traza una raya para el salto de línea
    document.write("Empresa desarrolladora: " + this.empresa);
    document.write("</p>");
  }

  /* Dentros de las clases no se escribe function porque se sobreentiende
  que que todo bloque de código dentro de una clase función*/
}
