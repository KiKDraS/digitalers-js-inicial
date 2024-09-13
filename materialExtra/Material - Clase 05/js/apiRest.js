//Api Usada
//https://62633b22c430dc560d2cf4d6.mockapi.io/users

/*
    Función AJAX para  configurar llamada
        => url - Toma el endpoint al que se hará la llamada
        => método - Toma el Método REST necesario para la llamada
        => data - Toma la data necesaria para la petición
*/
function ajax(url, metodo, data) {
  const metodoHTTP = metodo || "GET"; //Genera un valor por default para método
  const xhr = new XMLHttpRequest();
  xhr.open(metodoHTTP, url);
  if (data) {
    xhr.setRequestHeader("Content-Type", "application/json"); //Configuración requerida para la llamada
    xhr.send(JSON.stringify(data)); //Conversión de la data a enviar a JSON
  } else {
    xhr.send();
  }
  return xhr;
}

/*Pedir*/
const users = ajax("https://62633b22c430dc560d2cf4d6.mockapi.io/users");

users.addEventListener("load", () => {
  console.log("Recibir datos");
  console.log(users.status);
  console.log(JSON.parse(users.response)); //200 - ok
  console.log(JSON.parse(users.response).data);
});

/*Enviar*/
const nuevoUser = {
  userName: "Pepe",
  password: "Peposo",
  role: "Admin",
};

const agregarUser = ajax(
  "https://62633b22c430dc560d2cf4d6.mockapi.io/users",
  "POST",
  nuevoUser
);

agregarUser.addEventListener("load", () => {
  console.log("Enviar datos");
  console.log(agregarUser.status); //201 - created
  console.log(JSON.parse(agregarUser.response));
});

/*Modificar*/
const usuarioModificado = {
  userName: "Pepito",
  password: "Peposo",
  role: "Admin",
};

const modificarUser = ajax(
  "https://62633b22c430dc560d2cf4d6.mockapi.io/users/:id",
  "PUT",
  usuarioModificado
);

modificarUser.addEventListener("load", () => {
  console.log("Modificar datos");
  console.log(modificarUser.status); //200 - ok
  console.log(JSON.parse(modificarUser.response));
});

/*Eliminar*/
const eliminarUser = ajax(
  "https://62633b22c430dc560d2cf4d6.mockapi.io/users/:id",
  "DELETE"
);

eliminarUser.addEventListener("load", () => {
  console.log("Eliminar dato");
  console.log(eliminarUser.status); //204 - sin contenido
});
