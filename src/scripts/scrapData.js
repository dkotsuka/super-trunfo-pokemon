const fs = require("fs");
const axios = require("axios").default;

async function fetchAllPokemonData(params) {
  let counter = 1;
  const allPokemonData = [];

  while (counter <= 151) {
    console.log("fetching pokémon #" + counter);
    const pokemonData = await getData(counter);
    allPokemonData.push(pokemonData);
    counter += 1;
  }

  fs.writeFile("./all_pokemon.json", JSON.stringify(allPokemonData), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Successfully written data to ${uri}`);
  });
}

async function getData(id) {
  const url = "https://pokeapi.co/api/v2/pokemon/" + id;
  const { data } = await axios.get(url);
  console.log({ data });
  const stats = data.stats.reduce((acc, item) => {
    return {
      ...acc,
      [item.stat.name]: item.base_stat,
    };
  }, {});
  const types = data.types.reduce((acc, item) => {
    return {
      ...acc,
      [`type${item.slot}`]: item.type.name,
    };
  }, {});
  return {
    id: data.id,
    name: data.name,
    moves: data.moves.length,
    height: data.height,
    weight: data.weight,
    image: data.sprites.other["official-artwork"].front_default,
    ...stats,
    ...types,
  };
}

fetchAllPokemonData();
