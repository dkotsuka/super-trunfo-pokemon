import { StyleSheet } from "react-native";
import { PokemonTypeColor } from "../../../theme/colors";

export const createStyle = (color: PokemonTypeColor) =>
  StyleSheet.create({
    imageBackground: {
      margin: 8,
      borderWidth: 8,
      borderRadius: 12,
      borderColor: "red",
      padding: 2,
      shadowOffset: {
        width: 2,
        height: 4,
      },
      shadowRadius: 16,
      elevation: 5,
    },
    container: {
      borderRadius: 4,
      borderWidth: 4,
      borderColor: color.primary,
      minWidth: 300,
      padding: 8,
      paddingBottom: 4,
    },
  });
