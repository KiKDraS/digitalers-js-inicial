//Función para manejar la llamada AJAX
function ajax(url, metodo) {
  const metodoHTTP = metodo || "GET";
  const xhr = new XMLHttpRequest();
  xhr.open(metodoHTTP, url);
  xhr.send();
  return xhr;
}

//Elemento HTML que incoporará las distintas plantillas traidas por AJAX
const main = document.querySelector("main");

//Generar state dinámico según elementos en el header
const header = document.querySelector("header");
header.addEventListener("click", (e) => {
  e.preventDefault();
  const link = e.target;
  const archivo = `../plantillas/${link.id}.html`; //URL de archivo dinámica

  const xhr = ajax(archivo);
  xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
      main.innerHTML = xhr.response;
      history.pushState(
        {
          template: xhr.response, //Generar un objeto template
        },
        "",
        link.id
      );
      //1ro - objeto de estado; 2do - título (puede no estar soportado); 3ro - nombre de ruta
    }
  });
});

//Carga del Home
const home = ajax("../plantillas/home.html");
home.addEventListener("load", () => {
  if (home.status === 200) {
    main.innerHTML = home.response;
  }
});
