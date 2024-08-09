/*      
    Condiciones - Son preguntas que se responden sí o no
        => Falsies (condición false) - La variable no tiene valor almacenado
            -> undefined (no tiene tipo de dato ni valor)
            -> null (tiene tipo de dato, pero no valor)
            -> false 
            -> 0
            -> -0
            -> ""
            -> NaN
        => Trusties (condición true) - La variable tiene valor almacenado   
            -> Todos los valores que no son falsies

    Estructuras de Control de Flujo - Usan condiciones para saber si realizan/repiten una acción
        => Condicionales - Escribimos condiciones con la intención de obtener un true
            -> if/else
            -> Operador Ternario
            -> switch
                -> Evalúa un dato PREVIAMENTE procesado del que se conocen los posibles valores
        => Bucles - Escribimos condiciones que indican si debe repetirse el bloque o no. El bloque se va a repetir SIEMPRE que la condición sea true
            -> for
            -> while - Ideal para validar ingreso de datos
            -> do-while        
*/

/*
    Programa - Pedir al usuario que ingrese un número entre el 0 y el 6. Usar ese número para indicar un día la semana, asumiendo que 0 es Domingo y 6 es Sábado. Asegurarse que el valor ingresado no sea menor de 0 ni mayo de 6. El tipo de dato debe ser number

    ¿Qué necesitamos?
        -> 1.- Obtener el dato
            -> var num = parseInt(prompt("Ingrese un número entre el 0 y el 6"))
        -> 2.- Validar que el dato sea un número (dato de tipo number)
            -> Necesitamos evaluar que dentro de la variable num NO haya almacenado un NaN
                -> Number.isNaN(num) - Devuelve true si el valor almacenado en la variable num ES un NaN === La condición es true cuando num tiene un NaN
        -> 3.- Validar que el dato este entre 0 y 6
        -> 4.- Indicar el día de la semana

    Validar 
        => El proceso que se realiza para asegurarnos que obtuvimos el dato necesario  
        
    Procesar un dato
        => Se generan una serie de acciones que permiten saber qué valor obtendremos si leemos el dato en una instancia posterior    
*/

//var num = parseInt(prompt("Ingrese un número entre el 0 y el 6"));

//parseInt("seis"); //NaN
//parseInt("6"); //6

/*
    Condición 
       -> ¿Es el dato almacenado en la variable num un NaN?
       -> ¿Es el dato almacenado en la variable num un número menor a 0?
       -> ¿Es el dato almacenado en la variable num un número mayor a 6?

    Operador OR
        -> Sólo va a dar false si todas las preguntas se responden con NO. No entra en el bucle
        -> Si alguna se responde con SI. La condición es true. Entra en el bucle
*/
/* while (Number.isNaN(num) || num < 0 || num > 6) {
  num = parseInt(
    prompt(
      "No es número válido. Por favor, ingrese un número entre el 0 y el 6"
    )
  );
}

console.log(num); //0, 1, 2, 3, 4, 5, 6 - Dato previamente procesado


    key => Variable que almacena el dato previamente procesado
    value => Uno de los posibles valores que puede almacenar la variable
    break => Le indica a JS que ya no tiene que seguir trabajando en el switch
    default => Se ejecuta cuando ninguna de las opciones anteriores se cumple (por si acaso)

    switch (key) {
        case value:
            
            break;

        default:
            break;
    }         

var pDia = document.getElementById("dia"); //La variable pDia guara un Objeto HTML

switch (num) {
  case 1:
    pDia.innerText = "Hoy es Lunes";
    break;
  case 2:
    pDia.innerText = "Hoy es Martes";
    break;
  case 3:
    pDia.innerText = "Hoy es Miércoles";
    break;
  case 4:
    pDia.innerText = "Hoy es Jueves";
    break;
  case 5:
    pDia.innerText = "Hoy es Viernes";
    break;
  case 6:
    pDia.innerText = "Hoy es Sábado";
    break;
  case 0:
    pDia.innerText = "Hoy es Domingo";
    break;

  default:
    console.log("Che, se rompió el código andá y miralo");
    break;
}
*/

