import React from "react"
import { GameKeys, getGame } from "./GameData"
import { TableDataType, exampleOneData, nullData } from "./TableData"
import { Rarity } from "./PokemonData"
import { EncountersType } from "../components/EncountersForm"

export enum ActionKeys {
  SET_AREANAME,
  SWITCH_SECTIONS,
  SWITCH_PERCENTAGES,
  ADD_GAME,
  REMOVE_GAME,
  ADD_ENCOUNTER,
  REMOVE_ENCOUNTER,
  SET_ENCOUNTER_TYPE,
  SET_ENCOUNTER_POKEMON,
  ADD_ENCOUNTER_POKEMON,
  REMOVE_ENCOUNTER_POKEMON,
  LOAD_TABLE_DATA,
  SAVE_TABLE_DATA,
}

type SetAreanameAction = { type: ActionKeys.SET_AREANAME; name: string }
type SwitchSectionsAction = { type: ActionKeys.SWITCH_SECTIONS }
type SwitchPercentagesAction = { type: ActionKeys.SWITCH_PERCENTAGES }
type AddGameAction = { type: ActionKeys.ADD_GAME; gameKey: GameKeys }
type RemoveGameAction = {
  type: ActionKeys.REMOVE_GAME
  gameKey: GameKeys
}
type AddEncounterAction = { type: ActionKeys.ADD_ENCOUNTER }
type RemoveEncounterAction = { type: ActionKeys.REMOVE_ENCOUNTER }
type SetEncounterTypeAction = {
  type: ActionKeys.SET_ENCOUNTER_TYPE
  encType: EncountersType
  index: number
}
type SetEncounterPokemonAction = {
  type: ActionKeys.SET_ENCOUNTER_POKEMON
  encType: EncountersType
  gameKey: GameKeys
  index: number
  dexNo: number
  percentage: number
  rarity: Rarity
}
type AddEncounterPokemonAction = {
  type: ActionKeys.ADD_ENCOUNTER_POKEMON
  encType: EncountersType
  gameKey: GameKeys
}
type RemoveEncounterPokemonAction = {
  type: ActionKeys.REMOVE_ENCOUNTER_POKEMON
  encType: EncountersType
  gameKey: GameKeys
  index: number
}
type LoadTableDataAction = {
  type: ActionKeys.LOAD_TABLE_DATA
  dataKey:
    | "nullData"
    | "exampleOneData" /*TODO: Move or change this specificity elsewhere once cookies are implemented*/
}
// type SaveTableDataAction = { type: ActionKeys.SAVE_TABLE_DATA,  }

export type DispatchActionTypes =
  | SetAreanameAction
  | SwitchSectionsAction
  | SwitchPercentagesAction
  | AddGameAction
  | RemoveGameAction
  | AddEncounterAction
  | RemoveEncounterAction
  | SetEncounterTypeAction
  | SetEncounterPokemonAction
  | AddEncounterPokemonAction
  | RemoveEncounterPokemonAction
  | LoadTableDataAction

