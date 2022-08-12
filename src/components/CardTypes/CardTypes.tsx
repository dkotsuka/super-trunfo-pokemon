import React from "react";
import { Text, View } from "react-native";
import { PokemonTypeColor } from "../../theme/colors";
import { createStyle } from "./styles";

interface CardTypesProps {
  color1: PokemonTypeColor;
  color2?: PokemonTypeColor;
  type1: string;
  type2?: string;
}

export const CardTypes = ({
  color1,
  color2,
  type1,
  type2,
}: CardTypesProps): JSX.Element => {
  const styles = createStyle({
    color1,
    color2,
  });
  return (
    <View style={styles.typesContainer}>
      <View style={styles.type1}>
        <Text style={styles.type1Text}>{type1.toUpperCase()}</Text>
      </View>
      <View style={styles.type2}>
        <Text style={styles.type2Text}>{type2?.toUpperCase()}</Text>
      </View>
    </View>
  );
};
