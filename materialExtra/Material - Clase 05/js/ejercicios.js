//Función AJAX
function ajax(url, metodo) {
  let metodoHTTP = metodo || "GET";
  let xhr = new XMLHttpRequest();
  xhr.open(metodoHTTP, url);
  xhr.send();
  return xhr;
}

//Carga del Home
const main = document.querySelector(".main");

const home = ajax("plantillasEjercicios/home.html"); //http://127.0.0.1:5500/plantillasEjercicios/home.html
home.addEventListener("load", () => {
  if (home.status === 200) {
    main.innerHTML = home.response;
  }
});

main.addEventListener("submit", (e) => {
  e.preventDefault();

  //Carga de página de usuario
  const h3 = document.querySelector("h3");
  const login = new XMLHttpRequest();

  login.open("get", "bd.json");
  login.send();

  login.addEventListener("load", () => {
    if (login.status == 200) {
      let res = login.response;
      res = JSON.parse(res);

      const dataForm = document.querySelectorAll("form input");
      let userEncontrado = false;

      for (const user of res) {
        if (
          user.user === dataForm[0].value &&
          user.pass === dataForm[1].value
        ) {
          const archivo = `plantillasEjercicios/${user.role}.html`;
          const xhr = ajax(archivo);
          xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
              main.innerHTML = xhr.response;
              history.pushState(
                {
                  template: xhr.response,
                },
                "",
                user.role
              );
            }
          });
          userEncontrado = true;
          break;
        }
      }

      if (userEncontrado === false && h3 === null) {
        const h3 = document.createElement("h3");
        h3.className = "mt-4 text-center text-danger";
        h3.innerHTML = "Loguin Incorrecto";
        document.querySelector("form").insertAdjacentElement("afterend", h3);
      }
    } else {
      h3.innerHTML = "No pudimos conectarte";
    }
  });
});

//Manejo de botón salir
main.addEventListener("click", (e) => {
  const btn = e.target;

  if (btn.classList.contains("logOut")) {
    const xhr = ajax("plantillasEjercicios/home.html");

    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        main.innerHTML = xhr.response;
        history.pushState(
          {
            template: xhr.response,
          },
          "",
          "home"
        );
      }
    });
  }
});

//Manejo de rutas
window.addEventListener("popstate", (e) => {
  if (e.state.template) {
    main.innerHTML = e.state.template;
  } else {
    const path = location.pathname.split("/")[2] || "home";
    const archivo = `plantillasEjercicios/${path}.html`;

    const xhr = ajax(archivo);
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        main.innerHTML = xhr.response;
      }
    });
  }
});
