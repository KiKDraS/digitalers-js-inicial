//Mostrar por consola el nombre del navegador que se está utilizando

const navegador = navigator.userAgent;

const navegadores = ["Firefox", "Chrome", "Safari", "Opera", "Edge"];

for (const nav of navegadores) {
  if (navegador.indexOf(nav) > -1) console.log(nav);
}

//Imprimir los datos del array como elementos HTML

const usuarios = [
  {
    usuario: "Pepa",
    colores: ["violeta", "naranja", "marrón", "gris", "dorado"],
  },
  {
    usuario: "Pepe",
    colores: ["blanco", "azul", "rojo", "verde", "negro"],
  },
];

const div = document.querySelector("#array"); //Selección del elemento en que agregaremos los datos
const fragment = document.createDocumentFragment(); //Crear fragmento

usuarios.forEach((user) => {
  const h3 = document.createElement("h3");
  h3.className = "text-info";
  h3.innerText = `Colores de ${user.usuario}`;
  fragment.appendChild(h3);

  for (const color of user.colores) {
    const p = document.createElement("p");
    p.className = "text-info text-center text-uppercase";
    p.innerText = color;
    fragment.appendChild(p);
  }
});

div.className = "bg-secondary";
div.appendChild(fragment);

//Realizar un efecto marquesina en un nodo <p> que diga "Mi primer programa en JS" que muestre de a una letra a la vez cada medio segundo por letra

const texto = "Mi primer programa en JS";
const h3 = document.createElement("h3");
h3.innerHTML = "";
document.querySelector("#ejercicios").appendChild(h3);
let counter = 0;
const intervalo = setInterval(() => {
  if (counter < texto.length) {
    h3.innerText += texto[counter];
    counter++;
  } else {
    h3.innerText = "";
    counter = 0;
  }
}, 300);

/*
  Usando el siguiente Array:
  const vengadores = [
    {nombre: "Tony", apellido: "Stark", alias: "Iron-Man"},
    {nombre: "Steve", apellido: "Rogers", alias: "Capitan America"},
    {nombre: "Bruce", apellido: "Banner", alias: "Hulk"},
    {nombre: "Natasha", apellido: "Romanoff", alias: "Black Widow"},
    {nombre: "Clint", apellido: "Barton", alias: "Hawkeye"},
  ];
  1. Mostrar en pantalla el nombre, apellido y alias de todos los personajes
  2. Mostrar en pantalla el nomnbre, apellido y alias del personaje seleccionado
  3. La aplicación debe empezar mostrando todos los personajes y debe ser posible cambiar los elementos según se desea
*/

const vengadores = [
  { nombre: "Tony", apellido: "Stark", alias: "Iron-Man" },
  { nombre: "Steve", apellido: "Rogers", alias: "Capitan America" },
  { nombre: "Bruce", apellido: "Banner", alias: "Hulk" },
  { nombre: "Natasha", apellido: "Romanoff", alias: "Black Widow" },
  { nombre: "Clint", apellido: "Barton", alias: "Hawkeye" },
];

//Elementos del HTML
const tbody = document.getElementById("personajes");
const btn = document.getElementById("todos");
const select = document.getElementById("selectPersonaje");

//Función para generar fila
const fila = (personaje) => {
  return `<tr>
            <td>${personaje.nombre}</td>
            <td>${personaje.apellido}</td>
            <td>${personaje.alias}</td>
          </tr>`;
};

const mostrarTodos = () =>
  (tbody.innerHTML = vengadores.map((personaje) => fila(personaje)).join(""));

const mostrarUno = (alias) => {
  const personaje = vengadores.find((personaje) => personaje.alias === alias);
  console.log(personaje);
  tbody.innerHTML = fila(personaje);
};

//Mostrar Selección
select.addEventListener("change", () => {
  mostrarUno(select.value);
});

//Mostrar Todos
btn.addEventListener("click", mostrarTodos);

//Mostrar todos los personajes cuando carga la página
window.addEventListener("DOMContentLoaded", mostrarTodos);

/*
  Dado el siguiente Array
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  1. Mostrar los números pares
  2. Permitir que el usuario pueda alternar entre ver números pares e impares
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Elementos del HTML
const contenedor = document.getElementById("valores");
const btnValores = document.getElementById("alternar");

//Función para generar vista
const mostrarNumeros = (tipo) => {
  if (tipo === "Pares") {
    const pares = numeros.filter((num) => num % 2 === 0);
    contenedor.innerHTML = pares
      .map(
        (num) =>
          `<p class="text-center fs-1 bg-info text-light m-0 mb-2">${num}</p>`
      )
      .join("");
  } else {
    const impares = numeros.filter((num) => num % 2 === 1);
    contenedor.innerHTML = impares
      .map(
        (num) =>
          `<p class="text-center fs-1 bg-info text-light m-0 mb-2">${num}</p>`
      )
      .join("");
  }
};

//Alternar números
btnValores.addEventListener("click", () => {
  switch (btnValores.textContent) {
    case "Impares":
      mostrarNumeros("Impares");
      btnValores.textContent = "Pares";
      break;
    case "Pares":
      mostrarNumeros("Pares");
      btnValores.textContent = "Impares";
      break;
  }
});

//Mostrar números pares al cargar la pantalla
window.addEventListener("DOMContentLoaded", () => mostrarNumeros("Pares"));
