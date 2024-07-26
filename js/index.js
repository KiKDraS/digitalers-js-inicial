/*
    Variable - Elemento que permite almacenar datos que se reconoce mediante un nombre
        => Declaración - Guardar el espacio (crear la caja y ponerle el nombre para reconocerla)
            -> var - Palabra reservada que me permite crear una variable
        => Asignación - Almacenar un valor en el espacio reservado (Guardar el valor dentro de la caja)
            -> = - Operador que me permite asignar una variable
        => Tipo de Dato - Herramienta que permite reconocer qué significa el valor almacenado en la caja
            => En JS las variables reciben el Tipo de Dato después de que se les asigne un valor
            => En JS las variables pueden modificar su Tipo de Dato si le re-asigno un valor de distinto tipo
        => Valor - Cualquier cosa que se pueda almacenar en la caja (número, texto, booleano, etc)

    Operadores de Variables
        => Matemáticos - Permite realizar operaciones matemáticas
            => +
                => Suma de datos de tipo number
                => Concatenación de datos de tipo string
            => -, *, /, %
                => Realizan la correspondiente operación sobre datos de tipo number
        => Asignación - Permiten guardar datos en una variable
            => =
            => Combinar Operadores Matemáticos y el Operador de asignación
                => +=, -=, *=, /=, %=
                    => Se utiliza el valor almacenado en la variable para realizar la operación matemática correspondiente y se reemplaza ese valor con el resultado
        => Incremento(++)/Decremento(--) - Sumar(++)/Restar(--) 1 al valor almacenado y reemplazar con el resultado
            => pre Incremento(++)/Decremento(--)
            => post Incremento(++)/Decremento(--) 
        => NO SE PUEDE OPERAR SOBRE DATOS DE DISTINTO TIPO
            => Casteo implícito - JS convierte un dato en otro para poder operar
                => +
                    => string + number -> string + string = string
                => -, *, /, %
                    => string (-, *, /, %) number -> number (-, *, /, %) number = number
                    => NaN (Not a Number) -> Es un valor de tipo number que me indica que JS no pudo realizar la operación porque no se encontró con un número 

    console.log(valorAMostrarEnConsola)    
        => Herramienta del Lenguaje JavaScript que permite mostrar valores en la consola del navegador
*/

/*
    Matemáticos	
*/
var n1 = 1; //number
var n2 = 2; //number

console.log(n1 + n2); //Quiero ver en consola el resultado de la operación matemática entre los datos almacenados en las variables n1 y n2

// var resultado = "El resultado de la suma es: " + n1 + n2;
// console.log(typeof resultado);

console.log("El resultado de la suma es: " + (n1 + n2));
var resultado = n1 + n2;
console.log(typeof resultado); //number
// console.log("El resultado de la suma es: " + resultado);
resultado = true;
console.log(typeof resultado); //boolean

resultado = "5" - n2;
console.log("Tipo de dato: " + typeof resultado + " - Valor: " + resultado);

resultado = "el5" - n2;
console.log("Tipo de dato: " + typeof resultado + " - Valor: " + resultado);

/*
    Asignación
*/
var num1 = 1;
var num2 = 2;

num1 += num2; //num1 = num1 + num2; - Dentro de la variable n1 quiero guardar el resultado de la operación num1 + num2
console.log("En la variable num1 tengo almacenado: " + num1);

var frase = "Completo la ";
// frase = frase + "frase";
frase += "frase";
console.log(frase);

//Valor almacenado dentro de frase "Completo la frase"
//frase = frase - 5; => string - number -> number - number = number
frase -= 5;
console.log(frase);

/*
    Incremento(++)/Decremento(--)
*/
var num = 1;

console.log("Valor almacenado en la variable num " + num); //Quiero ver en la consola el valor almacenado dentro de la variable num
// num = 5;
// console.log(num);

/* 
    pre Incremento(++) - Primero realiza la operación (sumar 1 y reemplazar el valor con el resultado), después utiliza el valor almacenado dentro de la variable
*/

//console.log("Pre Incremento: " + ++num); - Incremento el valor de num antes de mostrarlo

/* 
    post Incremento(++) - Primero utiliza el valor almacenado dentro de la variable, después realiza la operación (sumar 1 y reemplazar el valor con el resultado)
*/

