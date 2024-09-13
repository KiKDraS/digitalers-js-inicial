/*
  API Web Promise
    -> Herramienta creada para organizar el Task Queue de forma tal que no "se pierdan" valores
    -> Trabaja encadenando funciones
      -> .then(cb) - Se ejecuta cuando la Promesa se resuelve. La función resolve permite el uso de .then
      -> .catch(cb) - Se ejecuta cuando la Promesa se rechaza. La función reject permite el uso de .catch 
        -> También se ejecuta si lanzamos un error en la cadena de la Promesa
      -> .finally(cb) - Se ejecuta sin importar el state de la Promesa
    -> State - Herramienta para saber si tenes datos para trabajar o hubo un problema
        -> "pending" === No tengo idea de si existe valor para trabajar o hubo un problem
        -> "fulfilled" === tenemos dato para trabajar
            -> Necesario para usar .then 
        -> "rejected" === hubo un problema
            -> Necesario para usar .catch    

  * Promesa resulta === Se ejecuta el código que le dice a JS que se obtuvo el valor deseado (función resolve del Objeto Promise)    
*/

function obtenerCuadrado(n) {
  return n * n;
}

const promesas = () => {
  function obtenerNumero(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //Validar que n sea un number
        if (Number.isNaN(Number(n))) {
          //n es NaN === No hay número
          reject("No tenemos un número para devolver");
        }
        resolve(n);
      }, 0);
    });
  }

  const promise = obtenerNumero("2");
  console.log("constante promise", promise);
  //Promise { <state>: "fulfilled", <value>: 2 }
  //value === Valor de n en la función resolve
  promise
    .then((value) => {
      console.log("Valor obtenido con.then:", value);
      return obtenerCuadrado(value);
    })
    .then((value) => {
      console.log("Valor obtenido con.then:", value);

      //Simular un error en la cadena de .then fingiendo que nuestro programa se rompe si value tiene un 4
      if (value === 4) {
        //Lanzar un error === Forzar la ejecución del .catch
        throw new Error("No podemos seguir porque hay un 4");
      }

      return obtenerCuadrado(value);
    })
    .then((value) => {
      console.log("Valor obtenido con.then:", value);
      return obtenerCuadrado(value);
    })
    .then((value) => {
      console.log("Valor obtenido con.then:", value);
      return obtenerCuadrado(value);
    })
    .catch((reason) => console.log(reason))
    .finally(() => console.log("El finally se ejecuta siempre"));
};
