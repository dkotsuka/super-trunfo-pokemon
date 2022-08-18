import { useState } from "react";
import { PokemonData } from "../types/dataTypes";
import { fetchPokemon } from "../services/pokemon-service";

export const usePokemonData = () => {
  const [pokemonData, setPokemonData] = useState<PokemonData>();

  const loadPokemon = async (id: number) => {
    const pokemonData = fetchPokemon(id);
    setPokemonData(pokemonData);
  };

  const loadRandomPokemon = () => {
    const id = Math.round(Math.random() * 150 + 1);
    const pokemonData = fetchPokemon(id);
    setPokemonData(pokemonData);
  };

  return { pokemonData, loadPokemon, loadRandomPokemon };
};
