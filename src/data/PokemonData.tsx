import styled from "styled-components"
import { ColorfulLabel } from "../components/PageBody"
import { PossibleGensType } from "./GameData"
import { Icon, Image } from "semantic-ui-react"

enum PokemonTypes {
  NONE = "???",
  NORMAL = "Normal",
  FIRE = "Fire",
  WATER = "Water",
  ELECTRIC = "Electric",
  GRASS = "Grass",
  ICE = "Ice",
  FIGHTING = "Fighting",
  POISON = "Poison",
  GROUND = "Ground",
  FLYING = "Flying",
  PSYCHIC = "Psychic",
  BUG = "Bug",
  ROCK = "Rock",
  GHOST = "Ghost",
  DRAGON = "Dragon",
  DARK = "Dark",
  STEEL = "Steel",
  FAIRY = "Fairy",
}

export const PokemonTypeInfo: {
  [key in PokemonTypes]: { color: string; src: string }
} = {
  [PokemonTypes.NONE]: {
    color: "4A5568",
    src: "" /*TODO: Add src link*/,
  },
  [PokemonTypes.NORMAL]: {
    color: "A8A77A",
    src: "normal.svg",
  },
  [PokemonTypes.FIRE]: {
    color: "EE8130",
    src: "fire.svg",
  },
  [PokemonTypes.WATER]: {
    color: "6390F0",
    src: "water.svg",
  },
  [PokemonTypes.ELECTRIC]: {
    color: "F7D02C",
    src: "electric.svg",
  },
  [PokemonTypes.GRASS]: {
    color: "7AC74C",
    src: "grass.svg",
  },
  [PokemonTypes.ICE]: {
    color: "96D9D6",
    src: "ice.svg",
  },
  [PokemonTypes.FIGHTING]: {
    color: "C22E28",
    src: "fighting.svg",
  },
  [PokemonTypes.POISON]: {
    color: "A33EA1",
    src: "poison.svg",
  },
  [PokemonTypes.GROUND]: {
    color: "E2BF65",
    src: "ground.svg",
  },
  [PokemonTypes.FLYING]: {
    color: "A98FF3",
    src: "flying.svg",
  },
  [PokemonTypes.PSYCHIC]: {
    color: "F95587",
    src: "psychic.svg",
  },
  [PokemonTypes.BUG]: {
    color: "A6B91A",
    src: "bug.svg",
  },
  [PokemonTypes.ROCK]: {
    color: "B6A136",
    src: "rock.svg",
  },
  [PokemonTypes.GHOST]: {
    color: "735797",
    src: "ghost.svg",
  },
  [PokemonTypes.DRAGON]: {
    color: "6F35FC",
    src: "dragon.svg",
  },
  [PokemonTypes.DARK]: {
    color: "705746",
    src: "dark.svg",
  },
  [PokemonTypes.STEEL]: {
    color: "B7B7CE",
    src: "steel.svg",
  },
  [PokemonTypes.FAIRY]: {
    color: "D685AD",
    src: "fairy.svg",
  },
}

export const PokemonTypeLabel: React.FC<{ type: PokemonTypes }> = ({
  type,
}) => {
  const DoubleBorderLabel = styled(ColorfulLabel)`
    border: 2px solid white !important;
    outline: 2px solid #${PokemonTypeInfo[type].color};
    min-width: 68px;
  `
  return (
    <DoubleBorderLabel
      $color={PokemonTypeInfo[type].color}
      size='tiny'
      image
    >
      <Image
        className='type-label'
        style={{
          maxWidth: "10px",
          maxHeight: "10px",
          margin: "0px .5em 0px 0px",
        }}
        src={PokemonTypeInfo[type].src}
      />
      {type.toUpperCase()}
    </DoubleBorderLabel>
  )
}

export type Rarity =
  | "common"
  | "uncommon"
  | "rare"
  | "very rare"
  | "legendary"
  | "mythical"

type PokemonInputType = {
  dexNo: number //if meant to be empty, dexNo will be 0
  percentage: number | null
  rarity: Rarity | null
}

type PokemonType = {
  id: string
  src: string
  priType: PokemonTypes | null
  secType?: PokemonTypes
  gen: 0 | PossibleGensType
}

export const getPokemon = (dexNo: number) => {
  return PokemonList[dexNo]
}
/*TODO: Add more get methods*/

const PokemonList: PokemonType[] = new Array<PokemonType>(649)
PokemonList[0] = {
  id: "???",
  src: "FRLGNoPokemon.png",
  priType: PokemonTypes.NONE,
  gen: 0,
}
PokemonList[16] = {
  id: "Pidgey",
  src: "FRLGpidgey.png",
  priType: PokemonTypes.NORMAL,
  secType: PokemonTypes.FLYING,
  gen: 1,
}
PokemonList[19] = {
  id: "Rattata",
  src: "FRLGrattata.png",
  priType: PokemonTypes.NORMAL,
  gen: 1,
}
PokemonList[43] = {
  id: "Oddish",
  src: "FRLGoddish.png",
  priType: PokemonTypes.GRASS,
  secType: PokemonTypes.POISON,
  gen: 1,
}
PokemonList[69] = {
  id: "Bellsprout",
  src: "FRLGbellsprout.png",
  priType: PokemonTypes.GRASS,
  secType: PokemonTypes.POISON,
  gen: 1,
}
PokemonList[72] = {
  id: "Tentacool",
  src: "FRLGtentacool.png",
  priType: PokemonTypes.WATER,
  secType: PokemonTypes.POISON,
  gen: 1,
}
PokemonList[73] = {
  id: "Tentacruel",
  src: "FRLGtentacruel.png",
  priType: PokemonTypes.WATER,
  secType: PokemonTypes.POISON,
  gen: 1,
}
PokemonList[118] = {
  id: "Goldeen",
  src: "FRLGgoldeen.png",
  priType: PokemonTypes.WATER,
  gen: 1,
}

export default PokemonInputType
