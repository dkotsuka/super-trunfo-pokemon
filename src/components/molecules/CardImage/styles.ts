import { StyleSheet } from "react-native";
import { PokemonTypeColor } from "../../theme/colors";

export const createStyle = (color: PokemonTypeColor) => {
  return StyleSheet.create({
    imageContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      height: 250,
      width: 250,
      marginTop: -190,
    },
    imageForm: {
      marginTop: 30,
      borderWidth: 2,
      borderColor: color.primary,
      height: 140,
      width: 210,
      borderRadius: 4,
    },
  });
};
