import allPokemon from "./all_pokemon.json";
import find from "lodash/find";

export type PokemonData = {
  attack: number;
  defense: number;
  height: number;
  hp: number;
  id: number;
  image: string;
  moves: number;
  name: string;
  special_attack: number;
  special_defense: number;
  speed: number;
  type1: string;
  type2?: string;
  weight: number;
};

export function fetchPokemon(id: number) {
  return find(allPokemon, (item) => item.id === id) as PokemonData;
}
