/*
    Single Page Application
        -> No tienen más de un archivos HTML, uno CSS y uno JS
        -> Cargan todo junto la primera vez y después no cargan más
        -> Se maneja con JavaScript y no con HTML
        -> Las SPA tiene vistas (views)
*/

import { navigateTo } from "./navigateTo.js";
import { renderPage } from "./renderPage.js";

export default async function SPA() {
  const root = document.getElementById("root");
  root.innerHTML = await renderPage("home");

  //   document.addEventListener("click", ({ target }) => {
  //     const routes = ["home", "about", "contact"];
  //     const id = target.id;

  //     if(routes.includes(id)) {

  //     }
  //   })

  document.addEventListener("click", async (e) => {
    const { target } = e; //=> const target = e.target;
    const id = target.id;
    const routes = ["home", "about", "contact"];

    if (routes.includes(id)) {
      e.preventDefault();
      const url = target.attributes.href.value; //Ir a buscar el valor que está escrito en el href del elemento a

      //Modifica la ruta
      navigateTo(url);
      //Modifica la vista para que coincida con la ruta
      root.innerHTML = await renderPage(id);
    }
  });

  // Cambiar vista cuando se hace click en los botones de back/forward
  window.addEventListener("popstate", async () => {
    const path = location.pathname.replace("/", "");
    root.innerHTML = await renderPage(path);
  });
}
