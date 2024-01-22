_19-01-2024_
_Any Omaña_

**TEST DE JAVASCRIPT**

# 1. Variables

_¿Qué es una variable y para qué sirve?_

- Una variable es un espacio virtual en la memoria de nuestra computadora que sirve para almacenar valores.


_¿Cuál es la diferencia entre declarar e inicializar una variable?_

- Al declarar una variable mi computadora sabe que existe y que debe guardar un valor, pero no sabe cual es el valor.

- Al inicializar una variable se le asigna el valor que esta tendrá almacenado.


_¿Cuál es la diferencia entre sumar números y concatenar strings?_

- Sumar números en JavaScript implica una operación matemática, mientras que sumar string implica que 4 + 2 no es = 6, sino 42.


_¿Cuál operador me permite sumar o concatenar?_

- Es el mismo operador para ambas cosas: +


# 2. Determina el nombre y tipo de dato para almacenar en variables la siguiente información.

* Nombre: string

* Apellido: string

* Nombre de usuario en platzi: string

* Edad: número entero

* Correo electrónico: string

* Mayor de edad: boolean

* Dinero ahorrado: número flotante

* Deudas: número flotante


# 3. Traduce a código JavaScript las variables del ejemplo anterior.

- Código en test-de-javascript.js 

# 4. Calcula de imprime las siguientes variables a partir de las variables del ejemplo anterior.

- Código en test-de-javascript.js 

    * Nombre completo (nombre y apellido)
    * Dinero real (ahorrado menos deudas)


# 5. Funciones


_¿Qué es una función?_

- Es un conjunto de sentencias que se utilizan para generar acciones con las variables.


_¿Cuándo me sirve usar una función en mi código?_

- Cuando deseo hacer una tarea de manera más automática, reutilizando bloques de código y además tener un código ordenado.


_¿Cuál es la diferencia entre parámetros y argumentos de una función?_

    **Parámetros:** son los valores que se le pasan a la función y se esperan recibir

    function suma (a,b){
        return a + b;
    }

    **Argumento de una función:** los valores que se utilizan al llamar a la función

sumar (2, 4);


# 6. Convierte el siguiente código en una función

```
    const theName = "Juan David";
    const lastName = "Castro Gallego";

    const completeName = theName + lastName;

    const nickName = "juandc";

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickName + ".");
```

- Código en test-de-javascript.js 


# 7. Condicionales

_¿Qué es un condicional?_

Es un bloque de código que me permite validar una condición, es decir si una cosa es cierta ocurre algo, y si no ocurre otra cosa o se rompe el código.

_¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?_

    **Condicional if**

        Este condicional solo valida una condición verdadera.

    **Condicional else**

    Este condicional solo valida una condición falsa.

    **Condicional if else**

        Con este otro tipo se pueden validar varios casos antes de llegar a una conclusión.

    **Condicional Switch**

        Valida por casos que se comparan con una misma variable ya definida anteriormente en el switch.

_¿Puedo combinar funciones y condicionales?_

¡Sí! Esto es posible, debido a que en un programa determinado pueda hacer falta validar alguna condición dentro de un programa antes de generar alguna acción cualquiera.


# 8. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

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

- Código en test-de-javascript.js 


# 9. Replica el comportamiento de tu condicional anterior if, else y else if, pero ahora solo con if (sin else ni else if)

- Código en test-de-javascript.js 

```js
    
    let tds = "hola";

    function tipoSus(tsd){
        if (tds === "Free"){
            console.log("Solo puedes tomar los cursos gratis");
            return;
        }
        if (tds === "Basic"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
            return;
        }
        if (tds === "Expert"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
            return;
        }
        if (tds === "Expert Plus"){
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
            return;
        }

        if(tsd !== "Free" && tsd !== "Basic" && tsd !== "Expert" && tsd !== "Expert Plus."){
            console.warn("No estás suscrito a Platzi :(");
            return;
        }
        
    }

    tipoSus(tds);

```
```js
    
```


# 10. Ciclos

_¿Qué es un ciclo?_

Es un bloque de código que se repite hasta tanto se cumpla una condición.

_¿Qué tipos de ciclos existen en Javascript?_

    **Ciclo For** 
    En el cual se valida una condición y además existe una variable auxiliar que aumenta o disminuye en cada iteración. Es decir, le decimos qué hacer al comienzo y al final del ciclo.

    *Ciclo while**

    Se ejecuta mientras la condición siga siendo cierta, pero primero consulta y después ejecuta.

    *Do while**

    Parecido al anterior pero primero ejecuta y después consulta la validación.

_¿Qué es un ciclo infinito y por qué es un problema?_

Un ciclo infinito es un ciclo que itera sin fin, es un problema porque ocupa mucha memoria en nuestra computadora y al no soportar la cantidad de iteraciones explota (no literalmente), pero sí podría congelar la compu.

También es cuando no se cumple la condición del ciclo.

_¿Puedo mezclar ciclos y condicionales?_

Claro que sí, dentro de una condición algunas veces también es necesario usar ciclos, o viceversa.


# 11. Replica el comportamiento de los siguientes siclos for usando ciclos while

```js
    for (let i= 0; i <5; i++){
        console.log("El valor de i es: " + i);
    }

    for (let i= 10; i >=2; i--){
        console.log("El valor de i es: " + i);
    }
```

- Código en test-de-javascript.js 


# 12. Escribe un código en Javascript que le pregunte a los usuarios cuánto es 2+2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

- Código en test-de-javascript.js 


# 13. Listas o Arrays

_¿Qué es un array?_

Una estructura de datos que almacena distintos valores. Los array comienzan en la posicion 0 y de allí continúan con la numeración

_¿Qué es un objeto?_

También es una estructura de datos, con la particularidad de que en los objetos podemos separar los datos de una misma cosa por sus características.

_¿Puedo mezclar arrays con objetos o incluso objetos con array?_

Sí, claro que sí. De hecho, en los objetos es más común, por lo de las características que se pueden agregar.

# 14. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```js
    var frutas = ["Guayaba", "Mango", "Fresa"];

    function imprimir(frutas){
        console.log (frutas[0]);
    }

    imprimir(frutas);
```

# 15. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo)


```js
    function imprimirPriElem(frutas){
        for (let i = 0; i <= frutas.length ; i++){
            console.log(frutas[i]);
        }
    }

    imprimirPriElem(["Guayaba", "Mango", "Fresa"]);
```

# 16. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo)

```js
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
```