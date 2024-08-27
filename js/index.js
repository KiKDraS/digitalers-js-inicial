/*
  Función Callback 
    -> Función que se pasa como Argumento de otra para que esta ejecute

  Función de Primer Orden
    -> Función que recibe una Función como Argumento y/o retorna una función  
*/

function fnPrimerOrden(callback) {
  callback();
}

fnPrimerOrden(() => {
  console.log("Función Callback ejecutada");
});

/*
  Métodos del Objeto Array


  POO (Programación Orientada a Objetos)
    -> Clases (plantillas)
    -> Objetos (copias de las plantillas)
      -> Objeto HTML
      -> Objeto Date
      -> Objeto Event
      -> Objeto Array 

  Objetos Planos
    -> Elementos de almacenamiento  

  Arrays
    -> Espacio de almacenamiento multiple. Permite almacenar muchos datos (conjunto de elementos)
    -> Crear un Array me permite utilizar funciones que son propias del Lenguaje JavaScript (Métodos del Objeto Array)
      -> Todos los métodos del Objeto Array son funciones de Primer Orden 
        -> Son funciones que reciben callbacks
*/

const colores = ["Rojo", "Amarillo", "Verde"];
//La constante colores, almacena un Objeto Array

//forEach - Recibe una callback para que se ejecute con cada valor almacenado dentro el array. La callback debe recibir, al menos, un parámetro para almacenar el valor de esa iteración. De forma opcional, se puede pasar un segundo parámetro para hacer uso del índice

console.log(" ");
console.log("forEach");

function logColor(color) {
  console.log(color);
}

// for (let color of colores) {
//   logColor(color);
// }

// function paraCada(cb) {
//   for (let i = 0; i < colores.length; i++) {
//     const element = colores[i];
//     cb(element);
//   }
// }

// paraCada(logColor);

colores.forEach(logColor);
console.log(" ");
colores.forEach(function (color, i) {
  console.log(`Hola, soy el color: ${color}. Estoy en el índice: ${i}`);
});
console.log(" ");
colores.forEach((color) => {
  console.log(`Soy el ${color}`);
});

//map - Recibe una callback para que se ejecute con cada valor almacenado dentro el array. La callback debe recibir, al menos, un parámetro para almacenar el valor de esa iteración. De forma opcional, se puede pasar un segundo parámetro para hacer uso del índice. Cuando se ejecuta la función map, esta retorna un nuevo array que usa los valores almacenados en el original para crear nueva información

console.log(" ");
console.log("map");

const certificados = [
  { nombre: "JavaScript", nota: 95, fecha: "26/08/2024" }, //i = 0
  { nombre: "HTML", nota: 80, fecha: "27/08/2024" }, //i = 1
  { nombre: "CSS", nota: 90, fecha: "28/08/2024" }, //i = 2
];

function mapear(cb) {
  const arr = [];

  for (let i = 0; i < certificados.length; i++) {
    const element = certificados[i];
    const retornoCB = cb(element);
    arr.push(retornoCB);
  }

  return arr;

  /*
    [
      "<article>
        <h4>JavaScript</h4>
        <p>Nota: 95</p>
        <p>Fecha de expedición: 26/08/2024</p>
      </article>",
      "<article>
        <h4>HTML</h4>
        <p>Nota: 80</p>
        <p>Fecha de expedición: 27/08/2024</p>
      </article>",
      "<article>
        <h4>CSS</h4>
        <p>Nota: 90</p>
        <p>Fecha de expedición: 28/08/2024</p>
      </article>",
    ]
  */
}

function cbMapear(certificado) {
  return `<article>
    <h4>${certificado.nombre}</h4>
    <p>Nota: ${certificado.nota}</p>
    <p>Fecha de expedición: ${certificado.fecha}</p>
  </article>`;
}

const nuevoArray = mapear(cbMapear);
console.log(nuevoArray);

const divCertificados = document.querySelector("#certificados");
const convertirArrayAString = nuevoArray.join("");
//innerHTML requiere datos de tipo string
divCertificados.innerHTML = convertirArrayAString;

const divCertificadosMap = document.querySelector("#certificadosMap");

// const nuevoArrayMap = certificados.map(function (certificado) {
//   return `<article>
//     <h4>${certificado.nombre}</h4>
//     <p>Nota: ${certificado.nota}</p>
//     <p>Fecha de expedición: ${certificado.fecha}</p>
//   </article>`;
// });

// divCertificadosMap.innerHTML = nuevoArrayMap.join("");

const article = function (certificado) {
  return `<article>
  <h4>${certificado.nombre}</h4>
  <p>Nota: ${certificado.nota}</p>
  <p>Fecha de expedición: ${certificado.fecha}</p>
</article>`;
};

divCertificadosMap.innerHTML = certificados.map(article).join("");

//filter - Al usar filter, creo un nuevo array. La callback de filter debe retornar un boolean para saber si es necesario incluir el elemento actual en el nuevo array

console.log(" ");
console.log("filter");

const usuarios = [
  { nombre: "Pepe", pass: 1234, id: 1 }, //i = 0
  { nombre: "Pepa", pass: 1234, id: 2 }, //i = 1
  { nombre: "Pepin", pass: 1234, id: 3 }, //i = 2
];

function filtrar(cb) {
  const arr = [];

  for (let i = 0; i < usuarios.length; i++) {
    const element = usuarios[i];
    const retornoCB = cb(element);
    if (retornoCB) {
      arr.push(element);
    }
  }

  return arr;

  /*
    [
      { nombre: "Pepe", pass: 1234, id: 1 },
      { nombre: "Pepin", pass: 1234, id: 3 },
    ]
  */
}

//Quiero dejar todos los usuarios que NO tengan el id: 2
function cbFiltrar(usuario) {
  //Debe retornar true cuando el id NO es 2
  return usuario.id !== 2;
}

const usuariosFiltrados = filtrar(cbFiltrar);
console.log(usuariosFiltrados);

const usersFilter = usuarios.filter((user) => user.id !== 2);
console.log(usersFilter);

//find - La callback de find debe retornar un boolean para saber si es necesario retornar el elemento

console.log(" ");
console.log("find");

const cart = [
  { nombre: "Coca-Cola", precio: 1.5, cantidad: 5, id: 1 }, //i = 0
  { nombre: "Pepsi", precio: 1.5, cantidad: 3, id: 2 }, //i = 1
  { nombre: "Sprite", precio: 1.5, cantidad: 7, id: 3 }, //i = 2
];

function buscar(cb) {
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    const retornoCB = cb(element);
    if (retornoCB) {
      return element;
    }
  }
}

//Buscar el producto "Sprite" - id: 3
function cbBuscar(producto) {
  return producto.id === 3;
}

const productoEncontrado = buscar(cbBuscar);
console.log(productoEncontrado);

const product = cart.find((product) => product.id === 3);
console.log(product);

//includes

console.log(" ");
console.log("includes");

const numbers = [1, 2, 3, 4, 5];

function incluye(cb) {
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const retornoCB = cb(element);
    if (retornoCB) return true;
  }
}

//Quiero saber si el 3 se encuentra en el array numbers
function cbIncluye(numero) {
  return numero === 3;
}

console.log(
  "El valor 3 se encuentra en el array numbers?",
  numbers.includes(3)
);

console.log(
  "El valor 6 se encuentra en el array numbers?",
  numbers.includes(6)
);

const isInclude = numbers.includes(3);
console.log("El valor 3 se encuentra en el array numbers?", isInclude);