const tableDataReducer = (
  state: TableDataType,
  action: DispatchActionTypes
): TableDataType => {
  switch (
    action.type //Expect 'type' property
  ) {
    case ActionKeys.SET_AREANAME: {
      //Expect 'name' property
      return {
        ...state,
        areaName: action.name,
      }
    }
    case ActionKeys.SWITCH_SECTIONS: {
      //Expect 'on' property
      return {
        ...state,
        sections: !state.sections,
      }
    }
    case ActionKeys.SWITCH_PERCENTAGES: {
      //Expect 'on' property
      return {
        ...state,
        percentage: !state.percentage,
      }
    }
    case ActionKeys.ADD_GAME: {
      //Expect 'gameKey' property
      return {
        ...state,
        gamesChosen: [
          ...state.gamesChosen,
          getGame(action.gameKey),
        ] /*TODO: Fix undefined case*/,
        encounters: state.encounters.map((encounter) => {
          return {
            ...encounter,
            data: [
              ...encounter.data,
              { game: action.gameKey, pokemon: [] },
            ],
          }
        }),
      }
    }
    case ActionKeys.REMOVE_GAME: {
      //Expect 'gameKey' property
      return {
        ...state,
        gamesChosen: state.gamesChosen.filter(
          (game) => game.key !== action.gameKey
        ),
        encounters: state.encounters.map((encounter) => {
          return {
            ...encounter,
            data: encounter.data.filter((datum) => {
              return datum.game !== action.gameKey
            }),
          }
        }),
      }
    }
    case ActionKeys.SET_ENCOUNTER_TYPE: {
      //Expect 'encType', 'index'
      return {
        ...state,
        encounters: state.encounters.map((encounter, idx) => {
          return idx !== action.index
            ? encounter
            : {
                ...encounter,
                type: action.encType,
              }
        }),
      }
    }
    case ActionKeys.ADD_ENCOUNTER: {
      //Expect nothing
      return {
        ...state,
        encounters: state.encounters.concat({
          type: null,
          data: [
            ...state.gamesChosen.map((game) => {
              return {
                game: game.key,
                pokemon: [],
              }
            }),
          ],
        }),
      }
    }
    case ActionKeys.REMOVE_ENCOUNTER: {
      //Expect nothing
      return {
        ...state,
        encounters: state.encounters.slice(0, state.encounters.length - 1),
      }
    }
    case ActionKeys.SET_ENCOUNTER_POKEMON: {
      //Expect 'encType', 'gameKey', 'index', 'dexNo', 'percentage', 'rarity' properties
      return {
        ...state,
        encounters: state.encounters.map((encounter) => {
          return encounter.type !== action.encType
            ? encounter
            : {
                ...encounter,
                data: encounter.data.map((datum) => {
                  return datum.game !== action.gameKey
                    ? datum
                    : {
                        ...datum,
                        pokemon: datum.pokemon.map((pok, idx) => {
                          return idx !== action.index
                            ? pok
                            : {
                                dexNo: action.dexNo,
                                percentage: action.percentage,
                                rarity: action.rarity,
                              }
                        }),
                      }
                }),
              }
        }),
      }
    }
    case ActionKeys.ADD_ENCOUNTER_POKEMON: {
      //Expect 'encType', 'gameKey' properties
      return {
        ...state,
        encounters: state.encounters.map((encounter) => {
          return encounter.type !== action.encType
            ? encounter
            : {
                ...encounter,
                data: encounter.data.map((datum) => {
                  return datum.game !== action.gameKey
                    ? datum
                    : {
                        ...datum,
                        pokemon: [
                          ...datum.pokemon,
                          { dexNo: 0, percentage: null, rarity: null },
                        ],
                      }
                }),
              }
        }),
      }
    }
    case ActionKeys.REMOVE_ENCOUNTER_POKEMON: {
      //Expect 'encType', 'gameKey', 'index' properties
      return {
        ...state,
        encounters: state.encounters.map((encounter) => {
          return encounter.type !== action.encType
            ? encounter
            : {
                ...encounter,
                data: encounter.data.map((datum) => {
                  return datum.game !== action.gameKey
                    ? datum
                    : {
                        ...datum,
                        pokemon: datum.pokemon
                          .slice(0, action.index)
                          .concat(
                            datum.pokemon.slice(
                              action.index,
                              datum.pokemon.length
                            )
                          ),
                      }
                }),
              }
        }),
      }
    }
    case ActionKeys.LOAD_TABLE_DATA: {
      //Expect 'dataKey'
      switch (action.dataKey) {
        case "nullData":
          return nullData
        case "exampleOneData":
          return exampleOneData
        default:
          throw Error("Could not load " + action.dataKey)
      }
    }
    //case "SAVE_TABLE_DATA"
    // default: {
    //   throw Error("Unknown action: " + action.type)
    // }
  }
}

export const TableDataContext =
  React.createContext<TableDataType>(nullData)
export const TableDataDispatchContext = React.createContext<
  React.Dispatch<DispatchActionTypes>
>((value: DispatchActionTypes) => {
  return
})

export const ContextWrapper: React.FC<{ children: any }> = ({
  children,
}) => {
  const [tableData, dispatch] = React.useReducer(
    tableDataReducer,
    exampleOneData
  )
  return (
    <TableDataDispatchContext.Provider value={dispatch}>
      <TableDataContext.Provider value={tableData}>
        {children}
      </TableDataContext.Provider>
    </TableDataDispatchContext.Provider>
  )
}
export default ContextWrapper
