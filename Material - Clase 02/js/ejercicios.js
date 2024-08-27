//Modificar el estilo css según el tamaño de pantalla. La pantalla debe cargar con el estilo correspondiente (eventos load y resize)

const body = document.querySelector("#wrapper");

const theme = () => {
  if (outerWidth < 760) {
    body.classList.remove("tablet");
    body.classList.remove("pc");
    body.classList.add("celular");
  } else if (outerWidth > 760 && outerWidth < 1200) {
    body.classList.remove("celular");
    body.classList.remove("pc");
    body.classList.add("tablet");
  } else {
    body.classList.remove("celular");
    body.classList.remove("tablet");
    body.classList.add("pc");
  }
  window.removeEventListener("load", theme);
};

window.addEventListener("load", theme);
window.addEventListener("resize", theme);

//Hacer una galería de imágenes
const imgCentral = document.querySelector(".imgCentral");

cambiarImagen = (e) => imgCentral.setAttribute("src", e.target.src); //Función que maneja el cambio de imagenes

recorrerGaleria = (e) => {
  const src = imgCentral.getAttribute("src");

  //Función que maneja el recorrido de la galeria mediante las flechas
  if (e.target.classList.contains("flechaIzquierda")) {
    let numImgActual = src.length - 5;
    numImgActual = Number(src[numImgActual]);
    let numImgNueva = numImgActual - 1;

    if (numImgNueva == 0) numImgNueva = 7;
    imgCentral.setAttribute("src", `images/galeria-${numImgNueva}.jpg`);
  } else {
    let numImgActual = src.length - 5;
    numImgActual = Number(src[numImgActual]);
    let numImgNueva = numImgActual + 1;

    if (numImgNueva == 8) numImgNueva = 1;
    imgCentral.setAttribute("src", `images/galeria-${numImgNueva}.jpg`);
  }
};

//Escuchas de Evento
document.addEventListener("click", (e) => {
  if (e.target.matches(".flecha")) recorrerGaleria(e);

  if (e.target.matches(".lista img")) cambiarImagen(e);
});

//Acceso a Elementos Dinámicos mediante Delegación de Eventos
const btnEjercicios = document.querySelector("#btnDinamico");
console.log(btnEjercicios); //null porque todavía no se crea el elemento

document.querySelector("#elemDinamico").addEventListener("click", (e) => {
  const btn = e.target;

  if (btn.matches("#btnDinamico")) {
    document.getElementById("h2Dinamico").textContent =
      "Es posible agregar una escucha al botón y modificar este texto gracias a la delegación de eventos";
  }
});
