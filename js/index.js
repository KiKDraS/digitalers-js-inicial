/*
    Variable - Espacio de memoria que almacena datos que pueden cambiar a lo largo de la ejecución del Programa*
        => Nomenclatura
            -> Todos los Lenguajes
                -> Los nombres deben comenzar con letras, $ o _
                -> No pueden empezar con un número
                -> No pueden contener espacios
                -> Solo pueden tener letras, $, _ y números
                -> Son key sensitive
                    -> otracosa es disntinto de otraCosa
                -> No pueden ser palabras reservadas**    
                -> Los nombres DEBEN ser descriptivos
            -> En JS
                -> Los nombres de las variables se escriben utilizando camelCase

        Formatos de escritura
            -> camelCase
            -> PascalCase
            -> snake_case
            -> UPPER_SNAKE_CASE
            -> kebab-case (solo CSS)

    * ejecución del Programa -> La máquina realiza las acciones que escribimos con nuestro Lenguaje
    ** Palabra reservada -> Son aquellas palabras que en el Lenguaje significan algo
        -> var - En JS significa "declarar variable"
        -> let - En JS significa "declarar variable en bloque"
        -> const - En JS significa "declarar una variable que no puede ser reasignada"
        -> function - En JS significa "definir una función"
        -> typeof - En JS significa "quiero conocer el tipo de dato de la variable"
*/

//Declaración de variable - Sentencia (oración) que le indica al Navegador que quiero crear una caja en la memoria para guardar cosas
var unaVariable;

//Asignación de valor a la variable - Sentencia (oración) que le indica al Navegador que quiero guardar algo dentro de esa caja
unaVariable = "Hola, mundo!";

//Asignar y declarar la variable en una sola sentencia
var otraVariable = "Otra cosa";

/*
    Dato - Valor representativo que tiene un significado de uso

    Tipos de Dato - En JS el Tipo de Dato de una variable se obtiene al momento en que se le asigna un valor*.
        => number - Representa números utilizados para propósitos matemáticos (1, 1.5, -50, etc.)
        => string - Representa texto ("hola", "un párrafo elaborado", "a", "1")
            -> Las comillas ""/'' indican que voy a generar un dato de tipo string
            -> Para que el texto tenga comillas tengo que definir el dato de tipo string con las comillas inversas
        => boolean - Representa verdadero/falso
        => undefined - Variable declarada que no tiene valor asignado
        => null - Variable declarada que TIENE tipo de dato pero no tiene valor
            => En JS, null suele venir de la mano de un error

     
    *Valor que asigno a la variable === Elemento que guardo en la caja   
    En Programación TODAS las variables tienen que tener Tipo de Dato
        => En JS, toda variable declarada tiene como Tipo de Dato undefined
*/

// console.log(elementoAMostrar); - Funcionalidad propia del Lenguaje JavaScript que permite mostrar elementos en la consola del navegador

var unNumber; //La variable no tiene valor asignado
console.log("Valor: " + unNumber + " - Tipo de Dato: " + typeof unNumber);
unNumber = 1; //Se guarda el número 1 en la caja unNumber. La variable tiene Tipo de Dato number
console.log("Valor: " + unNumber + " - Tipo de Dato: " + typeof unNumber);

var otroNumber = 2;
console.log("Valor: " + otroNumber + " - Tipo de Dato: " + typeof otroNumber);

var unString = "123";
console.log("Valor: " + unString + " - Tipo de Dato: " + typeof unString);

var otroString = "Hola, mundo!";
console.log("Valor: " + otroString + " - Tipo de Dato: " + typeof otroString);

var unTexto = 'Las "comillas" simples declaran el tipo de dato';
console.log(unTexto);

var unBoolean = true;
console.log("Valor: " + unBoolean + " - Tipo de Dato: " + typeof unBoolean);

unBoolean = "true";
console.log("Valor: " + unBoolean + " - Tipo de Dato: " + typeof unBoolean);

//document.getElementById(idDeEtiquetaHTML); - Funcionalidad propia del Lenguaje JavaScript que permite trabajar con las etiquetas que se escribieron en el HTML
var title = document.getElementById("titulo");
//La variable title tiene asignado el valor del resultado de la búsqueda de la etiqueta HTML con el id="titulo"
console.log(title);