/*
    Objeto HTML
        => Herramienta que permite modificar que se muestra en nuestra página web

    Objeto Date
        => Herramienta que permite que trabajemos con la hora del dispositivo del usuario que visita nuestra página web    
*/

var objDate = new Date(); //La variable objDate guarda un Objeto Date
console.log(objDate);
var pDia2 = document.querySelector("#dia2");
var dia = objDate.getDay(); //En la variable dia se guarda un número entre el 0 y el 6 para representar el día de la semana. 0 representa el Domingo y 6 representa el Sábado

switch (dia) {
  case 1:
    pDia2.innerText = "Hoy es Lunes";
    break;
  case 2:
    pDia2.innerText = "Hoy es Martes";
    break;
  case 3:
    pDia2.innerText = "Hoy es Miércoles";
    break;
  case 4:
    pDia2.innerText = "Hoy es Jueves";
    break;
  case 5:
    pDia2.innerText = "Hoy es Viernes";
    break;
  case 6:
    pDia2.innerText = "Hoy es Sábado";
    break;
  case 0:
    pDia2.innerText = "Hoy es Domingo";
    break;

  default:
    console.log("Che, se rompió el código andá y miralo");
    break;
}

var n = 1;
console.log(n); //1
n = 2;
console.log(n); //2

/*
    Espacios de Almacenamiento
        => Variable - Una caja que guarda un dato
            -> Simples - number, string, boolean, etc...
            -> Compuestos - array, objetos literales, etc...
                -> Array - Caja que guarda datos. Los datos guardados se "etiquetan" con un número (índice) que permite identificar al dato de forma individual para trabajar            
                    -> En JS, el primer dato de un Array tiene el índice 0. El resto se acomoda de forma SECUENCIAL. El segundo tiene el índice 1, el tercero el índice 2
*/

//índice - 0, 1, 2
//longitud === cantidad de datos que se guardan en el Array. 3
var arr = ["Dato 1", "Dato 2", "Dato 3"];

//Modificar la longitud del Array (agregar/sacar datos)
arr.push("Dato 4"); //Agrega un elemento al final del Array
console.log(arr);

arr.pop(); //Elimina el elemento del final del Array
console.log(arr);

//Modificar un dato almacenado dentro del Array
arr[1] = "Dato 2 - Modificado"; //Asignar a la posición (número de índice) 1 del Array almacenado en la variable arr el dato de tipo string con el valor "Dato 2 - Modificado"
console.log(arr);

var otroArr = [];

otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");

otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");

otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");

otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");

otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");

otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");

otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");

otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");
otroArr.push("Dato");

//Acceder al último elemento almacenado en el Array guardado en la variable otroArr
//Contar datos almacenados === Conocer la longitud del Array
var longitudArrayOtroArr = otroArr.length; //Total de datos almacenados
var indiceFinal = otroArr.length - 1; //Indice del último dato del Array
console.log("Total de datos", longitudArrayOtroArr);
console.log("Último dato", indiceFinal);

var colores = ["red", "yellow", "green", "blue"];

var divFor = document.getElementById("bucleFor");
// divFor.innerHTML += "<h4>" + colores[0] + "</h4>"; //i = 0
// divFor.innerHTML += "<h4>" + colores[1] + "</h4>"; //i = 1
// divFor.innerHTML += "<h4>" + colores[2] + "</h4>"; //i = 2
// divFor.innerHTML += "<h4>" + colores[3] + "</h4>"; //i = 3

/* 
    Bucle For - Se ejecuta el código mientras la condición sea true
        => La condición la escribo para indicar cuando NO quiero que ejecute el código

    for (inicialización; condición; modificación) {
        //Quiero usar todos los elementos del array
    } 

*/

for (var i = 0; i < colores.length; i++) {
  var color = colores[i];

  divFor.innerHTML += "<h4 class='cartel " + color + "'>" + color + "</h4>";
}
