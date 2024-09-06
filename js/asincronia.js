/*
  Proceso sincrónico === Línea que se lee, acción que se ejecuta
*/

// Cuando llegues a leer la línea 6 del archivo asincronia.js. Quiero que me muestres en consola qué hay en la constante users.
// console.log(users);

/*
  Proceso asincrónico === Esperar que pase algo antes de ejecutar una acción, sin dejar de realizar otras acciones
*/

// Cuando el documento y todos sus recursos están listos, ejecutar la función
window.addEventListener("load", () => {
  // Cuando llegues a leer la línea 32 del archivo index.js. Quiero que me muestres en consola qué hay en la constante users.
  console.log(users);
});

/*
  Javascript y la asincronía
    -> JS es un lenguaje sincrónico single threaded === No puede realizar más de una acción al mismo tiempo
    -> https://www.jsv9000.app/
*/

function program() {
  function dos() {
    function cbDos() {
      console.log("dos");
    }
    setTimeout(cbDos, 0);
  }

  function uno() {
    function cbUno() {
      console.log("uno");
    }
    setTimeout(cbUno, 1000);
    dos();
    console.log("tres");
  }

  console.log("Inicio");
  uno();
  console.log("fin");
}

// program()

/*
  Peticiones HTTP - Requiere de un tipo de trabajo con asincronía

  Objeto XMLHttpRequest
    -> Permite la comunicación cliente(browser)/servidor
    -> Eventos del Objeto XMLHttpRequest
      -> load - Mensaje: "El servidor envío la respuesta"
        -> Obtener respuesta del servidor NO ES LO MISMO que obtener los datos
        -> La comunicación cliente/servidor se realiza de forma satisfactoria. Incluye respuestas 400 y 500 del servidor
      -> error - Mensaje: "Hubo un error en la comunicación. El servidor NO PUDO enviar la respuesta"
        -> Este evento se ejecuta en caso de que no haya internet


  Respuestas del servidor === status
    -> 100 - 199 - Respuestas informativas
    -> 200 - 299 - Respuestas exitosas. El servidor pudo realizar la acción solicitada en la petición
      -> 200 - Todo ok (Se realizó correctamente la acción requerida)
      -> 201 - El recurso se creó correctamente (Se usa con los POST)
      -> 204 - El recurso se eliminó correctamente (Se usa con el DELETE)
    -> 300 - 399 - Redirecciones. El cliente debe redireccionarse a otro recurso
    -> 400 - 499 - Errores del cliente. El cliente envió una petición incorrecta
      -> 404 - Revisar la URL porque la escribimos mal
      -> 403/401 - Relacionados a autorización. No se puede realizar la petición 
    -> 500 - 599 - Errores del servidor. El servidor no pudo procesar la petición correctamente    
      -> 503 - El servidor está caído o no está disponible. El cliente debe intentar más tarde

  API REST
    -> Servicio Web que permite que un cliente le realice peticiones utilizando los verbos AJAX (GET, POST, PUT, DELETE)
    -> Método === Verbo AJAX  
*/

function getUsers() {
  // La URL que usamos es la que en el navegador muestra los datos del JSON
  const url = "https://jsonplaceholder.typicode.com/users";

  //1.- Crear Objeto XMLHttpRequest
  const xhr = new XMLHttpRequest();

  //2.- Configurar el tipo de petición
  xhr.open("GET", url);

  //3.- Agregar evento de respuesta
  const cbRespuestaServidor = () => {
    // Validar la respuesta del servidor
    if (xhr.status === 200) {
      //Tengo el JSON
      const json = xhr.responseText;
      showUsers(JSON.parse(json));
    } else {
      //No tengo el JSON
      showError();
    }
  };

  xhr.addEventListener("load", cbRespuestaServidor);

  const cbSinRespuesta = () => {
    console.log("Sin internet, no funciona");
  };

  xhr.addEventListener("error", cbSinRespuesta);

  //4.- Enviar la petición
  xhr.send();
}

function showUsers(users) {
  const table = document.getElementById("usersJSONPlaceholder");
  table.innerHTML = users
    .map(
      (user) => `
      <tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
      </tr>
  `
    )
    .join("");
  table.style.display = "table";

  const loader = document.getElementById("loader");
  loader.style.display = "none";
}

function showError() {
  const p = document.getElementById("errorJSONPlaceholder");
  p.textContent = "Hubo un error al cargar los datos";
  p.style.display = "block";

  const table = document.getElementById("usersJSONPlaceholder");
  table.style.display = "none";
}
