const h2 = document.createElement("h2");
h2.textContent =
  "Soy un elemento creado desde JS y, por lo tanto, no existo en el HTML";
h2.id = "h2Dinamico";

const btn = document.createElement("button");
btn.textContent = "Hace Click para cambiar el texto";
btn.id = "btnDinamico";

const fragment = document.createDocumentFragment();
fragment.appendChild(h2);
fragment.appendChild(btn);

document.getElementById("elemDinamico").appendChild(fragment);
