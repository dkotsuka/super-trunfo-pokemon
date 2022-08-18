import React from "react";
import { Text, View } from "react-native";
import { useDeckContext } from "../../../contexts";
import { createStyle } from "./styles";

export const CardMeasurements = () => {
  const { currentCard } = useDeckContext();
  const styles = createStyle(currentCard.type1Colors);
  return (
    <View style={styles.generalDataField}>
      <Text style={styles.measurements}>
        <Text style={styles.measurementLabel}>Weight:</Text>
        <Text>{currentCard.weight}</Text>
      </Text>
      <Text style={styles.measurements}>
        <Text style={styles.measurementLabel}>Height:</Text>
        <Text>{currentCard.height}</Text>
      </Text>
    </View>
  );
};
