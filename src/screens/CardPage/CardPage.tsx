import React from "react";
import { PokemonCard } from "../../components/organisms";
import { DeckContextProvider } from "../../contexts";

export const CardPage = (): JSX.Element => {
  return (
    <DeckContextProvider>
      <PokemonCard />
    </DeckContextProvider>
  );
};
