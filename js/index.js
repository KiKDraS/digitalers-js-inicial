/*
  En JS las funciones son Objetos

  POO
    -> Clases (plantillas)
    -> Objetos (copias de las plantillas)
      -> Objeto HTML
      -> Objeto Date
      -> Objeto Event
      -> Objeto Array
      -> Objeto Function

  Contexto de Ejecución de las funciones
    -> Entender el Contexto de Ejecución de las funciones es responder a la pregunta ¿En qué objeto se está ejecutando?    
    -> this - Herramienta que JS utiliza para responder a la pregunta del Contexto de Ejecución de las funciones
      -> Se puede pensar al this como una variable que guarda la información del objeto en que se está ejecutando la función
      -> this puede referirse a un objeto HTML, un Objeto Date, un Objeto Event, un Objeto Array o una Función
      -> Para entender qué guarda el this existen las Reglas del this
        -> Default this 
          -> Se almacena el Objeto en que se está ejecutando la función
          -> Toda función, almacena en this el Objeto window
        -> Objeto contenedor
          -> Toda función almacena en this el objeto que la contiene  
        > Si el objeto en que se ejecuta la función, es otra función. El this almacena el valor del this de la función en la que se está ejecutando  
*/

/*
  Declaro la función unFn
    -> Se guarda: En el Objeto window
    -> Valor del this: el Objeto window
*/
function unFn() {
  console.log("Ejecución de unFn. Valor del this", this);
}

/*
  Declaro la función otraFn
    -> Se guarda: En el Objeto window
    -> Valor del this: el Objeto window
*/
function otraFn() {
  unFn(); //this de unFn === this de otraFn -> Objeto window
}

unFn(); //this -> Objeto window

const unObj = {
  fn2: function () {
    console.log(this); //this de fn2 -> Objeto unObj
  },
};

unObj.fn2();

/*
  Evento
    -> Mensaje que se origina en html y viaja por el Árbol del DOM hasta que llega al Event Target
    -> Ej: Evento Click
      -> Mensaje: Se hizo click en x elemento del HTML
      -> El mensaje debe llegar desde el html hasta el elemento del HTML en el que se hizo click (Event Target)
        -> Event Target === El elemento que disparó el Evento === El elemento en el que el usuario hizo click

    
  addEventListener -> No le presta atención al Event Target. Ejecuta la función cuando el Evento (Mensaje) pasa por ese elemento del HTML      

  Objeto Evento
    -> Contiene toda la información correspondiente al Evento
    -> Event Target 
*/

function cbEvento(e) {
  console.log("Objeto HTML Actual: ", this); //¿En qué Objeto se está ejecutando la función?
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className} (Event Target)`
  );
}

const divs = document.querySelectorAll(".evento div");
// console.log(divs);

divs.forEach((elementoDelArray) => {
  const capturing = true; //Capturing - Los listener se ejecutan en bajada
  const bubbling = false; //Bubbling - Los listener se ejecutan en subida (Comportamiento por defecto de los Eventos)
  elementoDelArray.addEventListener("click", cbEvento, bubbling);
});

//Delegación de Eventos
const section = document.querySelector(".delegacion");

section.addEventListener("click", (e) => {
  if (e.target.className === "div3") {
    console.log(
      `Hola te saluda ${e.target.className}, el click lo originó ${e.target.className} (Event Target)`
    );
  }
});

/*
  Eventos de Formulario
    -> Recolección de datos
      -> Trabajo con los eventos de los input
        -> Evento Change (cambia cuando se sale del input) - Se dispara cuando cambia el valor almacenado en value
        -> Evento Input - Se dispara mientras se escribe
          -> Validar el input
    -> Envío de datos
      -> Trabajo con los eventos del formulario
        -> Evento Submit - Se dispara cuando se envía el formulario
*/

const form = document.querySelector("#miForm");
const inputs = {
  nombre: "",
  email: "",
};

//Tomar los datos
form.addEventListener("input", (e) => {
  const target = e.target;
  const name = e.target.name;
  const value = e.target.value;

  //Validar los datos
  const regPass = /^(?=.+[A-z])(?=.+\d)(?=.+[$@!¡_*?&])[A-z\d$@!¡_*?&]{8,16}$/g; //RegExp para validar contraseñas seguras
  const regPalabras = /^[a-zA-Z\u00C0-\u017F\s]+$/g; //RegExp para validar palabras con caracteres latinos

  if (name === "nombre") {
    // console.log(regPalabras.test(value));
    const ok = regPalabras.test(value);

    if (ok) {
      target.classList.add("ok");
      target.classList.remove("error");
    } else {
      target.classList.remove("ok");
      target.classList.add("error");
    }

    //inputs["nombre"] = value
    inputs[name] = value;
  }

  if (name === "email") {
    //Corregir la RegExp de la profe
    // console.log(regPass.test(value));
    const ok = regPass.test(value);

    if (ok) {
      target.classList.add("ok");
      target.classList.remove("error");
    } else {
      target.classList.remove("ok");
      target.classList.add("error");
    }

    //inputs["email"] = value
    inputs[name] = value;
  }
});

//Enviar los datos
form.addEventListener("submit", (e) => {
  e.preventDefault(); //Prevenir el envío del formulario por defecto
  console.log(inputs);
});
