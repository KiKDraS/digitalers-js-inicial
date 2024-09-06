/*
  Eventos === Mensaje
    -> addEventListener === Quiero realizar una acción cuando el Mensaje pase por el elemento 
    -> Tipos de Eventos
      -> Eventos del DOM (Document Object Model)
        -> Mensajes que se disparan cuando un elemento HTML tiene una interacción determinada 
          -> click - El usuario hace click sobre un elemento HTML
          -> submit - El usuario envía un formulario
          -> input - El usuario escribe dentro de un input de formulario. Se dispara mientras el usuario
          -> change - El usuario cambia el valor de un input (escribe en el input) de formulario. Se dispara cuando el usuario deja de hacer focus en input 
        -> Eventos del BOM (Browser Object Model) - Contiene API's Web
          -> DOMContentLoaded - Mensaje: "Ya está cargado todo el HTML"
          -> load - Mensaje: "El documento y todos sus recursos están listos para ser cargados"

  API Web
    -> Interfaz de funcionalidades disponibles dentro del navegador      
    -> DOM
    -> Objeto window
    -> Objet XMLHttpRequest (Me permite obtener información de internet)

  JSON (JavaScript Object Notation) 
    -> Dato de tipo string 
    -> Representa un objeto en formato clave-valor  
*/

const runCode = () => {
  // mostrarUsuarios();
  getUsers();
};

// Cuando el documento y todos sus recursos están listos para ser cargados, ejecutar la función runCode
window.addEventListener("load", runCode);
