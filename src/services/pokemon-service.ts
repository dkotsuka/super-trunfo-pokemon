import allPokemon from "./all_pokemon.json";
import find from "lodash/find";
import { PokemonData } from "../types/dataTypes";

export function fetchPokemon(id: number) {
  return find(allPokemon, (item) => item.id === id) as PokemonData;
}
