import React, { useEffect } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { usePokemonData } from "../hooks/usePokemonData";
import { PokemonData } from "../services/pokemon-service";

const MAX_VALUES = {
  attack: 134,
  defense: 180,
  height: 88,
  hp: 250,
  moves: 342,
  special_attack: 154,
  special_defense: 125,
  speed: 150,
  weight: 4600,
};

const colorPallet = {
  bug: {
    primary: "#FF8FB1",
    secondary: "rgba(91,179,24,0.8)",
  },
  grass: {
    primary: "#36AE7C",
    secondary: "rgba(140,186,81,0.8)",
  },
  poison: {
    primary: "#4C3575",
    secondary: "rgba(120,88,166,0.8)",
  },
  fire: {
    primary: "#B20600",
    secondary: "rgba(255,91,0,0.8)",
  },
  flying: {
    primary: "#3AB0FF",
    secondary: "rgba(255,181,98,0.8)",
  },
  water: {
    primary: "#1363DF",
    secondary: "rgba(71,181,255,0.8)",
  },
  normal: {
    primary: "#AC7D88",
    secondary: "rgba(176,155,113,0.8)",
  },
  electric: {
    primary: "#FAC213",
    secondary: "rgba(255,227,0,0.8)",
  },
  ground: {
    primary: "#61481C",
    secondary: "rgba(164,126,59,0.8)",
  },
  fairy: {
    primary: "#F900BF",
    secondary: "rgba(255,133,179,0.8)",
  },
  fighting: {
    primary: "#9C0F48",
    secondary: "rgba(214,125,62,0.8)",
  },
  psychic: {
    primary: "#E97878",
    secondary: "rgba(155,81,81,0.8)",
  },
  rock: {
    primary: "#576F72",
    secondary: "rgba(125,157,156,0.8)",
  },
  steel: {
    primary: "#87A7B3",
    secondary: "rgba(205,199,190,0.8)",
  },
  ice: {
    primary: "#79DAE8",
    secondary: "rgba(10,161,221,0.8)",
  },
  ghost: {
    primary: "#51557E",
    secondary: "rgba(27,36,48,0.8)",
  },
  dragon: {
    primary: "#066163",
    secondary: "rgba(205,190,120,0.8)",
  },
};

export const Card = (): JSX.Element => {
  const { pokemonData, loadRandomPokemon } = usePokemonData();

  useEffect(() => {
    loadRandomPokemon();
  }, []);

  if (!pokemonData) return <></>;

  const type = pokemonData?.type1 as keyof typeof colorPallet;
  const type2 = pokemonData?.type2 as keyof typeof colorPallet;
  const color = colorPallet[type];

  const styles = StyleSheet.create({
    containerBorder: {
      margin: 8,
      borderWidth: 8,
      borderRadius: 12,
      borderColor: "red",
      padding: 2,
      shadowOffset: {
        width: 2,
        height: 4,
      },
      shadowRadius: 16,
    },
    container: {
      borderRadius: 4,
      borderWidth: 4,
      borderColor: color.primary,
      minWidth: 300,
      padding: 8,
      paddingBottom: 4,
    },
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
    titleRow: {
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
    imageContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      height: 250,
      width: 250,
      marginTop: -190,
    },
    imageForm: {
      marginTop: 30,
      borderWidth: 2,
      borderColor: color.primary,
      height: 140,
      width: 210,
      borderRadius: 4,
    },
    typesContainer: {
      position: "absolute",
      right: 16,
      top: type2 ? 168 : 200,
      flexDirection: "column",
    },
    type1: {
      backgroundColor: color.secondary,
      padding: 4,
      borderWidth: 4,
      borderColor: color.primary,
      borderRadius: 20,
      alignItems: "center",
      height: 28,
      marginBottom: type2 ? 4 : 0,
    },
    type1Text: {
      fontSize: 10,
      color: "white",
      fontWeight: "800",
      marginHorizontal: 4,
    },
    type2: type2 && {
      backgroundColor: colorPallet[type2].secondary,
      padding: 4,
      borderWidth: 4,
      borderColor: colorPallet[type2].primary,
      borderRadius: 20,
      alignItems: "center",
      height: 28,
    },
    type2Text: {
      fontSize: 10,
      color: "white",
      fontWeight: "800",
      marginHorizontal: 4,
    },
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
      marginLeft: 8,
      lineHeight: 14,
      fontSize: 14,
    },
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
    statsValueContainer: {
      backgroundColor: color.primary,
      paddingVertical: 6,
      marginVertical: -6,
      paddingRight: 12,
      marginRight: -12,
      borderRadius: 16,
      borderBottomLeftRadius: 0,
      width: 45,
      textAlign: "right",
    },
    statsValue: {
      color: "white",
      fontWeight: "800",
      fontSize: 16,
      lineHeight: 16,
    },
  });

  const keys = Object.keys(pokemonData);
  const statsKeys = [
    "hp",
    "attack",
    "defense",
    "special_attack",
    "special_defense",
    "speed",
  ];
  const stats = keys
    .map((key) => {
      if (statsKeys.includes(key)) {
        return {
          name: key as any,
          value: pokemonData[key as keyof PokemonData] as number,
        };
      }
      return null;
    })
    .filter((item) => item);

  const formattedStr = (str?: string) => {
    return str ? str.replace("_", " ") : "";
  };

  const statValueWidth = (value?: number, stat?: keyof typeof MAX_VALUES) => {
    if (!stat || !value) return 45;
    const valuePercentage = (value / MAX_VALUES[stat]) * 90;
    return valuePercentage + 45;
  };

  return (
    <ImageBackground
      style={styles.containerBorder}
      source={require("../../assets/background.png")}
    >
      <View style={styles.container}>
        <View style={styles.titleRow}>
          <View style={styles.idContainer}>
            <Text style={styles.numberText}>#{pokemonData.id}</Text>
          </View>
          <Text style={styles.title}>{pokemonData.name.toUpperCase()}</Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageForm} />
          <Image
            source={{ uri: pokemonData.image }}
            style={styles.image}
            resizeMode="contain"
            resizeMethod="scale"
          />
        </View>
        <View style={styles.typesContainer}>
          <View style={styles.type1}>
            <Text style={styles.type1Text}>
              {pokemonData.type1.toUpperCase()}
            </Text>
          </View>
          <View style={styles.type2}>
            <Text style={styles.type2Text}>
              {pokemonData.type2?.toUpperCase()}
            </Text>
          </View>
        </View>
        <View style={styles.generalDataField}>
          <View>
            <Text style={styles.measurements}>
              Weight: {pokemonData.weight}
            </Text>
            <Text style={styles.measurements}>
              Height: {pokemonData.height}
            </Text>
          </View>
        </View>
        <View>
          {stats.map((item) => (
            <View style={styles.statsRow} key={item?.name}>
              <Text style={styles.statsName}>
                {formattedStr(item?.name.toUpperCase())}
              </Text>
              <View
                style={[
                  styles.statsValueContainer,
                  {
                    width: statValueWidth(item?.value, item?.name),
                  },
                ]}
              >
                <Text style={styles.statsValue}>{item?.value}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};
