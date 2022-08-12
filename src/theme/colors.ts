export type PokemonType = keyof typeof colors;

export type PokemonTypeColor = {
  primary: string;
  secondary: string;
};

export type Colors = {
  [type: string]: PokemonTypeColor;
};

export const colors: Colors = {
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
