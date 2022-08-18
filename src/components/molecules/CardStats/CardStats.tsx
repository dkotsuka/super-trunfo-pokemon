import React from "react";
import { useDeckContext } from "../../../contexts";
import { CardStatsLine } from "./CardStatsLine";

export const CardStats = (): JSX.Element => {
  const { currentCard } = useDeckContext();

  const {
    type1Colors: color,
    hp,
    attack,
    defense,
    special_attack: specialAttack,
    special_defense: specialDefense,
    speed,
  } = currentCard;

  return (
    <>
      <CardStatsLine label="hp" value={hp} color={color} />
      <CardStatsLine label="attack" value={attack} color={color} />
      <CardStatsLine label="defense" value={defense} color={color} />
      <CardStatsLine
        label="special attack"
        value={specialAttack}
        color={color}
      />
      <CardStatsLine
        label="special defense"
        value={specialDefense}
        color={color}
      />
      <CardStatsLine label="speed" value={speed} color={color} />
    </>
  );
};
