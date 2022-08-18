import React from "react";
import { Text, View } from "react-native";
import { useDeckContext } from "../../../contexts";
import { createStyle } from "./styles";

export const CardTypes = (): JSX.Element => {
  const { currentCard } = useDeckContext();
  const styles = createStyle({
    color1: currentCard.type1Colors,
    color2: currentCard.type2Colors,
  });
  return (
    <View style={styles.typesContainer}>
      <View style={styles.type1}>
        <Text style={styles.type1Text}>{currentCard.type1.toUpperCase()}</Text>
      </View>
      <View style={styles.type2}>
        <Text style={styles.type2Text}>{currentCard.type2?.toUpperCase()}</Text>
      </View>
    </View>
  );
};
