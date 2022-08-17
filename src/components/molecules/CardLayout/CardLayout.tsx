import React, { ReactNode, useEffect } from "react";
import { ImageBackground, View } from "react-native";
import { usePokemonData } from "../../../hooks/usePokemonData";
import { PokemonTypeColor } from "../../../theme/colors";
import { createStyle } from "./styles";

interface CardLayoutProps {
  children?: ReactNode;
  color: PokemonTypeColor;
}

export const CardLayout = ({
  children,
  color,
}: CardLayoutProps): JSX.Element | null => {
  const { pokemonData, loadRandomPokemon } = usePokemonData();

  useEffect(() => {
    loadRandomPokemon();
  }, []);

  if (!pokemonData) return null;

  const styles = createStyle(color);

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../../../assets/background.png")}
    >
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
};
