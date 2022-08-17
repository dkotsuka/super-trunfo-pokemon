import React from "react";
import { Text, View } from "react-native";
import { PokemonTypeColor } from "../../../theme/colors";
import { createStyle } from "./styles";

interface CardHeaderProps {
  color: PokemonTypeColor;
  pokemonId: number;
  pokemonName: string;
}

export const CardHeader = ({
  color,
  pokemonId,
  pokemonName,
}: CardHeaderProps): JSX.Element => {
  const styles = createStyle(color);
  return (
    <View style={styles.row}>
      <View style={styles.idContainer}>
        <Text style={styles.numberText}>#{pokemonId}</Text>
      </View>
      <Text style={styles.title}>{pokemonName.toUpperCase()}</Text>
    </View>
  );
};
