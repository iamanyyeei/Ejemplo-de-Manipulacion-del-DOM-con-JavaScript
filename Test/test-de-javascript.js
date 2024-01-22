//3. Traduce a código JavaScript las variables del ejemplo anterior.
var nombre = "Any";
var apellido = "Omaña";
var usuario = "omanaany";
var edad = 21;
var correo = "omanaany@gmail.com";

if (edad > 18){
    console.log("Eres mayor de edad");
}

var ahorros = 118.5;
var deudas = 15.4;


//4. Calcula de imprime las siguientes variables a partir de las variables del ejemplo anterior.

//- Código en test-de-javascript.js 

    //Nombre completo (nombre y apellido)
    //Dinero real (ahorrado menos deudas)

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

var dineroReal = ahorros - deudas;
console.log(dineroReal);

//5. Funciones

//parámetros
function suma (a,b){
    return a + b;
}

//argumentos de la funcion
sumar (2, 4);

//6. Convierte el siguiente código en una función
var theName;
var lastName;

var userName;

function nombreCompleto(theName, lastName, userName){
    var completeName = theName + " " + lastName;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + userName + ".");
}

nombreCompleto("Any", "Bustamante","anyyeei");

// 8. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
    const tipoDeSuscripcion = "Basic";

    switch (tipoDeSucripcion) {
        case "Free":
            console.log("Solo puedes tomar los cursos gratis");
            break;
        case "Basic":
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
            break;
        case "Expert":
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
            break;
        case "Expert Plus":
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
            break;
    } 
```

let tds = "Expert Plus";

if (tds === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if (tds === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tds === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if (tds === "Expert Plus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else{
    console.log("No estás suscrito a Platzi :(");
}

//9. Replica el comportamiento de tu condicional anterior if, else y else if, pero ahora solo con if (sin else ni else if)

let tdsus = "Basic";

if ((tdsus !== "Free") && (tdsus === "Basic") && (tdsus !== "Expert") && (tdsus !== "Expert Plus")){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} //mi respuesta

//Respuesta del profe en Platzi solo con if

let tdss = "hola";

function tipoSus(tdss){
    if (tdss === "Free"){
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    if (tdss === "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    if (tdss === "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    if (tdss === "Expert Plus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }

    if(tdss !== "Free" && tdss !== "Basic" && tdss !== "Expert" && tdss !== "Expert Plus."){
        console.warn("No estás suscrito a Platzi :(");
        return;
    }
    
}

tipoSus(tdss);

//Respuesta con objetos

var objSuscripcion = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

function conseguirSus(suscri){
    
    if(objSuscripcion[suscri]){
        console.log(objSuscripcion[suscri]);
        return;
    }
    
    console.warn("No estás suscripto a Platzi, ve y regístrate");
}

conseguirSus("epale");

//11. Replica el comportamiento de los siguientes siclos for usando ciclos while

```
for (let i= 0; i <5; i++){
    console.log("El valor de i es: " + i);
}

for (let i= 0; i >=2; i--){
    console.log("El valor de i es: " + i);
}
```

var i = 0;

while (i < 5){
    console.log("El valor de i es: " + i);
    i++;
}

console.log("Fin del primer ciclo");

var j = 10;

while (j >= 2){
    console.log("El valor de j es: " + j);
    j--;
}

console.log("Fin del segundo ciclo");

//12. Escribe un código en Javascript que le pregunte a los usuarios cuánto es 2+2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

let respuesta;

while (respuesta != "4"){
    let pregunta = prompt("¿cuanto es 2+2?");
    respuesta = pregunta;

    if (respuesta == "4"){

        alert("¡Felicitaciones!");
    }else{
        alert("Te lo volveré a preguntar");
    }
    
}

//14. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

var frutas = ["Guayaba", "Mango", "Fresa"];

function imprimir(frutas){
    console.log (frutas[0]);
}

imprimir(frutas);

// 15. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo)


function imprimirPriElem(frutas){
    for (let i = 0; i <= frutas.length ; i++){
        console.log(frutas[i]);
    }
}

imprimirPriElem(["Guayaba", "Mango", "Fresa"]);

// 16. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo)


var objeto = {
    nombre: "Any",
    edad: 21,
    comidasfav: ["Tajadas","Hamburguesa","Pollo"]
}


function imprimirPriElemObj(objeto){

    const arreglo = Object.values(objeto);
    
    for (let i = 0; i <= arreglo.length ; i++){
        console.log(arreglo[i]);
    }
    
}

imprimirPriElemObj(objeto);