import React from "react";
import { Image, View } from "react-native";
import { useDeckContext } from "../../../contexts";
import { createStyle } from "./styles";

export const CardImage = (): JSX.Element => {
  const { currentCard } = useDeckContext();
  const styles = createStyle(currentCard.type1Colors);
  return (
    <View style={styles.imageContainer}>
      <View style={styles.imageForm} />
      <Image
        source={{ uri: currentCard.image }}
        style={styles.image}
        resizeMode="contain"
        resizeMethod="scale"
      />
    </View>
  );
};
