//Utilizando la API REST //https://pokeapi.co/ crear una pantalla que muestre a cada pókemon con su nombre, imagen y ataques (3).

fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    //Lista de Pókemons
    const pokemons = [];

    data.results.forEach((pokemon) => {
      pokemons.push(pokemon.url);
    });

    pokemons.forEach((pokemon) => {
      changePokemon(pokemon);
    });
  })
  .catch((err) => console.log(err));

function changePokemon(pokemon) {
  fetch(pokemon)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error, status = ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      //Limitar lista de movimientos
      const pokemon = {
        image: data.sprites.front_default,
        name: data.name,
        moves: [],
      };

      //Se usa for porque forEach no acepta break
      for (let i = 0; i < data.moves.length; i++) {
        if (i > 2) {
          break;
        }
        const move = data.moves[i].move.url;
        pokemon.moves.push(move);
      }
      return new Promise((resolve) => {
        resolve({
          image: pokemon.image,
          name: pokemon.name,
          moves: pokemon.moves,
        });
      });
    })
    .then((pokemon) => {
      //Tarjeta
      const div = document.createElement("div");
      div.classList.add(
        "tarjetaPokemon",
        "w-25",
        "d-flex",
        "flex-column",
        "align-items-center"
      );

      //Imagen
      const img = document.createElement("img");
      img.classList.add("imgPokemon");
      img.alt = pokemon.name;
      img.src = pokemon.image;

      //Nombre
      const h3 = document.createElement("h3");
      h3.classList.add(pokemon.name, "text-capitalize", "fs-1");
      h3.textContent = pokemon.name;

      //Título Ataques
      const h4 = document.createElement("h4");
      h4.textContent = "Ataques";

      //Lista Ataques
      const ataques = document.createElement("div");
      ataques.id = `ataques${pokemon.name}`;

      div.appendChild(img);
      div.appendChild(h3);
      div.appendChild(h4);
      div.appendChild(ataques);
      document.querySelector(".pokemons").appendChild(div);

      pokemon.moves.forEach((move) => {
        changeMove(pokemon.name, move);
      });
    });
}

function changeMove(pokemon, move) {
  fetch(move)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error, status = ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      //Nombre del pokemon y habilidades
      const moveList = document.querySelector(`#ataques${pokemon}`);
      const ataque = document.createElement("p");
      ataque.textContent = data.name;
      moveList.appendChild(ataque);
    })
    .catch((err) => console.log(err));
}
