import React from "react";
import { Image, View } from "react-native";
import { PokemonTypeColor } from "../../theme/colors";
import { createStyle } from "./styles";

interface CardImageProps {
  color: PokemonTypeColor;
  imageUrl: string;
}

export const CardImage = ({ color, imageUrl }: CardImageProps): JSX.Element => {
  const styles = createStyle(color);
  return (
    <View style={styles.imageContainer}>
      <View style={styles.imageForm} />
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="contain"
        resizeMethod="scale"
      />
    </View>
  );
};
