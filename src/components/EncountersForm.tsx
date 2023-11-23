import React, { useContext, useEffect, useState } from "react"
import {
  Button,
  Divider,
  Form,
  Grid,
  Icon,
  Label,
  Popup,
  SemanticCOLORS,
} from "semantic-ui-react"
import {
  ActionKeys,
  DispatchActionTypes,
  TableDataContext,
  TableDataDispatchContext,
} from "../data/DataContext"
import TableDataType /*, { detectSameTypes }*/ from "../data/TableData"
import { GameLabel } from "../data/GameData"
import { styled } from "styled-components"

export enum EncounterTypes {
  NONE = "",
  GRASS = "Rustling Grass",
  SURF = "Surfing",
  FISH = "Fishing",
  INTERACT = "Interact",
}
const NUMBER_OF_ENCOUNTER_TYPES = Object.keys(EncounterTypes).length - 1

export const EncounterTypesInfo: {
  [key in EncounterTypes]: {
    bgColor: SemanticCOLORS | undefined
    src: string
  }
} = {
  [EncounterTypes.NONE]: {
    bgColor: undefined,
    src: "",
  },
  [EncounterTypes.GRASS]: {
    bgColor: "green",
    src: "FRLGgrass.png",
  },
  [EncounterTypes.SURF]: {
    bgColor: "blue",
    src: "FRLGsurfM.png",
  },
  [EncounterTypes.FISH]: {
    bgColor: "teal",
    src: "FRLGoldrod.png",
  },
  [EncounterTypes.INTERACT]: {
    bgColor: "yellow",
    src: "articunooverworld.png",
  },
}

export const EncountersForm: React.FC = () => {
  /*const [invalidEncounters, setInvalidEncounters] = useState<
    Array<{ type: EncounterTypes; idxs: Array<number> }> | undefined
  >(undefined)
  /* TODO: This isn't really working */
  const tableData: TableDataType = useContext(TableDataContext)
  /*useEffect(() => {
    setInvalidEncounters(detectSameTypes(tableData))
  }, [tableData.encounters])*/
  const dispatch: React.Dispatch<DispatchActionTypes> = useContext(
    TableDataDispatchContext
  )
  /*const InvalidEncButton = styled(Button)`
    ${!invalidEncounters && "background-color: #FED7D7 !important"}
  `*/
  return (
    <>
      {tableData.encounters.map((enc, idx) => {
        return (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <button className='encounter-number'>{idx + 1}</button>
              {/* TODO: Add reordering functionality to the encounter buttons */}
              <div
                style={{
                  alignItems: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1em",
                }}
              >
                <label className='form-label'>Encounter Type</label>
                <div>
                  <Button.Group icon basic compact>
                    {Object.values(EncounterTypes)
                      .slice(1, Object.keys(EncounterTypes).length)
                      .map((key) => {
                        return (
                          <Popup
                            content={key}
                            position='top center'
                            trigger={
                              <Button
                                active={enc.type === key}
                                className=''
                                onClick={() => {
                                  dispatch({
                                    type: ActionKeys.SET_ENCOUNTER_TYPE,
                                    encType: key as EncounterTypes,
                                    index: idx,
                                  })
                                }}
                              >
                                <img
                                  height='20px'
                                  width='20px'
                                  src={EncounterTypesInfo[key].src}
                                />
                              </Button>
                            }
                          />
                        )
                      })}
                  </Button.Group>
                </div>
                {/* {showInvalid && (
                <Popup
                  content={invalidPopup}
                  // position='top center'
                  trigger={
                    <InvalidIcon
                      color='red'
                      size='large'
                      name='warning sign'
                    />
                  }
                />
              )} */}
              </div>
            </div>
            {/* <Button.Group size='tiny'>
                {Object.values(EncounterTypes)
                  .slice(1, Object.keys(EncounterTypes).length)
                  .map((key) => {
                    return (
                      <Button
                        active={enc.type === key}
                        onClick={() => {
                          if (
                            tableData.encounters.filter(
                              (enc) => enc.type === key
                            ).length !== 0
                          ) {
                            return
                          }
                          dispatch({
                            type: ActionKeys.SET_ENCOUNTER_TYPE,
                            encType: key as EncounterTypes,
                            index: idx,
                          })
                        }}
                      >
                        {key}
                      </Button>
                    )
                  })}
              </Button.Group> */}

            <Grid columns={2}>
              {tableData.gamesChosen.map((chosenGame) => {
                return (
                  <Grid.Column>
                    <GameLabel gameKey={chosenGame.key} />
                  </Grid.Column>
                )
              })}
            </Grid>
            {idx !== tableData.encounters.length - 1 && <Divider />}
          </>
        )
      })}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "12px",
        }}
      >
        <Button
          onClick={() =>
            dispatch({
              type: ActionKeys.ADD_ENCOUNTER,
            })
          }
          disabled={
            tableData.encounters.length === NUMBER_OF_ENCOUNTER_TYPES
          }
        >
          Add Encounter
        </Button>
        <Button
          onClick={() =>
            dispatch({
              type: ActionKeys.REMOVE_ENCOUNTER,
            })
          }
          disabled={tableData.encounters.length === 1}
        >
          Remove Encounter
        </Button>
      </div>
    </>
  )
}

export default EncountersForm
