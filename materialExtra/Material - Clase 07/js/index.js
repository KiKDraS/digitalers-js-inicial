//Callback Hell - https://www.jsv9000.app/
(() => {
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
})();

/*
  Arrancando con el número 0. Mostrar en consola el resultado de sumarle 2, a ese resultado multiplicarlo por 4 y a ese resultado restarle 2

  Finalidad del Programa => Obtener el resultado de la ecuación (0 + 2) * 4 - 2 = x

*/

(() => {
  /*
    1ro - Generar una variable (0)
    2do - Reemplazar por 0 + 2
    3ro - Reemplazar por resultado * 4
    4to - Reemplazar por resultado - 2
  */

  let resultado = 0;
  resultado = resultado + 2;
  resultado = resultado * 4;
  resultado = resultado - 2;
  console.log("Resultado de la ecuación (manual):", resultado);
})();

(() => {
  let resultado = 0;
  const arrNum = [2, 4, 2];

  const sumar = (n1, n2) => n1 + n2;
  const multiplicar = (n1, n2) => n1 * n2;
  const restar = (n1, n2) => n1 - n2;

  arrNum.forEach((num, index) => {
    if (index === 0) resultado = sumar(resultado, num);
    else if (index === 1) resultado = multiplicar(resultado, num);
    else if (index === 2) resultado = restar(resultado, num);
  });

  console.log("Resultado de la ecuación (array):", resultado);
})();

/*
  Reduce
*/

(() => {
  /*
    Método .reduce toma 2 parámetros
      => La función callback a ejecutarse para cada elemento en el array
      => Valor con el que debe arrancar la ejecución
  */
  const valorInicial = 0;
  const arrNum = [2, 4, 2];
  const resultado = arrNum.reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;
  }, valorInicial);

  console.log("Resultado reduce:", resultado);
})();

/*
  Pipeline
*/

(() => {
  /*
    Funciones Callback
  */
  function realizarTarea(valorAnterior, valorActual, cb) {
    return cb(valorActual, valorAnterior);
  }

  const multiplica = (n1, n2) => n1 * n2;

  const arrNum = [2, 4, 2];
  let acumulado = 1;

  for (let index = 0; index < arrNum.length; index++) {
    const actual = arrNum[index];
    acumulado = realizarTarea(acumulado, actual, multiplica);
  }
  console.log(acumulado);

  /*
    Funciones pipeline (pipe)
      => Utilizar la funcionalidad del reduce para ejecutar varias funciones con el fin de obtener un único resultado
  */

  function pipeline(valorInicial, arrFunciones) {
    return arrFunciones.reduce(function (resultado, fnActual) {
      return fnActual(resultado);
    }, valorInicial);
  }

  const sumar = (resultado) => resultado + 2;
  const multiplicar = (resultado) => resultado * 4;
  const restar = (resultado) => resultado - 2;
  const arrOperaciones = [sumar, multiplicar, restar];

  const resultado = pipeline(0, arrOperaciones);
  console.log("Resultado de la ecuación (pipeline):", resultado);
})();

/*
  Pipeline Async
*/

(() => {
  const sumar = (resultado) => {
    setTimeout(() => {
      return resultado + 2;
    }, 0);
  };
  const multiplicar = (resultado) => resultado * 4;
  const restar = (resultado) => resultado - 2;
  const arrOperaciones = [sumar, multiplicar, restar];

  function pipeline(valorInicial, arrFunciones) {
    return arrFunciones.reduce(function (resultado, fnActual) {
      return fnActual(resultado);
    }, valorInicial);
  }

  const resultado = pipeline(0, arrOperaciones);
  console.log("Resultado de la ecuación (pipeline async):", resultado);
})();

/*
  Mostrar los títulos de los post de los usuarios de la API JSON placeholder
*/

//API
const url = "https://jsonplaceholder.typicode.com";

