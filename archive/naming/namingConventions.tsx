import React from "react";
import { Text, View } from "react-native";

// NAMING CONVENTIONS
// Tipos e Interfaces devem ser nomeadas em PascalCase;
// -- exceto tipos primitivos (string, number, boolean)

// Variáveis são nomeadas em camelCase;
// Constantes são nomeadas em UPPERCASE_SNAKECASE;
// Funções que retornam elementos JSX são nomeados em PascalCase;
// Funções comuns são nomeados em camelCase;

const simpleComponent = <Text>Only a text</Text>;

const Component = ({ text }: { text: string }): JSX.Element => (
  <Text>{text}</Text>
);

const buildComponents = () => ({
  First: () => <Component text="first" />,
  Second: () => <Component text="second" />,
  Third: () => <Component text="third" />,
});

const Components = buildComponents();

<Components.First />;

const componentList = [
  <Component text="first" />,
  <Component text="second" />,
  <Component text="third" />,
];

const ComponentList = () => <View>{...componentList}</View>;
