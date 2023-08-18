//use this file to create the full list of Pokemon

export type Rarity =
  | "common"
  | "uncommon"
  | "rare"
  | "very rare"
  | "legendary"
  | "mythical"

type PokemonType = {
  id: string | null //replace this type with data from a list of Pokemon, may be the number instead
  percentage: number | null
  rarity: Rarity | null
}

export default PokemonType
