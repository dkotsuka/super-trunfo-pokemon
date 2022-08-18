import React from "react";
import {
  CardLayout,
  CardImage,
  CardTypes,
  CardMeasurements,
  CardStats,
  CardHeader,
} from "../../molecules";

export const PokemonCard = (): JSX.Element | null => {
  return (
    <CardLayout>
      <CardHeader />
      <CardImage />
      <CardTypes />
      <CardMeasurements />
      <CardStats />
    </CardLayout>
  );
};
