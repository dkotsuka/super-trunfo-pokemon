import React from "react";
import { Text, View } from "react-native";
import { useDeckContext } from "../../../contexts";
import { createStyle } from "./styles";

export const CardHeader = (): JSX.Element => {
  const { currentCard } = useDeckContext();
  const styles = createStyle(currentCard.type1Colors);

  return (
    <View style={styles.row}>
      <View style={styles.idContainer}>
        <Text style={styles.numberText}>#{currentCard.id}</Text>
      </View>
      <Text style={styles.title}>{currentCard.name?.toUpperCase()}</Text>
    </View>
  );
};
