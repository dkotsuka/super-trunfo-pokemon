import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "./src/components/Mess";
import { PokemonCard } from "./src/components/PokemonCard";

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
      <Card />
    </View>
  );
}
