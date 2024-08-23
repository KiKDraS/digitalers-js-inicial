/*
    Programación - Pensar una secuencia de pasos para resolver un problema.
    Lenguaje de Programación - Escribir la secuencia de pasos para resolver un problema (escribir un programa)

    Programar
        => ¿Qué datos necesito? - Identificar los datos que necesito para resolver el problema
        => ¿Cómo puedo obtener esos datos? - Buscar formas de obtener esos datos

    Preguntas clave
        => ¿Qué necesito hacer? - Identificar el objetivo de mi programa y los datos necesarios para lograrlo
        => ¿Cuándo necesito hacerlo?
            -> Asincronía - No importa el orden lectura para que algo suceda
                -> Peticiones AJAX - Obtener información de internet
                -> Eventos
                    -> Cuando el usuario hace click en él botón
                    -> Cuando se terminan de cargar los elementos en la página
                    -> Cuando cambia el tamaño de la ventana del navegador
                    -> Cuando apreto una tecla del teclado
                    -> Cuando paso el mouse por encima de un elemento HTML
                    -> etc...
        => ¿Cómo puedo hacerlo? - Utilizar el Lenguaje de programación para cumplir mi objetivo    

    API Web (Caja de herramientas con funcionalidades) - Interfaz de programación de aplicaciones
        => API Window (Objeto window) - BOM (Browser Object Model)
            -> Almacena todas las herramientas que me permiten interactuar con el navegador web
            -> API Fetch
            -> API Storage - Almacena y recupera datos en el navegador web
            -> API Eventos - Eventos del navegador web
                 -> Cuando se terminan de cargar los elementos en la página
                 -> Cuando cambia el tamaño de la ventana del navegador
                 -> Cuando apreto una tecla del teclado
        => API Document - DOM (Document Object Model)    
            -> Almacena todas las herramientas que me permiten interactuar con el documento HTML
            -> document.getElementById 
            -> document.querySelector 
            -> document.createElement
            -> API Eventos - Eventos del documento HTML 
                -> Cuando el usuario hace click en él botón
                -> Cuando paso el mouse por encima de un elemento HTML
*/

/* 
    //Asincronía

    2.- if (condition) {
        
    }

    1.- Se ejecuta esto pero el if todavía no se ejecuto

    //Sincronía

    1.- if (condition) {
        
    }

    2.- El código que tengo acá
*/

/*
    Función Callback 
        -> Función que se pasa como Argumento de otra para que esta la ejecute

    Parámetro - "Variable" que permite guardara datos propios de cada ejecución de la función
    Argumento - El valor que se almacena en la "variable" Parámetro    
*/

function fnReceptora(fnCallback) {
  fnCallback();
}

fnReceptora(() => {
  console.log(
    "Soy una Arrow Function que trabaja como callback de fnReceptora"
  );
});

function fnCallback() {
  console.log(
    "Soy una función. Me usan como callback de la función fnReceptora"
  );
}

fnReceptora(fnCallback);

fnReceptora(function () {
  console.log(
    "Soy una Función Expresada que trabaja como callback de fnReceptora"
  );
});

/*
    Eventos
        -> 1.- Identificar qué tipo de evento es 
            -> Evento del navegador - Necesito el Objeto window
            -> Evento del documento HTML - Necesito de un Objeto HTML
        -> 2.- Agregar la acción que se va a realizar cuando se dispare el Evento
            -> ¿Cuándo quiero hacer algo? - Cuando el usuario haga click en button que tiene el id "ejEvento"    
                -> 1.- Necesito un button con id="ejEvento"
                -> 2.- Crear el Objeto HTML para ese button
                -> 3.- Agregar un Evento al Objeto HTML que se dispare cuando se haga click
            -> addEventListener("nombreDelEvento", funciónCallback)    

    El evento se dispara === Se realiza la acción del cuando
        -> Ej. El evento click tiene como acción el click sobre el elemento.
            -> Se dispara el evento === Se hizo click sobre el elemento  
        -> Ej. El evento submit tienen como acción el envío del formulario
            -> Se dispara el evento === Se envió el formulario          
            
           


const objHTML = {
  id: "",
  innerHTML: "",
  addEventListener: function (nombreDelEvento, fnCallback) {
    switch (nombreDelEvento) {
      case "click":
        //Se realizan las acciones para el evento click
        fnCallback();
        break;
      case "change":
        //Se realizan las acciones para el evento change
        fnCallback();
        break;
      case "submit":
        //Se realizan las acciones para el evento submit
        fnCallback();
        break;
    }
  },
};

objHTML.addEventListener("click", () => {
  console.log("Se hizo click en el botón");
});
*/

const btnEjEvento = document.getElementById("ejEvento");
console.log(btnEjEvento);

//Cuando se haga click en el Objeto HTML con el id:"ejEvento". Quiero que ejecutes la función callback
btnEjEvento.addEventListener("click", () => {
  console.log("Se hizo click en el botón");
});

//Buscar un elemento escrito en documento HTML
const elemento = document.querySelector("#DOM");
elemento.innerHTML = "<h2>DOM Tree</h2>";

/*
    Modificar el Árbol del DOM cuando se haga click en el botón con el id="bntMostrar"
*/

//Elementos que existen en el HTML
const body = document.querySelector("body");
const bntMostrar = document.querySelector("#btnMostrar");
const btnOcultar = document.querySelector("#btnOcultar");

//Cuando se haga click en el botón, ejecutar la función callback
bntMostrar.addEventListener("click", callback);

function callback() {
  //Crear un nuevo (no está escrito en documento HTML) elemento HTML
  const section = document.createElement("section");
  section.id = "sectionAgregado";
  // console.log(section.classList);
  section.classList.add("rojo", "otraClase");
  // console.log(section.classList);

  const colores = ["Rojo", "Amarillo", "Verde"];

  /*
        appendChild(elementoAgregar)
            -> ¿Qué elemento quiero agregar? - El h4 guardado en la constante elementoHTML
            -> ¿Dónde quiero agregarlo? - Agregarlo al section que creamos
                -> ¿Dónde está guardado el section que creamos? - La constante section
                -> ¿Cómo puedo agregar el h4 que creamos al section? - Usar la función appendChild del objeto guardado en la constante section
    */

  for (const color of colores) {
    const elementoHTML = document.createElement("h4");
    elementoHTML.innerText = `Soy el color: ${color}`;
    //Agregar el h4 que creamos al section que creamos
    section.appendChild(elementoHTML);
  }

  //Insertar el section al HTML
  body.appendChild(section);
  btnOcultar.classList.remove("oculto");
  bntMostrar.classList.add("oculto");
}

//Cuando se haga click en el botón con id="btnOcultar", ejecutar la función callback
btnOcultar.addEventListener("click", function () {
  const section = document.getElementById("sectionAgregado");
  //   console.log(section);

  body.removeChild(section);
  bntMostrar.classList.remove("oculto");
  btnOcultar.classList.add("oculto");
});

/*
    ¿Cuándo quiero mostrar los elementos?
        -> Después de 5 segundos
    ¿Qué quiero que suceda a los 5 segundos? -> Función callback    
*/

const fnCallbackTimeout = () => {
  document.write("Hola desde JS");
};

setTimeout(fnCallbackTimeout, 5000); //mili segundos
