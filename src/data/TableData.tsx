import { EncountersType } from "../components/EncountersForm"
import { GameKeys, GameType } from "../data/GameData"
import PokemonInputType from "./PokemonData"

export type TableDataType = {
  areaName: string
  sections: boolean
  percentage: boolean //if false, use rarity
  gamesChosen: Array<GameType> //use games' keys
  encounters: Array<{
    type: EncountersType
    data: Array<{
      game: GameKeys
      pokemon: Array<PokemonInputType>
    }>
  }>
}

export const nullData: TableDataType = {
  areaName: "",
  sections: false,
  percentage: true,
  gamesChosen: [],
  encounters: [
    {
      type: null,
      data: [],
    },
  ],
}

export const exampleOneData: TableDataType = {
  areaName: "Route 1",
  sections: false,
  percentage: true,
  gamesChosen: [
    {
      key: GameKeys.LEAFGREEN,
      title: "LeafGreen",
      display: "LG",
      color: "00DD00",
      gen: 3,
      src: "",
    },
    {
      key: GameKeys.FIRERED,
      title: "FireRed",
      display: "FR",
      color: "FF7327",
      gen: 3,
      src: "",
    },
  ],
  encounters: [
    {
      type: "grass",
      data: [
        {
          game: GameKeys.LEAFGREEN,
          pokemon: [
            {
              dexNo: 16, //pidgey
              percentage: 50,
              rarity: "common",
            },
            {
              dexNo: 19, //rattata
              percentage: 40,
              rarity: "uncommon",
            },
            {
              dexNo: 43, //oddish
              percentage: 10,
              rarity: "rare",
            },
          ],
        },
        {
          game: GameKeys.FIRERED,
          pokemon: [
            {
              dexNo: 16, //pidgey
              percentage: 50,
              rarity: "common",
            },
            {
              dexNo: 19, //rattata
              percentage: 40,
              rarity: "uncommon",
            },
            {
              dexNo: 69, //bellsprout
              percentage: 10,
              rarity: "rare",
            },
          ],
        },
      ],
    },
    {
      type: "surf",
      data: [
        {
          game: GameKeys.LEAFGREEN,
          pokemon: [
            {
              dexNo: 72, //tentacool
              percentage: 65,
              rarity: "common",
            },
            {
              dexNo: 118, //goldeen
              percentage: 33,
              rarity: "uncommon",
            },
            {
              dexNo: 73, //tentacruel
              percentage: 2,
              rarity: "very rare",
            },
          ],
        },
        {
          game: GameKeys.FIRERED,
          pokemon: [
            {
              dexNo: 72, //tentacool
              percentage: 65,
              rarity: "common",
            },
            {
              dexNo: 118, //goldeen
              percentage: 33,
              rarity: "uncommon",
            },
            {
              dexNo: 73, //tentacruel
              percentage: 2,
              rarity: "very rare",
            },
          ],
        },
      ],
    },
  ],
}

export default TableDataType
