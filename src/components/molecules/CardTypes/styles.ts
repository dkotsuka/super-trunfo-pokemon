import { StyleSheet } from "react-native";
import { PokemonTypeColor } from "../../theme/colors";

interface CreateStyleArgs {
  color1: PokemonTypeColor;
  color2?: PokemonTypeColor;
}

export const createStyle = ({ color1, color2 }: CreateStyleArgs) => {
  const hasType2 = !!color2;
  return StyleSheet.create({
    typesContainer: {
      position: "absolute",
      right: 16,
      top: hasType2 ? 168 : 200,
      flexDirection: "column",
    },
    type1: {
      backgroundColor: color1.secondary,
      padding: 4,
      borderWidth: 4,
      borderColor: color1.primary,
      borderRadius: 20,
      alignItems: "center",
      height: 28,
      marginBottom: hasType2 ? 4 : 0,
    },
    type1Text: {
      fontSize: 10,
      color: "white",
      fontWeight: "800",
      marginHorizontal: 4,
    },
    type2: hasType2
      ? {
          backgroundColor: color2?.secondary,
          padding: 4,
          borderWidth: 4,
          borderColor: color2?.primary,
          borderRadius: 20,
          alignItems: "center",
          height: 28,
        }
      : {},
    type2Text: {
      fontSize: 10,
      color: "white",
      fontWeight: "800",
      marginHorizontal: 4,
    },
  });
};
