/*
  Asincronía - Capacidad de esperar que una acción termine, sin bloquear el resto de las acciones
    -> JS es un lenguaje sincrónico single threaded === No puede realizar más de una acción al mismo tiempo
    -> https://www.jsv9000.app/
*/

//Manejo de asincronía mediante callbacks - Las funciones callbacks pasan al Task Queue y esperan a que se termine de ejecutar el resto del programa antes de ejecutarse
function program() {
  console.log("Inicio");

  function dos() {
    const cbDos = () => {
      console.log("Dos");
    };

    setTimeout(cbDos, 1000);
  }

  function uno() {
    const cbUno = () => {
      console.log("Uno");
    };

    setTimeout(cbUno, 0);
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
}

//Callback Hell - Dificultad para leer correctamente el orden en que se van a ejecutar las funciones asincrónicas (las callbacks del Task Queue)
function cbHell() {
  function doA(cb) {
    console.log("A");
    setTimeout(function async1() {
      cb();
    }, 0);
  }

  function doB() {
    console.log("B");
  }

  function doC(doD) {
    console.log("C");
    setTimeout(function async2() {
      doD();
    }, 0);
  }

  function doD() {
    console.log("D");
  }

  function doE() {
    console.log("E");
  }

  function doF() {
    console.log("F");
  }

  function callbackA() {
    doB();
    doC(doD);
    doE();
  }

  doA(callbackA);
  doF();
}

const asincronia = () => {
  function cuadrado(num) {
    const cbResultado = () => {
      return num * num;
    };

    return setTimeout(cbResultado, 0);
  }

  let resultado = cuadrado(2);
  //Guarda el retorno de la función cuadrado(2)
  console.log(resultado);
  //Para que la variable resultado tenga un número
  //tiene que ejecutarse la función cbResultado
  resultado = cuadrado(resultado);
  console.log(resultado);

  /*
    Toda función callback que encuentra en el TaskQueue
    debe esperar a que termine de ejecutarse todo el 
    código sincrónico
  */
};
