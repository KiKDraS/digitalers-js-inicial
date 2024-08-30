/*
    1 - Crear un formulario de contacto en HTML y validarlo
    2 - Crear un formulario de registro en HTML y validarlo. El nombre de usuario no puede contener espacios y sólo debe aceptar letras y números, sin caracteres especiales; la contraseña debe contener al menos 1 caracter especial (@$?_\-¡!), 1 número, 1 mayúscula y entre 8 y 16 caracteres. 
*/

/*Formulario de contacto */

//Validar el contenido
document.querySelector("#contacto").addEventListener("input", (e) => {
  const inputs = document.querySelectorAll(
    "#contacto input, #contacto textarea"
  );

  inputs.forEach((input) => {
    /*Validaciones*/
    if (e.target === input) {
      let span = document.querySelector(`#${input.id}Span`);

      //Creación dinámica del span para mostrar error de validación
      if (!span) {
        let spanVirtual = document.createElement("span");
        spanVirtual.id = `${input.id}Span`;
        spanVirtual.classList.add("error", "none");
        spanVirtual.textContent = input.title;
        span = spanVirtual;
        input.insertAdjacentElement("afterend", span);
      }

      //Validaciones
      let validacion;
      switch (input.id) {
        case "nombre":
          validacion = input.value
            .trim()
            .match(/^[a-zA-Z\u00C0-\u017F\s]{2,50}$/g);
          break;
        case "email":
          validacion = input.value.trim().match(/[-.\w]+@([\w-]+\.)+[\w-]+/g);
          break;
        case "comentario":
          validacion = input.value.trim().match(/^.{0,250}$/);
          break;
      }

      //Agregar contenido al span de error
      if (span.textContent !== input.title) span.textContent = input.title;

      //Ocultar el span de error cuando sea necesario
      validacion === null && input.value !== ""
        ? span.classList.remove("none")
        : span.classList.add("none");
    }
  });
});

//Validar campos obligatorios
document.querySelector("#contacto").addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = document.querySelectorAll(
    "#contacto input, #contacto textarea"
  );

  inputs.forEach((input) => {
    if (input.name === "nombre" || input.name === "email") {
      let span = document.querySelector(`#${input.id}Span`);

      if (!span) {
        let spanVirtual = document.createElement("span");
        spanVirtual.id = `${input.id}Span`;
        spanVirtual.classList.add("error", "none");
        spanVirtual.textContent = "Campo Requerido";
        span = spanVirtual;
        input.insertAdjacentElement("afterend", span);
      }

      if (span.textContent !== "Campo Requerido")
        span.textContent = "Campo Requerido";

      if (input.value === "") span.classList.remove("none");
    }
  });
});

/*Formulario de registro*/

//Validar Contenido
document.querySelector("#registro").addEventListener("change", (e) => {
  const inputs = document.querySelectorAll("#registro input");

  inputs.forEach((input) => {
    /*Validaciones*/
    if (e.target === input) {
      let span = document.querySelector(`#${input.id}Span`);

      if (!span) {
        let spanVirtual = document.createElement("span");
        spanVirtual.id = `${input.id}Span`;
        spanVirtual.classList.add("error", "none");
        spanVirtual.textContent = input.title;
        span = spanVirtual;
        input.insertAdjacentElement("afterend", span);
      }

      let validacion;
      switch (input.id) {
        case "user":
          validacion = input.value.trim().match(/^[a-zA-Z0-9]+$/g);
          break;

        case "emailRegistro":
          validacion = input.value.trim().match(/[-.\w]+@([\w-]+\.)+[\w-]+/g);
          break;

        case "emailRepetir":
          let mail = document.querySelector("#emailRegistro");
          input.value.trim() === mail.value.trim()
            ? (validacion = true)
            : (validacion = false);
          break;

        case "pass":
          validacion = input.value.trim().match(/^[A-Za-z\d@$?_\-¡!]{8,16}$/g);
          break;

        case "passRepetir":
          let pass = document.querySelector("#pass");
          input.value.trim() === pass.value.trim()
            ? (validacion = true)
            : (validacion = false);
          break;
      }

      if (span.textContent !== input.title) span.textContent = input.title;

      (validacion === null || validacion === false) &&
      (input.value !== "" || input.value.includes(" "))
        ? span.classList.remove("none")
        : span.classList.add("none");
    }
  });
});

//Validar compos obligatorios
document.querySelector("#registro").addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = document.querySelectorAll("#registro input");

  inputs.forEach((input) => {
    let span = document.querySelector(`#${input.id}Span`);

    if (!span) {
      let spanVirtual = document.createElement("span");
      spanVirtual.id = `${input.id}Span`;
      spanVirtual.classList.add("error", "none");
      spanVirtual.textContent = "Campo Requerido";
      span = spanVirtual;
      input.insertAdjacentElement("afterend", span);
    }

    if (span.textContent !== "Campo Requerido")
      span.textContent = "Campo Requerido";

    if (input.value === "") span.classList.remove("none");
  });
});
