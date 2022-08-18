import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  const handlePress = () => {
    setCounter(() => counter + 1);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <ChildComponent counter={counter} />
    </TouchableOpacity>
  );
};

const ChildComponent = ({ counter }: { counter: number }) => {
  const [counterText, setCounterText] = useState("counter: 0");

  useEffect(() => {
    setCounterText(() => `counter: ${counter}`);
  }, [counter]);

  return (
    <View>
      <Text>{counterText}</Text>
    </View>
  );
};
