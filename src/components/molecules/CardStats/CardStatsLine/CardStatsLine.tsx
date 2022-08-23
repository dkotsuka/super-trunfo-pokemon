import React, { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";
import { MAX_STATS } from "../../../../constants/stats";
import { PokemonTypeColor } from "../../../../theme/colors";
import { createStyle } from "./styles";
import { statValueWidth } from "./utils";

interface CardStatsLineProps {
  color: PokemonTypeColor;
  label: string;
  value: number;
}

export const CardStatsLine = ({ color, label, value }: CardStatsLineProps) => {
  const styles = createStyle(color);

  const animatedValue = useRef(new Animated.Value(0)).current;
  const finalValue = statValueWidth(value, label);

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: 1,
      bounciness: 15,
      useNativeDriver: true,
    }).start();
  }, [label, value]);

  return (
    <View style={styles.statsRow}>
      <Text style={styles.statsName}>{label.toUpperCase()}</Text>
      <Animated.View
        style={[
          styles.valueContainer,
          {
            width: Animated.multiply(animatedValue, finalValue),
          },
        ]}
      >
        <Animated.Text style={[styles.value, { opacity: animatedValue }]}>
          {value}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};
