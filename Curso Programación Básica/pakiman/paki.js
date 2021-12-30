// Creación de array asociativo
// Un array "[]" es como si una variable tuviese cajas
var imagenes = [];
imagenes["Valorant"] = "valorant.jpg";
imagenes["Fortnite"] = "fortnite.jpg";
imagenes["Grand Theft Auto V"] = "gta.png";

// Array numérico
// Variable para no tener que poner siempre por ejemplo "valorant.mostrar();"
// Crear coleccion sin crear variable que lo indique.
var coleccion = [];
coleccion.push(new JuegosDex("Valorant", "Shooter", "Riot Games"));
coleccion.push(new JuegosDex("Fortnite", "Battle Royale", "Epic Games"));
coleccion.push(new JuegosDex("Grand Theft Auto V", "Acción y aventura", "Rockstar Games"));

/* Ciclo que solamente va a operar por la cantidad de objetos que están
dentro del array. La variable puede ser cualquier nombre
Para índice usar "in" y para objeto usar "of"*/
for(var juegos of coleccion)
{
    juegos.mostrar();
}
