const asyncAwait = async () => {
  /*
        Async/Await
            => Palabras reservadas creadas para escribir código de Promesas de forma más acortada y que genera la sensación de estar trabajando con código sincrónico

        async 
            -> Se agrega a la declaración de una función
            -> Toda función que tiene el async en su declaración debe ser ejecutada usando await
        
        await 
            -> Se agrega dentro de la función que tiene la palabra async
            -> Genera la sensación de código sincrónico
            -> El await sólo se puede usar en una función async  
            
        fetch 
            -> Sólo necesita que usemos el await    
    */

  function showUsers(users) {
    const ul = document.getElementById("users");
    ul.innerHTML = users.map((user) => `<li>${user.name}</li>`).join("");
  }

  async function promesaAsync(url) {
    try {
      const respuestaServidor = await fetch(url); //Esperar a que el servidor responda === Esperar que la Promise tenga status: "Fulfilled"
      console.log(respuestaServidor);

      //Validar que tenga los datos
      if (!respuestaServidor.ok) throw new Error("Error en el fetch");

      //Convertir la respuesta a JSON
      return await respuestaServidor.json();
      //Esperar a que se haya convertido la respuesta === Esperar que la Promise tenga status: "Fulfilled"
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Promesa finalizada"); //Este código se ejecuta siempre, independientemente de si hay error o no
    }
  }

  const users = await promesaAsync(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(users);
  showUsers(users);

  const todos = await promesaAsync(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log(todos);
};
