/*
    Herramientas JS
        => prompt(textoAMostrar) -> Herramienta propia de JS que permite que el usuario ingrese un  dato de tipo string
        => parseFloat(string) -> Convierte el string en un number. Reconoce los decimales
        => parseInt(string) -> Convierte el string en un number. Ignora los decimales
        => Objeto HTML - Plantilla que siempre tiene las mismas utilidades
            -> Copiar el Objeto HTML
                -> document.getElementById(idDeElementoHTML)
                -> document.querySelector(selectorCSS)
                    -> Siempre trabajo con el PRIMER elemento HTML que cumpla con el selector CSS
                -> document.querySelectorAll(selectorCSS)
                    -> Permite elegir con cuál elemento que cumpla con el selector trabajar
                -> innerText -> Cuando quiero escribir texto sin usar etiquetas HTML
                -> innerHTML -> Cuando quiero escribir texto con etiquetas HTML



    Objetivo: Realizar la suma de 2 números y mostrar el resultado

    ¿Qué necesito?
        => Obtener los números
            -> var num1 = prompt("Ingrese el primer número");
            -> var num2 = prompt("Ingrese el segundo número");
        => Realizar la suma
            -> var resultado = parseFloat(num1) + parseFloat(num2);        
        => Mostrar el resultado
            -> console.log(resultado);
*/

// var num1 = prompt("Ingrese el primer número");
// var num2 = prompt("Ingrese el segundo número");
// var resultado = parseFloat(num1) + parseFloat(num2);
// var resultado = 10;
// document.write("<h2 class='resultado'>El resultado es: " + resultado + "</h2>");
// var elementoResultado = document.getElementById("resultado");
// elementoResultado.innerText = resultado;
// elementoResultado.innerHTML = "<span class='resaltar'>" + resultado + "</span>";
// var titulo = document.querySelector("#titulo");
// console.log(titulo);

/*
    NO SE PUEDE OPERAR SOBRE DATOS DE DISTINTO TIPO
        -> El operador == o != no impide el casteo implícito
            -> number == string -> puede ser true
        -> El operador === o !== impide el casteo implícito    


    Operadores de Variables
        => Matemáticos
            -> +, -, *, /, %
        => incremento(++)/decremento(--)    
            -> pre - primero realiza la cuenta, después usa el valor
            -> post - primero usa el valor, después realiza la cuenta
        => Asignación
            -> =    
            -> +=, -=, *=, /=, %=
        => Lógicos - Se utilizan para crear condiciones
        
        
    Condiciones - Son preguntas que se responden sí o no
        => ¿Es 7 mayor que 3? - Si
            -> 7 > 3 - true 
        => ¿3 mayor o igual que 7? - No
            -> 3 >= 7 - false
        => ¿3 menor o igual que 7? - Sí       
            -> 3 <= 7 - true
        => ¿Tiene la variable algo almacenado? - La existencia o no de un valor almacenado en una variable es una condición
            -> Falsies (condición false) - La variable no tiene valor almacenado
                -> undefined (no tiene tipo de dato ni valor)
                -> null (tiene tipo de dato, pero no valor)
                -> false 
                -> 0
                -> -0
                -> ""
                -> NaN
            -> Trusties (condición true) - La variable tiene valor almacenado   
                -> Todos los valores que no son falsies

    Estructuras de Control de Flujo - Usan condiciones para saber si realizan/repiten una acción
        => Condicionales - Escribimos condiciones con la intención de obtener un true
            -> if/else
                -> Si voy a escribir sólo una sentencia, puedo no escribir las llaves
                -> Es posible no escribir el else
                    -> else se escribe si necesito tener una alternativa en caso de que la condición sea false
                -> if/else if/else 
                    -> Permite hacer una cadena de condiciones DEPENDIENTES de la anterior
            -> Operador Ternario
                -> condición ? true : false
                -> No puedo ignorar el else
                -> No puedo poner más de una línea
                -> Puedo guardar el resultado en una variable
            -> switch
        => Bucles - Escribimos condiciones que indican si debe repetirse el bloque o no. El bloque se va a repetir SIEMPRE que la condición sea true
            -> for
            -> while
            -> do-while        

*/

var n1 = 1; //number
var n2 = "1"; //string

console.log("¿La variable n1 es igual a la variable n2?", n1 == n2);
console.log(
  "¿La variable n1 es estrictamente igual a la variable n2?",
  n1 === n2
);

console.log(" ");
console.log("if/else");

/*
    if/else


    if(condición) {
        //bloque de código que se ejecuta cuando la condición es true
    } else {
      //bloque de código que se ejecuta cuando la condición es false
    }
*/

if (n1 == n2) {
  var unaFrase = "Condicional if - condición true";
  console.log(unaFrase);
  console.log("Realizo esta acción porque la condición es true");
} else {
  var unaFrase = "Condicional if - condición false";
  console.log(unaFrase);
  console.log("Realizo esta acción porque la condición es false");
}

if (n1 == n2)
  console.log(
    "Condicional if - condición true. Realizo esta acción porque la condición es true"
  );
else
  console.log(
    "Condicional if - condición false. Realizo esta acción porque la condición es false"
  );

console.log(
  "Esto se realiza después de la acción que corresponde con el if/else"
);

var resultado = 10;

if (resultado) {
  var div = document.getElementById("mostrar");
  div.className = "cuadrado";
  div.innerHTML = "<span class='resaltar'> " + resultado + " </span>";
}

var n3 = 1;
var n4 = "1";

if (n3 == n4) console.log("La primera condición es true");
else if (n3 != n4)
  console.log("La primera condición es false. La segunda es true");
else if (n3 == n4)
  console.log(
    "La primera y la segunda condición son false. La tercera es true"
  );
else console.log("Ninguna condición es true");

/*
  EJERCICIO

  Pedir al usuario que ingrese su edad.
  Si es mayor de 18 años, mostrar un cartel que diga "Usted es adulto";
  Si es menor de 18 años y mayor de 13, mostrar un cartel que diga "Usted es adolescente";
  Si es menor de 13 años, mostrar un cartel que diga "Usted es niño";
*/

/*
  Operador Ternario - condición ? true : false
*/

var existeElemento = " ";

existeElemento
  ? console.log("Existe valor en la variable")
  : console.log("No existe valor en la variable");

/*
  Armar un programa, que muestre un cuadrado rojo si el usuario eligió un número entre el 1 y el 5. Si el usuario eligió un número entre el 6 y el 10 el cuadrado debe ser azul

  Objetivo - Mostrar un cuadrado con el color correspondiente al número elegido

  ¿Qué necesito?
    => El número elegido por el usuario
        -> var numElegido = prompt("Elige un número del 1 al 10");
    => Evaluar el número para saber qué cuadrado crear
        -> condicional if/else
            -> condición - ¿Es el número menor o igual que 5? (cuadrado rojo)
            -> condición - ¿Es el número mayor o igual que 60? (cuadrado azul)
        -> operador ternario
    => Crear el cuadrado
        -> Aplicar la clase CSS correspondiente
*/

var numElegido = prompt("Elige un número del 1 al 10");

// if (numElegido <= 5) {
//   var div = document.getElementById("ternario");
//   div.className = "cuadrado-rojo";
// } else if (numElegido >= 6) {
//   var div = document.getElementById("ternario");
//   div.className = "cuadrado-azul";
// }

var div = document.getElementById("ternario");
div.className =
  numElegido <= 5 ? "cuadrado-rojo" : numElegido >= 6 ? "cuadrado-azul" : "";