(() => {
  function ajax(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    return xhr;
  }

  const getUsers = ajax(`${url}/users`);
  //getUsers.addEventListener("error")
  getUsers.addEventListener("load", () => {
    //try/catch permite manejar errores
    try {
      //Quiero esto. Si no funciona. Rompo y salto al catch
      if (getUsers.status !== 200) {
        throw new Error("Hubo en error (users)");
      }

      const users = JSON.parse(getUsers.response);
      const ul = document.querySelector(".ajax");

      for (const user of users) {
        const liUser = document.createElement("li");
        liUser.textContent = user.name;

        const getPostsUser = ajax(`${url}/posts?userId=${user.id}`);
        getPostsUser.addEventListener("load", () => {
          try {
            if (getUsers.status !== 200) {
              throw new Error("Hubo en error (posts)");
            }

            const posts = JSON.parse(getPostsUser.response);
            const ulPosts = document.createElement("ul");
            for (const post of posts) {
              const li = document.createElement("li");
              li.textContent = `Título: ${post.title}`;
              ulPosts.appendChild(li);
            }
            liUser.appendChild(ulPosts);
            ul.appendChild(liUser);
          } catch (error) {
            console.log(error);
          }
        });
      }
    } catch (error) {
      //Trabajo con el valor del error
      console.log(error);
    }
  });
})();

/*
  Promesas (API Web Promise)
    => Combina las funciones pipeline con código async
      -> .then(cb) - Permite hilvanar ejecuciones
      -> .catch(cb) - Permite el manejo de errores de TODO el pipe
    => .fetch()
      -> Combina la API Web Promise con Peticiones AJAX
*/

(() => {
  //Fetch
  const promiseUser = fetch(`${url}/users`);
  //console.log(promiseUser);

  promiseUser //ValorInicial
    .then((response) => {
      if (!response.ok) throw new Error(`Hubo un error`);

      return response.json();
    })
    .then((users) => {
      const usersID = [];
      const ulUsers = document.querySelector(".fetch");
      for (const user of users) {
        const li = document.createElement("li");
        li.textContent = user.name;
        li.id = `promise-${user.id}`;
        usersID.push(user.id);
        ulUsers.appendChild(li);
      }

      return usersID;
    })
    .then((usersID) => {
      //console.log(usersID);
      usersID.forEach((id) => {
        const promisePosts = fetch(`${url}/posts?userId=${id}`);

        promisePosts
          .then((res) => {
            if (!res.ok) throw new Error(`Hubo un error`);

            return res.json();
          })
          .then((posts) => {
            const liUser = document.getElementById(`promise-${id}`);
            const ulPosts = document.createElement("ul");
            for (const post of posts) {
              const li = document.createElement("li");
              li.textContent = `Título: ${post.title}`;
              ulPosts.appendChild(li);
            }
            liUser.appendChild(ulPosts);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    })
    .catch((error) => {
      console.log(error);
    });
})();

(() => {
  //Funciones Async

  //Función que simula el código asincrónico
  function sumarAsync(n1, n2) {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(n1 + n2);
      }, 0);
    });
  }

  async function operaciones() {
    let resultado = 0;
    //await (sólo se puede usar en funciones async) fuerza a JS a esperar el respuesta de la Promesa
    resultado = await sumarAsync(resultado, 2);
    resultado = resultado * 4;
    console.log(resultado);
  }
  operaciones();
})();

async function asyncFetch(url) {
  const response = await fetch(url);
  if (!response.ok) return new Error("Error");

  return await response.json();
}

(async () => {
  try {
    const users = await asyncFetch(`${url}/users`);
    //console.log(users);
    if (users instanceof Error) throw users;

    const usersID = [];

    const ulUsers = document.querySelector(".async");
    users.forEach((user) => {
      const liUser = document.createElement("li");
      liUser.textContent = user.name;
      liUser.id = `async-${user.id}`;
      usersID.push(user.id);
      ulUsers.appendChild(liUser);
    });

    usersID.forEach((id) => {
      (async () => {
        try {
          const liUser = document.getElementById(`async-${id}`);
          const posts = await asyncFetch(`${url}/posts?userId=${id}`);

          if (posts instanceof Error) throw posts;

          const ulPosts = document.createElement("ul");
          for (const post of posts) {
            const liPost = document.createElement("li");
            liPost.textContent = `Título: ${post.title}`;
            ulPosts.appendChild(liPost);
          }
          liUser.appendChild(ulPosts);
        } catch (error) {
          console.log(error);
        }
      })();
    });
  } catch (error) {
    console.log(error);
  }
})();
