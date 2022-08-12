import React from "react";
import { Text, View } from "react-native";
import { MAX_STATS } from "../../../constants/stats";
import { PokemonTypeColor } from "../../../theme/colors";
import { createStyle } from "./styles";

interface CardStatsLineProps {
  color: PokemonTypeColor;
  label: string;
  value: number;
}

export const CardStatsLine = ({ color, label, value }: CardStatsLineProps) => {
  const styles = createStyle(color);

  const formatLabel = (str?: string) => {
    return str ? str.replace("_", " ") : "";
  };

  const statValueWidth = (value?: number, stat?: string) => {
    if (!stat || !value) return 45;
    const valuePercentage =
      (value / MAX_STATS[stat as keyof typeof MAX_STATS]) * 90;
    return valuePercentage + 45;
  };

  return (
    <View style={styles.statsRow}>
      <Text style={styles.statsName}>{formatLabel(label.toUpperCase())}</Text>
      <View
        style={[
          styles.valueContainer,
          {
            width: statValueWidth(value, label),
          },
        ]}
      >
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};
