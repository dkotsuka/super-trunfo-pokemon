import React from "react";
import { StyleSheet, View } from "react-native";
import { PokemonCard } from "./src/components/organisms";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#666",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <PokemonCard />
    </View>
  );
}
