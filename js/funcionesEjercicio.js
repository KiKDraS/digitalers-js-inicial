function generarUsuario() {
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

  return usuario; //return permite usar el valor almacenado dentro de la variable usuario por fuera de la función generarUsuario
}

function mostrarUsuarios() {
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
}
