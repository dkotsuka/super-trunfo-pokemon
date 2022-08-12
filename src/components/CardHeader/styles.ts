import { StyleSheet } from "react-native";
import { PokemonTypeColor } from "../../theme/colors";

export const createStyle = (color: PokemonTypeColor) => {
  return StyleSheet.create({
    idContainer: {
      backgroundColor: color.primary,
      height: 50,
      width: 50,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: -5,
      zIndex: 10,
    },
    numberText: {
      fontSize: 24,
      fontWeight: "800",
      color: "white",
      fontStyle: "italic",
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: color.secondary,
      borderRadius: 20,
      paddingRight: 15,
    },
    title: {
      fontSize: 24,
      fontWeight: "800",
      color: "white",
    },
  });
};
