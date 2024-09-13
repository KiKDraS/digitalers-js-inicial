const fnFetch = () => {
  /*
        fetch(url, config) - Herramienta que combina el Objeto Promise con el Objeto XMLHttpRequest
            -> Función utilizada para realizar Peticiones AJAX trabajando con Promesas
            -> Parámetro de fetch
                -> url === lugar dónde se encuentra la información que vamos a manipular
                -> config === Objeto con la información necesaria para la petición
                    -> Se puede omitir cuando trabajamos con el Verbo GET

        Petición AJAX
            -> Ir a buscar información usando internet
            -> Comunicación con los servidores que tienen la información
            -> Se puede dividir en "pregunta" y "respuesta"
                -> "Pregunta" === Qué verbo REST utilizamos
                -> "Respuesta" === Status del servidor
            -> Son código asincrónico    
            -> Una Petición AJAX sólo falla cuando no puedo hacer la pregunta (ej. No tengo internet)

                
        Verbos REST
            -> GET - ¿Tenes esta información?
            -> POST - ¿Podes guardar esta información?
            -> PUT/PATCH - ¿Podes modificar esta información?
            -> DELETE - ¿Podes eliminar esta información?    
            
        Status
            -> 100 - 199 - Respuestas informativas
            -> 200 - 299 - Respuestas exitosas. El servidor pudo realizar la acción solicitada en la peticiónDELETE)
            -> 300 - 399 - Redirecciones. El cliente debe redireccionarse a otro recurso
            -> 400 - 499 - Errores del cliente. El cliente envió una petición incorrecta
            -> 500 - 599 - Errores del servidor. El servidor no pudo procesar la petición correctamente     


            
    */

  let users = [];

  function showUsers() {
    const ul = document.getElementById("users");
    ul.innerHTML = users.map((user) => `<li>${user.name}</li>`).join("");
  }

  const promise = fetch("https://jsonplaceholder.typicode.com/users");
  //fetch("https://jsonplaceholder.typicode.com/users", {method: "GET"})

  promise
    .then((respuestaServidor) => {
      //Trabajando con AJAX "SIEMPRE" vamos a tener el primer then
      console.log(respuestaServidor);

      //Validar que el servidor haya sido capaz de responder mi pregunta === Analizar el status de la respuesta
      if (!respuestaServidor.ok)
        throw new Error("Error en el fetch de los datos");

      //Si todo está bien, transformar la respuesta del servidor a un Objeto JS
      return respuestaServidor.json();
    })
    .then((objJS) => {
      //Aquí trabajamos con los datos que nos llegaron del servidor
      console.log(objJS);
      users = objJS;
      showUsers();
    })
    .catch((err) => console.log(err));

  //   showUsers();
};
