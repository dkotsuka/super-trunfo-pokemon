import { StyleSheet } from "react-native";
import { PokemonTypeColor } from "../../theme/colors";

export const createStyle = (color: PokemonTypeColor) => {
  return StyleSheet.create({
    generalDataField: {
      backgroundColor: color.secondary,
      borderRadius: 16,
      padding: 8,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: -30,
      marginBottom: 8,
    },
    measurements: {
      color: "white",
      fontWeight: "400",
      lineHeight: 14,
      fontSize: 14,
      marginHorizontal: 8,
    },
    measurementLabel: {
      fontWeight: "600",
      marginRight: 4,
    },
  });
};
