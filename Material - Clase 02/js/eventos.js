//Manejador múltiple (primero leído, primero ejecutado). Eliminar listener

const btn = document.querySelector("#boton");

const funcionRemovida = (e) => {
  console.log(`Remover la callback del evento de tipo: ${e.type}`);
  btn.removeEventListener("click", funcionRemovida);
};

btn.addEventListener("click", funcionRemovida);
btn.addEventListener("click", () => {
  console.log("click");
});

//Propagación

function propagacion(e) {
  console.log(this); //Al ejecutarse dentro de un bucle, el contexto pasa a ser el elemento ejecutor permitiendo la selección del mismo mediante el uso de this
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
}

const divBubble = document.querySelectorAll(".bubble div");
divBubble.forEach((div) => div.addEventListener("click", propagacion, false)); //Valor por defecto - Tipo de propagación = Bubbling

/* divPropagacion.forEach(function (div) {
  div.addEventListener("click", propagacion);
}); */

const divCapture = document.querySelectorAll(".capture div");
divCapture.forEach((div) => div.addEventListener("click", propagacion, true)); //Tipo de propagación = Capturing

//stopPropagation

function sinPropagacion(e) {
  e.stopPropagation(); //Evita la propgacación del evento
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
  //Captura (capture) - Invierte el Bubbling (la propagación se da hacia abajo y hace que deje de funcionar el stopPropation)
  //div.addEventListener('click', propagacion, true);
}

const divStop = document.querySelectorAll(".stopPropagation div");
divStop.forEach((div) => div.addEventListener("click", sinPropagacion));

//Delegación

function delegacion(e) {
  e.stopPropagation();
  console.log(
    `Hola te saluda ${e.target.className}, el click lo originó ${e.target.className}`
  ); //El contexto de ejecución es el objeto window
}

document.addEventListener("click", (e) => {
  //console.log(`Click en ${e.target}`);

  if (e.target.matches(".delegacion div")) {
    //El método matches() comprueba si el Elemento HTML sería seleccionable por el selector CSS especificado en la cadena
    delegacion(e);
  }
});
