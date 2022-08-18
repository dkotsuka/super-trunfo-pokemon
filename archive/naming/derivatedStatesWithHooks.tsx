import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const addOnce = () => {
    setCounter(() => counter + 1);
  };

  return {
    counter,
    addOnce,
  };
};

const Component = () => {
  const { counter, addOnce } = useCounter();
  const [counterText, setCounterText] = useState(`counter: ${counter}`);

  useEffect(() => {
    setCounterText(() => `counter: ${counter}`);
  }, [counter]);

  return (
    <TouchableOpacity onPress={addOnce}>
      <Text>{counterText}</Text>
    </TouchableOpacity>
  );
};
