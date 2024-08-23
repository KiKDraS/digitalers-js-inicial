/*BOM - Browser Object Model*/
console.log(window); //=> Valor this por defecto
console.log(innerHeight); //=> Alto del documento
console.log(innerWidth); //=> Ancho del documento
console.log(outerHeight); //=> Alto de la ventana
console.log(outerWidth); //=> Ancho de la ventana
console.log(location.href); //=> Url actual

/*DOM - Document Object Model*/

//Tomar elementos
console.log(document.getElementById("manejoDom"));
console.log(document.querySelector(".mt-4")); //Primer elemento con la clase
console.log(document.querySelectorAll(".mt-4")); //Todos los elementos con la clase

//Crear elemento
const h2 = document.createElement("h2");
h2.textContent = "Título creado en JS";
//h2.innerHTML = '<i>Título creado en JS (texto enriquecido)</i>';
//h2.innerText = '<i>Título creado en JS (texto plano)</i>';
h2.className = "className1 className2"; //Agregar una o más clases
h2.classList.add("nuevaClase", "nuevaClase2"); //Agregar una o más clases
console.log(h2.classList); //Revisar las clases del elemento
console.log(h2.classList.contains("nuevaClase")); //Devuelve true si existe la clase en la lista
h2.classList.remove("nuevaClase2"); //Quitar una clase
console.log(h2.classList);

//Crear fragmento - evita tener que modificar el DOM muy seguido
const colores = ["blanco", "azul", "rojo", "verde", "negro"];
const fragment = document.createDocumentFragment();
const p = document.createElement("p");

for (const color of colores) {
  const span = document.createElement("span");
  span.className = "text-info text-uppercase";
  span.innerHTML = `${color} <br>`;
  fragment.appendChild(span);
}

p.appendChild(fragment);

//Insertar elementos
const div = document.querySelector(".dom");

div.append("Texto después del último hijo"); //Agrega después del último hijo. Podemos agregar texto
div.appendChild(h2); //Agrega después del último hijo. Sólo permite objetos HTML
div.prepend("Texto Antes del primer hijo");
div.insertAdjacentElement("beforeend", p); //Inserta elemento hermano. Puede ser antes/después del inicio o antes/después del final
