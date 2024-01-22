const h1 = document.querySelector('h1'); 
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');

//Escuchar los eventos

//function btnOnClick(){
    //agarrar valores de los inputs
    //const suma = parseInt(input1.value) + parseInt(input2.value);
    //pResult.innerText = "La suma es: " + suma;
//}

//addEventListener

//btn.addEventListener('click', btnOnClick);

//function btnOnClick(){
    //agarrar valores de los inputs
    //const suma = parseInt(input1.value) + parseInt(input2.value);
    //pResult.innerText = "La suma es: " + suma;
//}

//Evitar recargar la página y escuchar el evento de SUBMIT

//form.addEventListener('submit', sumarInputValues);

//function sumarInputValues(event){
    //console.log({event});
    //event.preventDefault();
    //const suma = parseInt(input1.value) + parseInt(input2.value);
    //pResult.innerText = "La suma es: " + suma;
//}

//BONUS: sin tipo submit, colocar al boton type button

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event){
    const suma = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "La suma es: " + suma;
}