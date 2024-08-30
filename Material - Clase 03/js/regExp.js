/*
  Las expresiones regulares son patrones que proporcionan forma de buscar y reemplazar texto. 
  En JavaScript cobran especial relevancia porque, además, nos permiten generar validaciones.
  Están disponibles a través del objeto RegExp y se encuentran integrados en los métodos de String. 
*/

/*
  Banderas -> Elementos que afectan a la búsqueda
    => i (no distingue entre mayúsculas y minúsculas) 
    => g (Si no se pone, sólo se obtiene la primera coincidencia)
  
  Conjuntos [] -> retornan true cuando se encuentra alguno de los caracteres declarados dentro de los corchetes
*/

const regExpSBs = /[A-Z]/;
console.log("aZ".match(regExpSBs)); //[Z] porque es la primer coincidencia
console.log(regExpSBs.test("aZ")); //true porque se encuentra la coincidencia en la Z
const regExpCBs = /[A-Z]/gi;
console.log("asd".match(regExpCBs)); //[a, s, d] porque todas son coincidencias gracias a la bandera i
console.log(regExpCBs.test("asd")); //true

/*
  Clases de Caracteres -> Notación especial que coincide con cualquier símbolo de un determinado conjunto
    => Inclusivas (coincide con el conjunto)
      => - -> Cualquier caracter excepto nueva línea
      => \d -> Cualquier dígito
      => \s -> Símbolos de espacio, tabulaciones, nuevas líneas
      => \w -> letras (sin acentos ni caracteres especiales), dígitos y guión bajo
    => Exclusivas (coincide con lo que NO sea parte del conjunto)
*/

const regExpSBs2 = /[.\D]/;
console.log("12345 _uno".match(regExpSBs2)); //El caracter vacío porque es la primera coincidencia
console.log(regExpSBs2.test("1234")); //true porque se encuentra la coincidencia en el espacio
const regExpCBs2 = /[.\D]/gi;
console.log("1234 _uno".match(regExpCBs2)); //[_,u,n,o]
console.log(regExpCBs2.test("asd"));

/*
  Anclas -> Obligan a verificar la condición princio/fin de texto
    => ^ inicio -> La RegExp debe encontrarse al inicio de la cadena
    => $ final -> La RegExp debe encontrarse al final de la cadena
    => ^RegExp$ -> LA RegExp debe coincidir de principio a fin con la cadena
*/

let regExpSBs3 = /^perro/;
console.log("Gato y perro".match(regExpSBs3)); //null
console.log(regExpSBs3.test("Gato y perro")); //false
console.log("Perro y gato".match(regExpSBs3)); //null
console.log(regExpSBs3.test("Perro y gato")); //false

regExpSBs3 = /perro$/;
console.log("Gato y perro".match(regExpSBs3)); //["perro"]
console.log(regExpSBs3.test("Gato y perro")); //true
console.log("Perro y gato".match(regExpSBs3)); //null
console.log(regExpSBs3.test("Perro y gato")); //false

regExpSBs3 = /^Perro y gato$/;
console.log("Gato y perro".match(regExpSBs3)); //null
console.log(regExpSBs3.test("Gato y perro")); //false
console.log("Perro y gato".match(regExpSBs3)); //["Perro y gato"]
console.log(regExpSBs3.test("Perro y gato")); //true

let regExpCBs3 = /^perro/gi;
console.log("Gato y perro".match(regExpCBs3)); //null
console.log(regExpCBs3.test("Gato y perro")); //false
console.log("Perro y gato".match(regExpCBs3)); //["Perro"]
console.log(regExpCBs3.test("Perro y gato")); //true

regExpCBs3 = /perro$/gi;
console.log("Gato y perro".match(regExpCBs3)); //["perro"]
console.log(regExpCBs3.test("Gato y perro")); //false
console.log("Perro y gato".match(regExpCBs3)); //null
console.log(regExpCBs3.test("Perro y gato")); //false

regExpCBs3 = /^Perro y gato$/gi;
console.log("Gato y perro".match(regExpCBs3)); //null
console.log(regExpCBs3.test("Gato y perro")); //false
console.log("Perro y gato".match(regExpCBs3)); //["Perro y gato"]
console.log(regExpCBs3.test("Perro y gato")); //true

