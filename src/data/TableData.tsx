import { EncountersType } from "../components/EncountersForm"
import { GameKeysType, GameType } from "../data/GameData"
import PokemonType from "./PokemonData"

export type TableDataType = {
  areaName: string
  sections: boolean
  percentage: boolean //if false, use rarity
  gamesChosen: Array<GameType> //use games' keys
  encounters: Array<{
    type: EncountersType
    data: Array<{
      game: GameKeysType
      pokemon: Array<PokemonType>
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
      key: "leafgreen",
      title: "LeafGreen",
      display: "LG",
      color: "olive",
      gen: 3,
      src: "",
    },
    {
      key: "firered",
      title: "FireRed",
      display: "FR",
      color: "orange",
      gen: 3,
      src: "",
    },
  ],
  encounters: [
    {
      type: "grass",
      data: [
        {
          game: "leafgreen",
          pokemon: [
            {
              id: "pidgey",
              percentage: 50,
              rarity: "common",
            },
            {
              id: "rattata",
              percentage: 40,
              rarity: "uncommon",
            },
            {
              id: "oddish",
              percentage: 10,
              rarity: "rare",
            },
          ],
        },
        {
          game: "firered",
          pokemon: [
            {
              id: "pidgey",
              percentage: 50,
              rarity: "common",
            },
            {
              id: "rattata",
              percentage: 40,
              rarity: "uncommon",
            },
            {
              id: "bellsprout",
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
          game: "leafgreen",
          pokemon: [
            {
              id: "tentacool",
              percentage: 65,
              rarity: "common",
            },
            {
              id: "goldeen",
              percentage: 33,
              rarity: "uncommon",
            },
            {
              id: "tentacruel",
              percentage: 2,
              rarity: "very rare",
            },
          ],
        },
        {
          game: "firered",
          pokemon: [
            {
              id: "tentacool",
              percentage: 65,
              rarity: "common",
            },
            {
              id: "goldeen",
              percentage: 33,
              rarity: "uncommon",
            },
            {
              id: "tentacruel",
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
