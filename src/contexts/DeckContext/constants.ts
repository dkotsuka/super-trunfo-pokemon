import { PokemonTypeColor } from "../../theme/colors";
import { PokemonData } from "../../types/dataTypes";

export interface CurrentCard extends PokemonData {
  type1Colors: PokemonTypeColor;
  type2Colors?: PokemonTypeColor;
}

export const INITIAL_VALUE: CurrentCard = {
  attack: 0,
  defense: 0,
  height: 0,
  hp: 0,
  id: 0,
  image: "",
  moves: 0,
  name: "",
  special_attack: 0,
  special_defense: 0,
  speed: 0,
  type1: "",
  type2: "",
  weight: 0,
  type1Colors: {
    primary: "",
    secondary: "",
  },
};
