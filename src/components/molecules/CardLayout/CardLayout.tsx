import React, { ReactNode } from "react";
import { ImageBackground, View } from "react-native";
import { useDeckContext } from "../../../contexts";
import { createStyle } from "./styles";

interface CardLayoutProps {
  children?: ReactNode;
}

export const CardLayout = ({
  children,
}: CardLayoutProps): JSX.Element | null => {
  const { currentCard } = useDeckContext();
  const styles = createStyle(currentCard.type1Colors);

  if (!currentCard) return null;

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../../../assets/background.png")}
    >
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
};
