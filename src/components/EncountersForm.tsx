import React, { useContext } from "react"
import { Button, Grid, Label, SemanticCOLORS } from "semantic-ui-react"
import {
  ActionKeys,
  DispatchActionTypes,
  TableDataContext,
  TableDataDispatchContext,
} from "./DataContext"
import TableDataType from "../data/TableData"

export const encounterTypes = {
  grass: "Rustling Grass",
  surf: "Surfing",
  fish: "Fishing",
  interact: "Interact",
}
let NUMBER_OF_ENCOUNTER_TYPES = Object.keys(encounterTypes).length
export type EncountersType = keyof typeof encounterTypes | null

export const EncountersForm: React.FC = () => {
  const tableData: TableDataType = useContext(TableDataContext)
  const dispatch: React.Dispatch<DispatchActionTypes> = useContext(
    TableDataDispatchContext
  )
  return (
    <>
      {tableData.encounters.map((enc, idx) => {
        return (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "12px",
              }} //TODO: Apply these styles properly
            >
              <p style={{ marginRight: "12px" }}>Encounter Type</p>
              <Button.Group size='tiny'>
                {Object.keys(encounterTypes).map((key) => {
                  return (
                    <Button
                      active={enc.type === key}
                      onClick={() =>
                        dispatch({
                          type: ActionKeys.SET_ENCOUNTER_TYPE,
                          encType: key as EncountersType,
                          index: idx,
                        })
                      }
                    >
                      {encounterTypes[(key as EncountersType)!]}
                    </Button>
                  )
                })}
              </Button.Group>
            </div>
            <Grid columns={2}>
              {tableData.gamesChosen.map((chosenGame) => {
                return (
                  <Grid.Column>
                    <Label color={chosenGame.color as SemanticCOLORS}>
                      {chosenGame.title}
                    </Label>
                  </Grid.Column>
                )
              })}
            </Grid>
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
