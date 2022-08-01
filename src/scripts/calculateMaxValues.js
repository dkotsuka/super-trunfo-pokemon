const fs = require("fs");
const allPokemon = require("./all_pokemon.json");

function calcMaxValues(params) {
  const values = {
    attack: 0,
    defense: 0,
    height: 0,
    hp: 0,
    moves: 0,
    "special-attack": 0,
    "special-defense": 0,
    speed: 0,
    weight: 0,
  };

  allPokemon.forEach((pokemon) => {
    values.attack = returnHigher(values.attack, pokemon.attack);
    values.defense = returnHigher(values.defense, pokemon.defense);
    values.height = returnHigher(values.height, pokemon.height);
    values.hp = returnHigher(values.hp, pokemon.hp);
    values.moves = returnHigher(values.moves, pokemon.moves);
    values["special-attack"] = returnHigher(
      values["special-attack"],
      pokemon["special-attack"]
    );
    values["special-defense"] = returnHigher(
      values["special-defense"],
      pokemon["special-defense"]
    );
    values.speed = returnHigher(values.speed, pokemon.speed);
    values.weight = returnHigher(values.weight, pokemon.weight);
  });

  fs.writeFile("./maxValues.json", JSON.stringify(values), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Successfully written data to ${uri}`);
  });
}

function returnHigher(value1, value2) {
  return value1 > value2 ? value1 : value2;
}

calcMaxValues();
