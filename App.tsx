import React from "react";
import { StyleSheet, View } from "react-native";
import { CardPage } from "./src/screens";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDCDCD",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <CardPage />
    </View>
  );
}
