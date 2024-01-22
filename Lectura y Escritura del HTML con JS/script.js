//Leer el HTML

//seleccionar el nombre de la etiqueta
const h1 = document.querySelector('h1'); 

const p = document.querySelector('p'); 
const parrafo = document.querySelector('parrafo'); 
const idParrafo = document.querySelector('#idParrafo'); 
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafo,
    idParrafo,
    input
});

//Convierte todo a código HTML
h1.innerHTML = 'Arepa con <br> Aguacate';

//Es ideal para proteger nuestra página porque solo se ingresa texto
h1.innerText = 'Arepa con <br> Aguacate';

//Leer los atributos del elemento
console.log(h1.getAttribute('atributo'));

//ESTO lo puedo visualizar en el navegador en los Elements del HTML

//Modificar clase o atributo
h1.setAttribute('atributo','vaca');

//Funciona específicamente con las clases, puedo agregar una
h1.classList.add('otraClase');
h1.classList.remove('otraClase');

//Pone y quita la clase cada vez que se ejecuta
//h1.classList.toogle('otraClase');

//Condicional que devuelve V o F si el elemento contiene dicha clase
//h1.classList.contains('otraClase');

input.value = "Hola chama";

//CREAR un elemento desde CERO con JS

const img = document.createElement('img');

img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

//Insertando la imagen después de otro elemento ya existente

idParrafo.append(img);

//Borrar contenido del HTML

idParrafo.innerHTML = '';

//Sustituir el elemento por otro
idParrafo.append(img);

