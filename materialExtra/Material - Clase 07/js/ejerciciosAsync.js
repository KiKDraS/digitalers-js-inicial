//Utilizando la API REST //https://pokeapi.co/ crear una pantalla que muestre a cada pokemon con su nombre, imagen y ataques (3).

const asyncFetch = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error, status = ${response.status}`);
  }
  return response.json();
};

const getPokemons = async () => {
  const pokemons = [];

  //Obtener lista de Pokemons y almacenarlos en array Pokemons
  try {
    const jsonPokemons = await asyncFetch(
      `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`
    );

    jsonPokemons.results.forEach((pokemon) => {
      pokemons.push(pokemon.url);
    });
  } catch (error) {
    console.log(error);
    return; //Rompemos la ejecución en caso de error
  }

  //Obtener stats de cada Pokemon
  pokemons.forEach((pokemon) => {
    changePokemon(pokemon);
  });
};

const changePokemon = async (pokemon) => {
  try {
    const jsonStats = await asyncFetch(pokemon);

    const statsPokemon = {
      image: jsonStats.sprites.front_default,
      name: jsonStats.name,
      moves: [],
    };

    //Se usa el for porque el forEach no permite break
    for (let i = 0; i < jsonStats.moves.length; i++) {
      if (i > 2) {
        break;
      }
      const move = jsonStats.moves[i].move.url;
      statsPokemon.moves.push(move);
    }

    imprimirPokemon(statsPokemon);
  } catch (error) {
    console.log(error);
  }
};

const imprimirPokemon = (data) => {
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
  img.alt = data.name;
  img.src = data.image;

  //Nombre
  const h3 = document.createElement("h3");
  h3.classList.add(data.name, "text-capitalize", "fs-1");
  h3.textContent = data.name;

  //Título Ataques
  const h4 = document.createElement("h4");
  h4.textContent = "Ataques";

  //Lista Ataques
  const ataques = document.createElement("div");
  ataques.id = `ataques${data.name}`;

  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(h4);
  div.appendChild(ataques);
  document.querySelector(".pokemons").appendChild(div);

  data.moves.forEach((move) => {
    changeMove(data.name, move);
  });
};

const changeMove = async (pokemon, move) => {
  try {
    const json = await asyncFetch(move);

    const moveList = document.querySelector(`#ataques${pokemon}`);
    const ataque = document.createElement("p");
    ataque.textContent = json.name;
    moveList.appendChild(ataque);
  } catch (error) {
    console.log(error);
  }
};

getPokemons();