console.log("Post Incremento: " + num++); //- Muestro el valor almacenado en la variable num antes de incrementarlo en uno
console.log("Valor almacenado en la variable num " + num);

/*
    Javascript tiene que realizar 2 acciones
        => Sumar uno al valor almacenado en la variable num y reemplazar ese valor con el resultado
        => Mostrar el valor almacenado en la variable num

    Para que Javascript realice estás acciones, necesita que le indiquemos el orden en cual debe realizarlas
        => pre 
            => 1ro - Sumar uno al valor almacenado en la variable num y reemplazar ese valor con el resultado
                -> ¿Cuál es el valor inicial? -> 1
                -> ¿Cuánto le tengo que sumar? -> 1
                -> ¿Cuál es el resultado? -> 2
                -> Reemplazo el valor 1 por el 2 (resultado de la cuenta) en la variable nu,
                -> Cuando finalizan todas las acciones. ¿Cuál es el valor almacenado en la variable num? -> 2
            => 2do - Mostrar el valor almacenado en la variable num
                -> ¿Qué valor se verá en consola? -> 2
        => post
            => 1ro - Mostrar el valor almacenado en la variable num   
                -> ¿Qué valor se verá en consola? ¿Cuál es el valor almacenado en la variable num? -> 1
            => 2do - Sumar uno al valor almacenado en la variable num y reemplazar ese valor con el resultado    
                -> ¿Cuál es el valor inicial? -> 1
                -> ¿Cuánto le tengo que sumar? -> 1
                -> ¿Cuál es el resultado? -> 2
                -> Reemplazo el valor 1 por el 2 (resultado de la cuenta) en la variable nu,
                -> Cuando finalizan todas las acciones. ¿Cuál es el valor almacenado en la variable num? -> 2
*/

/*
    Funciones Básicas de JS
        => Entrada de datos - Sirven cuando necesitamos que el usuario nos facilite cierta información
            => prompt(mensajeParaElUsuario)
                -> Permite que el usuario ingrese un dato de tipo string
        => Salida de datos - Sirven cuando necesitamos que el usuario visualice cierta información
            => console.log(datoAMostrar) - Muestra información en la consola
            => document.write(datoAMostrar) - Muestra información en la ventana del navegador (se ubica en el lugar en que tenemos la etiqueta script que incorpora nuestro archivo JS)
            => alert(datoAMostrar) - Muestra información en una ventana emergente que no permite seguir con el programa
        => Conversión de datos - Sirven cuando necesitamos que JS no se la mande cambiando el tipo por nosotros
            -> parseFloat(string) - Si tengo números decimales
                -> parceInt("1.5") === 1.5
            -> parseInt(string) - Si tengo números enteros
                -> No redondea. Si alguien pone un número decimal, ignorada la parte de los decimales
                    -> parceInt("1.5") === 1

*/

document.write("<h2 class='rojo'>Hola desde JS<h2>");

/*
    Objetivo: sumar 2 números y mostrar el resultado

    ¿Qué necesito?
        => Los números
            -> prompt(mensajeParaElUsuario)
        => Una forma de que el usuario pueda visualizar el resultado
            -> console.log
            -> document.write

    Programa
        => 1ro - Pedir el primer número y guardarlo en una variable
            -> var numero1 = prompt("Ingrese el primer número");
        => 2do - Pedir el segundo número y guardarlo en una variable
            -> var numero2 = prompt("Ingrese el segundo número");      
        => 3ro - Realizar la suma
            -> Es necesario convertir el dato string en number
                -> var resultadoDeLaSuma = parseFloat(numero1) + parseFloat(numero2);
                -> var numero1Number = parseFloat(numero1));
                -> var numero2Number = parseFloat(numero2));
                -> var resultadoDeLaSuma = numero1Number + numero2Number;
        => 4to - Mostrar el resultado
            -> console.log          
*/

var numero1 = prompt("Ingrese el primer número");
var numero2 = prompt("Ingrese el segundo número");
var resultadoDeLaSuma = parseFloat(numero1) + parseFloat(numero2);
document.write(
  "El resultado de la suma de los números ingresados es: " + resultadoDeLaSuma
);