/*
  Escapar Caracteres y Límites de palabra
    => Escapar caracteres permite utilizar caracteres que significan algo en una REgExp (Ej: .) como su valor de lectura
    => Límite de Palabra permite buscar un texto deontro del texto

*/

const regExpSBs4 = /\bJavaScript\b/;
console.log(
  "JavaScript es un gran lenguaje. No confundir JavaScript con Java".match(
    regExpSBs4
  )
); //["JavaScript"]
console.log(
  regExpSBs4.test(
    "JavaScript es un gran lenguaje. No confundir JavaScript con Java"
  )
); //true

const regExpCBs4 = /\blenguaje\. No confundir\b/gi;
console.log(
  "JavaScript es un gran lenguaje. No confundir JavaScript con Java".match(
    regExpCBs4
  )
); //["lenguaje. No confundir"]
console.log(
  regExpCBs4.test(
    "JavaScript es un gran lenguaje. No confundir JavaScript con Java"
  )
); //true

/*
  Conjuntos
    => [] - retornan true cuando se encuentra alguno de los caracteres declarados dentro de los corchetes
    => [^] - retornan true cuando NO se encuentra alguno de los caracteres declarados dentro de los corchetes
    => () - permite encontrar palabras que comparten caracteres

  Rangos
    => [0-5] - retorna true si se encuentra un dígito entre el 0 y el 5   
    
  Cuantificadores
    => {n} - n cantidad de caracteres 
    => {x,n} - entre x y n cantidad de caracteres
    => {n,} - desde n cantidad de caracteres
    Abreviaciones
      => + = {1,}
      => ? = {0,1}
      => * = {0,}

  Grupos de Captura - Se crean combinando conjuntos de paréntesis y cuantificacdores
    => ()+ - Al menos una conincidencia de la RegExp al completo      
*/

let regExpSBs5 = /Java(Script)?/;
console.log(
  "JavaScript es un gran lenguaje. No confundir JavaScript con Java".match(
    regExpSBs5
  )
); //["JavaScript", "Script"]
console.log(
  regExpSBs5.test(
    "JavaScript es un gran lenguaje. No confundir JavaScript con Java"
  )
); //true

let regExpCBs5 = /Java(Script)?/gi;
console.log(
  "JavaScript es un gran lenguaje. No confundir JavaScript con Java".match(
    regExpCBs5
  )
); //["JavaScript", "JavaScript", "Java"]
console.log(
  regExpCBs5.test(
    "JavaScript es un gran lenguaje. No confundir JavaScript con Java"
  )
); //true

/***
 *
 *
 * Expresiones Regulares útiles
 *
 *
 ***/

//RegExp para validar un mail (Recoradar que la única forma real de validar un mail es mediante el envío de un mail de confirmación)
const regMail = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
console.log("Validación Mail:", regMail.test("mail@example.com"));

//RegExp para validar palabras que contengan acentos y caracteres especiales

const regPalabras = /^[a-zA-Z\u00C0-\u017F\s]+$/g;
//\u00C0-\u017F => código unicode para referirnos a letras acentuadas y caracteres especiales
console.log(
  "Validación Caracteres Especiales: ",
  regPalabras.test("Champigñones")
);
console.log("Validación Nombre con Acentos: ", regPalabras.test("Juan Pérez"));

//RegExp para validar contraseñas segura

const regPass = /^(?=.+[A-z])(?=.+\d)(?=.+[$@!¡_*?&])[A-z\d$@!¡_*?&]{8,16}$/g;
console.log("Validación Contraseña Segura: ", regPass.test("_UnaPass_123"));

//RegExp para validar la hora en cualquiera de sus formatos (Alternancia |)

const regHora = /([01]\d|2[0-3]):[0-5]\d/g;
console.log("Validación Hora: ", regHora.test("00:00 10:10 23:59 25:99 1:2"));

//RegExp que encuentra los lenguajes de programación en el siguiente string

const str = "Java JavaScript PHP C++ C";
const regParrafo = /Java(Script)?|C(\+\+)?|PHP/g;
console.log("Búsqueda de palabras: ", str.match(regParrafo));

//RegExp para validar números (enteros, decimales, positivos y negativos)

const regNum = /^-?\d+(\.\d+)?$/g;
console.log("Validación Números: ", regNum.test("-1.5"));
