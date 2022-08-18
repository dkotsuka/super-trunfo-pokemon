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

  const stats = [
    { label: "hp", value: hp },
    { label: "attack", value: attack },
    { label: "defense", value: defense },
    { label: "special attack", value: specialAttack },
    { label: "special defense", value: specialDefense },
    { label: "speed", value: speed },
  ];

  return (
    <>
      {stats.map(({ label, value }) => (
        <CardStatsLine label={label} value={value} color={color} />
      ))}
    </>
  );
};
