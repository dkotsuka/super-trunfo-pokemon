import React, { useEffect } from "react";
import { usePokemonData } from "../../hooks/usePokemonData";
import { colors } from "../../theme/colors";
import { CardHeader } from "../CardHeader";
import { CardImage } from "../CardImage";
import { CardLayout } from "../CardLayout";
import { CardMeasurements } from "../CardMeasurements";
import { CardTypes } from "../CardTypes";

export const PokemonCard = (): JSX.Element | null => {
  const { pokemonData, loadRandomPokemon } = usePokemonData();

  useEffect(() => {
    loadRandomPokemon();
  }, []);

  if (!pokemonData) return null;

  const type = pokemonData?.type1 as keyof typeof colors;
  const type2 = pokemonData?.type2 as keyof typeof colors;
  const color = colors[type];
  const color2 = colors[type2];

  return (
    <CardLayout color={color}>
      <CardHeader
        color={color}
        pokemonId={pokemonData.id}
        pokemonName={pokemonData.name}
      />
      <CardImage color={color} imageUrl={pokemonData.image} />
      <CardTypes
        color1={color}
        color2={color2}
        type1={pokemonData.type1}
        type2={pokemonData.type2}
      />
      <CardMeasurements
        color={color}
        weight={pokemonData.weight}
        height={pokemonData.height}
      />
    </CardLayout>
  );
};
