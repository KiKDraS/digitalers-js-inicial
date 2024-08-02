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
            => Operadores de Comparación
                -> AND (&&) - La condición es true cuando todas las preguntas se responden con true
                -> OR (||) - La condición es false cuando todas las preguntas se responden con false
                -> NOT (!) - Invierte el resultado de la condición

        
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

/*
  EJERCICIO

  Pedir al usuario que ingrese su edad.
  Si es mayor de 18 años, mostrar un cartel que diga "Usted es adulto";
  Si es menor de 18 años y mayor de 13, mostrar un cartel que diga "Usted es adolescente";
  Si es menor de 13 años, mostrar un cartel que diga "Usted es niño";

  Objetivo -> Mostrar un cartel que indique el rango etario de la persona

  ¿Qué necesitamos?
    -> La edad del usuario
        -> var edad = prompt("Ingrese su edad");
    -> Evaluar la edad del usuario
        -> 1.- ¿Es mayor o igual de 18?
        -> 2.- ¿Es menor de 18 y mayor o igual que 13? || ¿Es menor o igual de 17 y mayor o igual que 13?
            -> ¿Es menor de 18? ¿mayor o igual que 13?
            -> edad < 18 && edad >= 13
        -> 3.- ¿Es menor de 13 años?
    -> Mostrar un cartel según la edad


// var edad = prompt("Ingrese su edad");
// edad = parseInt(edad);

// var str = prompt("Ingrese su edad");
// var edad = parseInt(str);

// var edad = parseInt(prompt("Ingrese su edad"));

// var container = document.querySelector("#age-container");
// container.className = "cartel";

// if (edad > 120) container.innerText = "Bienvenida Mirta";
// else if (edad >= 18 && edad <= 120) container.innerText = "Usted es adulto";
// else if (edad < 18 && edad >= 13) container.innerText = "Usted es adolescente";
// else if (edad < 13 && edad >= 0) container.innerText = "Usted es un niño";
// else container.innerText = "No es una edad válida";
*/

/*
    EJERCICIO

    Mostrar un cartel que indique si puede o no ingresar al sitio. Para ingresar debe ser mayor de edad o estar registrado

    Objetivo -> Mostrar un cartel que indique el estado de acceso al sitio

    ¿Qué necesitamos?
        -> La edad del usuario
            -> var edad = parseInt(prompt("Ingrese su edad"));
        -> Saber si es miembro
            -> var esMiembro = confirm("¿Es usted miembro?");
        -> Evaluar los datos
            -> ¿Es mayor de edad?
            -> ¿Es miembro?    
        -> Mostrar un cartel según el estado de acceso al sitio
            -> Estado correcto (true)
                -> Si es mayor o es miembro
                    -> edad >= 18 || esMiembro = true
                -> Si es mayor o no es miembro
                    -> edad >= 18 || esMiembro = false
                -> Si es menor o es miembro
                    -> edad < 18 || esMiembro = true
            -> Estado incorrecto (false)
                -> Si es menor y no es miembro
                    -> edad < 18 || esMiembro = false


var edad = parseInt(prompt("Ingrese su edad"));
var esMiembro = confirm("¿Es usted miembro?"); //true ||| false

var container = document.querySelector("#login-container");

if (edad >= 18 || esMiembro) {
  container.innerHTML = "<h3 class='ingreso'>Está logueado</h3>";
} else {
  container.innerHTML = "<h3 class='no-ingreso'>Error</h3>";
}
*/

/*
    EJERCICIO

    Mostrar un mensaje si hay un error en el programa
*/

var container = document.querySelector(".login-container"); //null
console.log(container);

if (!container) {
  console.log("Fijate que tu lógica está mal porque container tiene un falsie");
} else {
  container.innerHTML = "<h3 class='ingreso'>Está logueado</h3>";
}
