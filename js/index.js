/*
  Repaso de Bucles
*/
for (var i = 0; i < 3; i++) {
  //Bloque de código que se ejecutará mientras la condición sea true
}

var index = 0;
while (index < 3) {
  index++;
  //Bloque de código que se ejecutará mientras la condición sea true
}

var index2 = 0;
do {
  index2++;
  //Bloque de código que se ejecutará mientras la condición sea true
} while (index2 < 3);

/*
  Espacios de Almacenamiento
    => Variable - Una caja que guarda un dato
      -> Simples - number, string, boolean, etc...
      -> Compuestos - array, objetos literales, etc...
        -> Array - Caja que guarda datos. Los datos guardados se "etiquetan" con un número (índice) que permite identificar al dato de forma individual para trabajar            
          -> En JS, el primer dato de un Array tiene el índice 0. El resto se acomoda de forma SECUENCIAL. El segundo tiene el índice 1, el tercero el índice 2  
        -> Objeto literal - Caja que guarda datos. Los datos guardados se "etiquetan" con el nombre que el programado desee
      -> Pasos para trabajar con variable
        -> Declaración - Construir la caja y ponerle la etiqueta para identificarla
        -> Asignación -  Guardar algo dentro de la caja
    => Función (acción) - Caja que tiene una etiqueta para identificarla y guarda bloques de código
      => Declaración - Construir la caja, ponerle la etiqueta para identificarla y guardamos el bloque de código
      => Ejecución - Usar el bloque de código guardado en la caja
        -> () - Indican a JS que quiero realizar la acción guardada en el bloque de código de la función   
    
  Bloque de Código
    => Conjunto de sentencias encerrado entre llaves
    
  Sentencia - Oración
    => Unidad mínima de la programación  
        
        
  Programación Orientada a Objetos (POO)
    => Clase - Plantilla
    => Objeto - Una copia de la plantilla con los datos que corresponda       
*/

//Declaración
function saludar() {
  //El bloque de código de una función sirve para indicar qué quiero que pase cuando se ejecute la función
  console.log("Hola desde la función saludar");
}

//Ejecución
//saludar(); //Quiero que realices las acciones guardadas en la caja con la etiqueta saludar
console.log(saludar); //Qué hay en la caja con la etiqueta saludar

/*

 Formas de trabajar con funciones  
    -> Funciones que no reciben parámetros ni retornan valor
    -> Funciones que reciben parámetros pero no retornan valor
    -> Funciones que reciben parámetros y retornan valor
    -> Funciones que no reciben parámetros y retornan valor

  Parámetro - Se agrega en la declaración de la función
    -> Espacio de memoria propio de ESA ejecución de la función  
    -> "Variable" que guarda datos para la ejecución de la función

  Argumento (valor que almacena el parámetro) - Se agrega en la ejecución de la función  
    -> El orden de los argumentos altera el producto



  TODO ELEMENTO TIENE ACCESO AL ESPACIO DE MEMORIA QUE LO CONTIENE. NINGÚN ELEMENTO PUEDE ACCEDER AL ESPACIO DE MEMORIA DE UN ELEMENTO CONTENIDO
*/

//Función que no recibe parámetro y no retorna valor
function fnSinParams() {
  console.log(
    "En la declaración, no hay 'Variable'. Esta función no tiene parámetros"
  );
}

//Función que recibe parámetro y no retorna valor
var miVar; //Declaración (undefined)
miVar = "algo"; //Asignación ("algo")

function saludarConNombre(nombre) {
  console.log("Hola, " + nombre);
}

saludarConNombre("Anahí"); //Argumento ("Anahí")
saludarConNombre("Pepe"); //Argumento ("Pepe")
saludarConNombre("Pepin"); //Argumento ("Pepin")
saludarConNombre("Pepa"); //Argumento ("Pepin")

/*
  TODO ELEMENTO TIENE ACCESO AL ESPACIO DE MEMORIA QUE LO CONTIENE. 
  NINGÚN ELEMENTO PUEDE ACCEDER AL ESPACIO DE MEMORIA DE UN ELEMENTO CONTENIDO.
  NINGÚN ELEMENTO PUEDE ACCEDER AL ESPACIO DE MEMORIA DE OTRO ELEMENTO QUE NO SEA SU CONTENEDOR. 

  Scope de Variable 
    => ¿Dónde está guardada la variable? 
      -> Memoria del navegador - variable global
      -> Memoria de una función - variable local
    => Variable Global - Puede ser usada por cualquier elemento del programa  
    => Variable Local - Puede ser usada solo en la función en la que se declara

*/

var nombre = "Pepita";

function unaFn() {
  var nombre = "Anahí";
  console.log("Hola, " + nombre + " - Función unaFn");
}

unaFn();

function otraFn() {
  console.log(nombre);
}

otraFn();

//Función que no recibe parámetro y retorna valor
function obtenerNumRandom() {
  var random = Math.random(); //0 ... 0.9999999999999999999999999999999...
  random *= 10; //random = random * 10; - 1.9999
  random = Math.round(random);
  return random;
}

var numRandom = obtenerNumRandom();

//Función que recibe parámetro y retorna valor
function sumar(n1, n2) {
  return n1 + n2;
}

var resultado = sumar(2, 2);
console.log(resultado);

resultado = sumar(3, 3);
console.log(resultado);

function restar(n1, n2) {
  return n1 - n2;
}

resultado = restar(1, 2); //n1: 1 - n2: 2 - resultado = -1
console.log("Resultado de la resta 1:", resultado);

resultado = restar(2, 1); //n1: 2 - n2: 1 - resultado = 1
console.log("Resultado de la resta 2:", resultado);

function miFn(nombre, edad) {
  console.log(nombre);
  console.log(edad * 2); //NaN
}

miFn(30, "Anahí"); //nombre: 30 - edad: "Anahí"
miFn(30); //nombre: 30 - edad: undefined
miFn("", 30); //nombre: "" - edad: 30

// var listaUsuarios = [];

// do {
//   var unUsuario = generarUsuario();
//   listaUsuarios.push(unUsuario);
//   var continuar = confirm("Ingresar otro usuario?");
// } while (continuar);

// mostrarUsuarios();
