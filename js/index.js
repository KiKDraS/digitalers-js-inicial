/*
  Condicional - Buscar el true     
    -> if
    -> switch
    -> ternario  
  Bucles - La condición true, debe convertirse en false
    -> Si la condición NUNCA se convierte en false. Error de bucle infinito
    -> for - Uso más común: Recorrer arrays
    -> while - Uso más común: Validar        
    -> do-while - Uso más común: Ingreso de datos
      -> Característica distintiva - Aunque la condición sea false, se ejecuta 1 vez
*/

var colores = ["Rojo", "Amarillo", "Verde", "Violeta"];
// console.log(colores[0]);
// console.log(colores[1]);
// console.log(colores[2]);

//Longitud === Cantidad de elementos (4)
//índices: 0, 1, 2, 3

console.log("Ejemplo 1");
for (var i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

console.log(" ");
console.log("Ejemplo 2");
var ultimoIndice = colores.length - 1;
for (var i = 0; i <= ultimoIndice; i++) {
  console.log(colores[i]);
}

console.log(" ");
console.log("Ejemplo 3");
var div = document.getElementById("objHTML");

for (var i = 3; i >= 0; i--) {
  // console.log(colores[i]);
  // console.log(div.innerHTML);
  div.innerHTML = div.innerHTML + "<h4>" + colores[i] + "</h4>";
  // div.innerHTML += "<h4>" + colores[i] + "</h4>";
}

console.log(" ");
console.log("while");

var num = parseInt("asdasd");

while (Number.isNaN(num)) {
  console.log(num);
  num = parseInt("2");
}

/*
  Espacios de Almacenamiento
    => Variable - Una caja que guarda un dato
      -> Simples - number, string, boolean, etc...
      -> Compuestos - array, objetos literales, etc...
        -> Array - Caja que guarda datos. Los datos guardados se "etiquetan" con un número (índice) que permite identificar al dato de forma individual para trabajar            
          -> En JS, el primer dato de un Array tiene el índice 0. El resto se acomoda de forma SECUENCIAL. El segundo tiene el índice 1, el tercero el índice 2  
        -> Objeto literal - Caja que guarda datos. Los datos guardados se "etiquetan" con el nombre que el programado desee
        
        
  Programación Orientada a Objetos (POO)
    => Clase - Plantilla
    => Objeto - Una copia de la plantilla con los datos que corresponda       
*/

console.log(" ");
console.log("Objetos literales");

var obj = {
  nombre: "Pepe",
  apellido: "Peposo",
  edad: 30,
};

//Notación de punto - La más común
console.log(obj.nombre); //Quiero ver en consola que hay guardado en la clave nombre del objeto guardado en la variable obj

obj.nombre = "Pepa";
console.log(obj.nombre);

//Notación de corchete - Cuando necesitamos acceder a las claves de forma dinámica

/* var numIngresado = parseInt(
  prompt(
    "Ingrese el número 1 para ver el nombre. El 2 para ver el apellido. O el 3 para ver la edad"
  )
);

while (Number.isNaN(numIngresado) || numIngresado < 1 || numIngresado > 3) {
  numIngresado = parseInt(
    prompt(
      "Ingrese el número 1 para ver el nombre. El 2 para ver el apellido. O el 3 para ver la edad"
    )
  );
}

var nombreClave;

if (numIngresado === 1) {
  nombreClave = "nombre";
} else if (numIngresado === 2) {
  nombreClave = "apellido";
} else if (numIngresado === 3) {
  nombreClave = "edad";
} else {
  console.log("Revisa la lógica que algo se rompió");
}

console.log(obj[nombreClave]); */
// console.log(obj["apellido"]);

while (false) {
  console.log("Estoy en el while");
}

do {
  console.log("Estoy en el do-while");
} while (false);

/*
  Programa - Permitir el "almacenaje" de usuarios y mostrar en pantalla la lista de todos los usuarios ingresados. No debe haber 2 usuarios con el mismo nombre. Ningún usuario puede tener la contraseña vacía. Se debe ingresar, al menos 1 usuario completo. No hay límite a la cantidad de usuarios a ingresar.


  ¿Qué necesito?
   -> Una forma de guardar usuarios (dato nombre y dato contraseña)
      -> var usuario = {nombre: "", password: ""}; 
      -> var listaUsuarios = [usuario, usuario];
   -> Una forma de utilizar todos los usuarios guardados
      -> Bucle for para recorrer el array listaUsuarios    
   -> Una forma de solicitar el ingreso de los datos nombre y contraseña   
      -> Bucle do-while para manejo de ingreso de los datos
   -> Validaciones
      -> Nombre - No debe repetirse entre usuarios
      -> Contraseña - No puede estar vacía   
*/

var listaUsuarios = [];

do {
  var usuario = { nombre: "", password: "" };

  usuario.nombre = prompt("Ingrese nombre de usuario");
  for (var i = 0; i < listaUsuarios.length; i++) {
    var usuarioEnLista = listaUsuarios[i];

    while (usuarioEnLista.nombre === usuario.nombre) {
      usuario.nombre = prompt(
        "Nombre repetido. Ingrese otro nombre de usuario"
      );
    }
  }

  usuario.password = prompt("Ingrese contraseña del usuario");
  while (usuario.password === "" || usuario.password === null) {
    usuario.password = prompt(
      "Contraseña vacía. Ingrese una contraseña válida"
    );
  }

  listaUsuarios.push(usuario);

  var continuar = confirm("Ingresar otro usuario?");
  //Si apreta "aceptar" continuar = true
  //Si apreta "cancelar" continuar = false
} while (continuar);

// console.log(listaUsuarios);

var tbody = document.getElementById("usuarios");

for (var i = 0; i < listaUsuarios.length; i++) {
  var usuario = listaUsuarios[i];

  tbody.innerHTML +=
    "<tr><td>" +
    usuario.nombre +
    "</td> <td>" +
    usuario.password +
    "</td></tr>";
}
