import React from "react";
import { PokemonTypeColor } from "../../theme/colors";
import { CardStatsLine } from "./CardStatsLine";

interface CardStatsProps {
  color: PokemonTypeColor;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export const CardStats = ({
  color,
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed,
}: CardStatsProps): JSX.Element => {
  return (
    <>
      <CardStatsLine label="hp" value={hp} color={color} />
      <CardStatsLine label="attack" value={attack} color={color} />
      <CardStatsLine label="defense" value={defense} color={color} />
      <CardStatsLine
        label="special_attack"
        value={specialAttack}
        color={color}
      />
      <CardStatsLine
        label="special_defense"
        value={specialDefense}
        color={color}
      />
      <CardStatsLine label="speed" value={speed} color={color} />
    </>
  );
};
