import { EncounterTypes } from "../components/EncountersForm"
import { GameKeys, GameType } from "../data/GameData"
import PokemonInputType, { Rarity } from "./PokemonData"

export type TableDataType = {
  areaName: string
  sections: boolean
  percentage: boolean //if false, use rarity
  gamesChosen: Array<GameType> //use games' keys
  encounters: Array<{
    type: EncounterTypes
    data: Array<{
      game: GameKeys
      pokemon: Array<PokemonInputType>
    }>
  }>
}

/*
export const detectSameTypes = (
  tableData: TableDataType
): Array<{ type: EncounterTypes; idxs: Array<number> }> | undefined => {
  if (
    tableData.encounters.length === 0 ||
    !tableData.encounters.find((enc) => enc.type !== EncounterTypes.NONE)
  ) {
    return undefined
  }
  let arr = new Array<{ type: EncounterTypes; idxs: Array<number> }>()
  for (const enc of tableData.encounters) {
    const idx = arr.findIndex((v) => v.type === enc.type)
    if (idx > -1) {
      arr[idx].idxs.push(idx)
    } else {
      arr.push({ type: enc.type, idxs: [idx] })
    }
  }
  return arr.filter(
    (obj) => obj.type !== EncounterTypes.NONE && obj.idxs.length > 1
  )
}

export const reorderEncounter = (
  tableData: TableDataType
)
*/

export const nullData: TableDataType = {
  areaName: "",
  sections: false,
  percentage: true,
  gamesChosen: [],
  encounters: [
    {
      type: EncounterTypes.NONE,
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
      type: EncounterTypes.GRASS,
      data: [
        {
          game: GameKeys.LEAFGREEN,
          pokemon: [
            {
              dexNo: 16, //pidgey
              percentage: 50,
              rarity: Rarity.COMMON,
            },
            {
              dexNo: 19, //rattata
              percentage: 40,
              rarity: Rarity.UNCOMMON,
            },
            {
              dexNo: 43, //oddish
              percentage: 10,
              rarity: Rarity.RARE,
            },
          ],
        },
        {
          game: GameKeys.FIRERED,
          pokemon: [
            {
              dexNo: 16, //pidgey
              percentage: 50,
              rarity: Rarity.COMMON,
            },
            {
              dexNo: 19, //rattata
              percentage: 40,
              rarity: Rarity.UNCOMMON,
            },
            {
              dexNo: 69, //bellsprout
              percentage: 10,
              rarity: Rarity.RARE,
            },
          ],
        },
      ],
    },
    {
      type: EncounterTypes.SURF,
      data: [
        {
          game: GameKeys.LEAFGREEN,
          pokemon: [
            {
              dexNo: 72, //tentacool
              percentage: 65,
              rarity: Rarity.COMMON,
            },
            {
              dexNo: 118, //goldeen
              percentage: 33,
              rarity: Rarity.UNCOMMON,
            },
            {
              dexNo: 73, //tentacruel
              percentage: 2,
              rarity: Rarity.VERYRARE,
            },
          ],
        },
        {
          game: GameKeys.FIRERED,
          pokemon: [
            {
              dexNo: 72, //tentacool
              percentage: 65,
              rarity: Rarity.COMMON,
            },
            {
              dexNo: 118, //goldeen
              percentage: 33,
              rarity: Rarity.UNCOMMON,
            },
            {
              dexNo: 73, //tentacruel
              percentage: 2,
              rarity: Rarity.VERYRARE,
            },
          ],
        },
      ],
    },
  ],
}

export default TableDataType
