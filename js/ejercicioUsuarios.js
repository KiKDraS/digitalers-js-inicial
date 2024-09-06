/*
  Ejercicio - Mostrar en la ventana del navegador la lista de usuarios
*/

const mostrarUsuarios = () => {
  const table = document.getElementById("users");
  const arrUsers = JSON.parse(users);
  const rows = arrUsers
    .map(
      (user) => `
        <tr>
            <td>${user.nombre}</td>
            <td>${user.email}</td>
        </tr>
    `
    )
    .join("");

  table.innerHTML = `
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            ${rows}
        </tbody>
    `;
};
