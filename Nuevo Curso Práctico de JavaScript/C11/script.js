//querySelector nos pide las clases, etiquetas o id's con las que queremos trabajar
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo1 = document.querySelector('.parrafo1');
const parrafo2 = document.querySelector('#parrafo2');
const input = document.querySelector('input');


console.log({
    h1,
    p,
    parrafo1,
    parrafo2,
    input
});

//Esto traduce todo a HTML, reconoce todo
h1.innerHTML="Modificando el título <br> :D";
//Esto reconoce solo texto
p.innerText="Modificando el párrafo <br> D:";
//getAttribute ayuda a leer los elementos de los atributos del elemento
console.log(p.getAttribute('class'));
//setAttribute ayuda a modificar los atributos de los elementos en HTML
p.setAttribute('class','verde');

//ClassList es específica para manipular las clases. Aquí le añadimos clases al h1
h1.classList.add('rojo','verde');
//Remove me elimina la clase
h1.classList.remove('rojo');
//Toggle sirve para ir quitando y poniendo (sirve cuando tengamos eventos)
//Contains es como un condicional, true or false

//Value para poder modificar a los input
input.value="123";

//document.createElement('') Crear elemento desde cero
const img = document.createElement('img');
img.setAttribute('src','https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc');
//Esto no es todo, ya que debemos meter esta imagen en alguna parte, es decir, debemos indicar dónde la queremos posicionar
//A append (agrega el elemento completo al final de la lista) le mandamos como atributo la img
parrafo2.append(img);

