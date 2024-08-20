/*
    ECMAScript 2015
*/

/*
    Variables
        => var 
            -> Hoisting de variable - Todas las variable se "elevan" a la parte superior del código
            -> Se almacena en el Objeto Global
            -> No se recomienda su uso. Se conserva por razones históricas
        => let
            -> Funciona igual que var
            -> No tiene hoisting de variable
            -> NO se almacena en el Objeto Global
        => const    
            -> No tiene hoisting de variable
            -> NO se almacena en el Objeto Global
            -> No se puede modificar el valor una vez establecido
                -> No puedo reasignar el valor de la variable
            -> No puedo declarar const sin asignar el valor de la variable    
            -> Convención de nombres
                -> Si almacena un valor Simple se utiliza UPPER_SNAKE_CASE
                    -> string, number, boolean, null, undefined
                -> Si almacena un valor Compuesto se utiliza camelCase


    TODO ELEMENTO TIENE ACCESO AL ESPACIO DE MEMORIA QUE LO CONTIENE. 
    NINGÚN ELEMENTO PUEDE ACCEDER AL ESPACIO DE MEMORIA DE UN ELEMENTO CONTENIDO.
    NINGÚN ELEMENTO PUEDE ACCEDER AL ESPACIO DE MEMORIA DE OTRO ELEMENTO QUE NO SEA SU CONTENEDOR.     

    Scope de la variable - ¿Dónde puedo usar la variable?
        => Global - Puedo usar la variable en cualquier parte del código
        => Local - Puedo usar la variable dentro del bloque de código que la contenga   
*/

console.log(nombre); //Hoisting de variable -> undefined
var nombre = "Pepe";

//console.log(nombreLet); Sin hoisting del variable -> error de ejecución
let nombreLet = "Pepa";
console.log(nombreLet); //"Pepa"

nombreLet = "Pepita";
console.log(nombreLet); //"Pepita"

console.log(window);

function saludo() {
  console.log("Hola, " + nombre); //TODO ELEMENTO TIENE ACCESO AL ESPACIO DE MEMORIA QUE LO CONTIENE.
}

saludo();

function unSaludo() {
  let otroNombre = "Pepin";
}

// unSaludo();
//console.log(otroNombre); NINGÚN ELEMENTO PUEDE ACCEDER AL ESPACIO DE MEMORIA DE UN ELEMENTO CONTENIDO.

let pi;
pi = 3.14;

const PI = 3.14;

const arr = [];
arr.push("un dato");
arr.push("un dato");
arr.push("un dato");
arr.push("un dato");
arr.push("un dato");
arr.push("un dato");
arr.push("un dato");
arr.push("un dato");
arr.push("un dato");
arr.push("un dato");
arr.push("un dato");
arr.push("un dato");
arr.push("un dato");

const obj = {};
obj.nombre = "Pepe";

/*
    Template String
        -> Forma fácil de concatenar datos de tipo string con datos guardados en variables
        -> Permite agregar saltos de línea
*/

//Antes
let edad = 25;
console.log("Tengo " + edad + " años"); //Tengo 25 años

//Después
console.log(`Tengo ${edad} 
    
    
    
    
    años`); //Tengo 25 años

const colores = ["Rojo", "Amarillo", "Verde"];

for (let i = 0; i < colores.length; i++) {
  //Las variables que se crean en un bucle, se destruyen cuando termina esa iteración
  const color = colores[i];
  console.log(
    `Hola soy el color: ${color}. Estoy en la posición ${i} del array colores`
  );
}

/*
    Bucles For
*/

//for...of
console.log(" ");
for (const color of colores) {
  console.log(`Hola soy el color: ${color}.`);
}

//for...in
console.log(" ");
const persona = {
  nombre: "Pepe",
  edad: 25,
};

//Notación de punto
console.log(persona.nombre); //"Pepe"
console.log(persona.edad); //25

//Notación de corchetes
let clave = "nombre";
console.log(persona[clave]); //"Pepe"

for (const key in persona) {
  //key -> El objeto persona tiene la clave ["nombre", "edad"]

  const element = persona[key];
  //element -> El valor de la clave ["nombre", "edad"] que se obtiene del objeto persona

  console.log(`Para la clave: ${key}. El valor es: ${element}`);
}

