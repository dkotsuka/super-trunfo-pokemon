import React, { createContext, useContext, useEffect, useMemo } from "react";
import { usePokemonData } from "../../hooks/usePokemonData";
import { colors, PokemonType } from "../../theme/colors";
import { INITIAL_VALUE } from "./constants";

interface DeckContextProviderProps {
  children: React.ReactNode;
}

const DeckContext = createContext({ currentCard: INITIAL_VALUE });

export const DeckContextProvider = ({
  children,
}: DeckContextProviderProps): JSX.Element => {
  const { pokemonData, loadRandomPokemon } = usePokemonData();

  useEffect(() => {
    loadRandomPokemon();
  }, []);

  const value = useMemo(() => {
    let currentCard = INITIAL_VALUE;

    if (pokemonData) {
      const type1 = pokemonData?.type1 as PokemonType;
      const type2 = pokemonData?.type2 as PokemonType;

      currentCard = {
        ...pokemonData,
        type1Colors: colors[type1],
        type2Colors: colors[type2],
      };
    }

    return { currentCard };
  }, [pokemonData]);

  return <DeckContext.Provider value={value}>{children}</DeckContext.Provider>;
};

export const useDeckContext = () => useContext(DeckContext);
