//Función para manejar las llamadas AJAX
function ajax(url, metodo) {
  const metodoHTTP = metodo || "GET";
  const xhr = new XMLHttpRequest();
  xhr.open(metodoHTTP, url);
  xhr.send();
  return xhr;
}

//Elemento HTML que incoporará las distintas plantillas traidas por AJAX
const main = document.querySelector("main");

//Generar hash dinámico según elementos en el header
const header = document.querySelector("header");
header.addEventListener("click", (e) => {
  e.preventDefault();
  const link = e.target;
  location.hash = link.id; //Redirección según hash
});

//Carga del Home
const home = ajax("../plantillas/home.html"); //LLamada AJAX para traer la plantilla
home.addEventListener("load", () => {
  if (home.status === 200) {
    main.innerHTML = home.response; //Incorporar el código HTML traido por AJAX
  }
});

//Escucha de cambio de hash
window.addEventListener("hashchange", () => {
  const path = location.hash.split("#")[1] || "home"; //Nombre dinámico de plantilla según hash
  const archivo = `../plantillas/${path}.html`; //URL dinámica para carga de plantilla

  //Carga de plantilla dinámica según cambio de hash
  const xhr = ajax(archivo);
  xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
      main.innerHTML = xhr.response;
    }
  });
});