console.log(" ");

/*
    Funciones - Espacios de almacenamiento pensado para bloques de código
        => Pueden ser pensadas como variables
        => Parámetro - Espacio de memoria ("variable") propio de esa ejecución de la función
        => Argumento - Valor que se guarda dentro del parámetro para esa ejecución de la función
*/

function unaFn() {
  console.log("Bloque de Código de la función");
}

unaFn();

let miVar = "Algo";
let otraVar = miVar;
console.log(otraVar);

const miFn = function () {
  console.log("Función anónima || Función expresada");
  console.log("Crear una variable para guardar una función");
};

miFn();

function fnConParams(nombre) {
  console.log(`Hola, ${nombre}`);
}

fnConParams("Pepe"); //En esta ejecución de la función - nombre = "Pepe";
fnConParams("Pepa"); //En esta ejecución de la función - nombre = "Pepa";
fnConParams("Pepita"); //En esta ejecución de la función - nombre = "Pepita";

/*
    Funciones Callback
        -> Una función callback es una función que se recibe como Argumento de otra que se encarga de ejecutarla
*/

function otraFnConParams(miFn) {
  //miFn => Parámetro ("Variable")
  miFn();
}

otraFnConParams(function () {
  console.log("Soy la función almacenada en el parámetro miFn");
});
/*
  //En esta ejecución de la función 
  miFn = function () {
    console.log("Soy la función almacenada en el parámetro miFn");
  }

  miFn(); -> console.log("Soy la función almacenada en el parámetro miFn");

  Función Callback = function () {
    console.log("Soy la función almacenada en el parámetro miFn");
  }
*/

otraFnConParams(function () {
  console.log("Ahora yo me guardo en el parámetro miFn");
});
/*
    //En esta ejecución de la función 
    miFn = function () {
        console.log("Ahora yo me guardo en el parámetro miFn");
    }

    miFn(); -> console.log("Ahora yo me guardo en el parámetro miFn");

    Función Callback = function () {
        console.log("Ahora yo me guardo en el parámetro miFn");
    }
*/

function fnParaParam() {
  console.log("Soy una función que me voy a guardar en el parámetro miFn");
} //"Variable" fnParaParam que contiene un Bloque de Código

otraFnConParams(fnParaParam);
/*
    //En esta ejecución de la función
    miFn = fnParaParam;

    miFn(); -> console.log("Soy una función que me voy a guardar en el parámetro miFn");

    Función Callback = fnParaParam;
*/

/*
    Arrow Function - Una forma distinta de escribir una función (trabaja de forma ligeramente distinta a una función tradicional)
        => Función Expresada (función anónima)
            -> Función que se guarda dentro de una variable
        => Las Arrow Function son muy utilizadas como Funciones Callbacks    

    Ventajas
        => Si sólo escribo una línea de código, puedo no escribir las llaves    
        => Si sólo escribo una línea de código, puedo no escribir el return   
        => Si sólo escribo un parámetro, puedo no escribir los paréntesis
*/

const miArrowFn = () => {
  console.log("Soy una Arrow Function");
};

miArrowFn();

function fnReceptora(fnCallback) {
  //fnReceptora se encarga de ejecutar la Función Callback
  fnCallback();
}

fnReceptora(miArrowFn); //Uso la Arrow Function guardada en la variable miArrowFn como Función Callback

fnReceptora(() => {
  console.log("Uso la Arrow Function como Función Callback");
});

//Sin Arrow Function
const fnExpresada = function () {
  console.log("Soy una Arrow Function");
};
//Con Arrow Function
const unaArrowFn = () => console.log("Soy una Arrow Function");

//Sin Arrow Function
const fnExpresada1 = function (n1, n2) {
  return n1 + n2;
};
//Con Arrow Function
const unaArrowFn1 = (n1, n2) => n1 + n2;

//Sin Arrow Function
const fnExpresada2 = function (nombre) {
  console.log(`Hola, ${nombre}`);
};

//Con Arrow Function
const unaArrowFn2 = (nombre) => console.log(`Hola, ${nombre}`);
// const unaArrowFn2 = nombre => console.log(`Hola, ${nombre}`);
