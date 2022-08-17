import React from "react";
import { Text, View } from "react-native";
import { PokemonTypeColor } from "../../theme/colors";
import { createStyle } from "./styles";

interface CardMeasurementsProps {
  color: PokemonTypeColor;
  weight: number;
  height: number;
}

export const CardMeasurements = ({
  color,
  weight,
  height,
}: CardMeasurementsProps) => {
  const styles = createStyle(color);
  return (
    <View style={styles.generalDataField}>
      <Text style={styles.measurements}>
        <Text style={styles.measurementLabel}>Weight:</Text>
        <Text>{weight}</Text>
      </Text>
      <Text style={styles.measurements}>
        <Text style={styles.measurementLabel}>Height:</Text>
        <Text>{height}</Text>
      </Text>
    </View>
  );
};
