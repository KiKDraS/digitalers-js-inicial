//Simulación de datos obtenido mediante petición HTTP
const users = getUserFromServer();

function getUserFromServer() {
  const users = [
    { nombre: "Pepe", email: "pepe@gmail.com" },
    { nombre: "Pepa", email: "pepa@gmail.com" },
    { nombre: "Pepin", email: "pepin@gmail.com" },
  ];

  //JSON.stringify - Convierte datos JS, en datos JSON
  return JSON.stringify(users);
}
