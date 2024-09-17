/*
    Status Code de Servidor (el servidor responde)
        -> 100 - 199
        -> 200 - 299 - Todo bien (response.ok)
        -> 300 - 399 
        -> 400 - 499 - Todo mal (!response.ok)
        -> 500 - 599 - Todo mal (!response.ok)

    Promesas => Manejan la pregunta
        -> status
            -> "pending"
            -> "fulfilled"
            -> "rejected"

    fetch(url) === Hacerle una pregunta al servidor
        -> El status de la Promesa depende de la respuesta del servidor
        -> Si el status es "Fulfilled", la Promesa tiene el resultado de la respuesta (el servidor respondió)        
        -> Si el status es "rejected", la Promesa tiene un error (el servidor no respondió)
*/

export const loadPage = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //Todo lo que está debajo del if(!response.ok) se ejecuta si está todo bien

    const textoHtml = await response.text();
    return textoHtml;
    // return await response.text();
  } catch (error) {
    return "<h1>404 - Page not found</h1>";
  }
};
