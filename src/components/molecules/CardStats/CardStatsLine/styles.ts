import { StyleSheet } from "react-native";
import { PokemonTypeColor } from "../../../../theme/colors";

export const createStyle = (color: PokemonTypeColor) => {
  return StyleSheet.create({
    statsRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: color.secondary,
      borderBottomWidth: 3,
      borderColor: color.primary,
      borderRadius: 12,
      paddingRight: 8,
      marginBottom: 4,
      padding: 4,
    },
    statsName: {
      color: "white",
      fontWeight: "600",
      marginLeft: 8,
      lineHeight: 14,
      fontSize: 14,
    },
    valueContainer: {
      backgroundColor: color.primary,
      paddingVertical: 6,
      marginVertical: -6,
      paddingRight: 12,
      marginRight: -12,
      borderRadius: 16,
      borderBottomLeftRadius: 0,
      width: 45,
    },
    value: {
      color: "white",
      fontWeight: "800",
      fontSize: 16,
      lineHeight: 16,
      minWidth: 35,
      textAlign: "right",
    },
  });
};
