import React, { ReactNode } from "react"
import {
  encounterTypes,
  EncountersType,
  DropdownMenuItemType,
} from "./PageBody"
import { Button, Grid, Label, SemanticCOLORS } from "semantic-ui-react"
import games from "../data/GameData"

type EncountersFormType = {
  encounters: Array<EncountersType>
  setEncounters: React.Dispatch<
    React.SetStateAction<Array<EncountersType>>
  >
  gamesChosen: Array<DropdownMenuItemType>
}

export const EncountersForm: React.FC<EncountersFormType> = ({
  encounters,
  setEncounters,
  gamesChosen, //TODO: Remove these props after Context and reducer are implemented, add Context
}) => {
  return (
    <>
      {encounters.map((enc, idx) => {
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
                      active={enc === key}
                      onClick={() => {
                        //TODO: Replace with a dispatcher
                        setEncounters(
                          encounters
                            .slice(0, idx)
                            .concat([key as EncountersType])
                            .concat(
                              encounters.slice(idx + 1, encounters.length)
                            )
                        )
                      }}
                    >
                      {encounterTypes[(key as EncountersType)!]}
                    </Button>
                  )
                })}
              </Button.Group>
            </div>
            <Grid columns={2}>
              {gamesChosen.map<ReactNode>((chosenGame) => {
                return (
                  <Grid.Column>
                    <Label
                      color={
                        games.find(
                          (game) => game.title === chosenGame.text
                        )?.color as SemanticCOLORS
                      }
                    >
                      {chosenGame.text}
                    </Label>
                  </Grid.Column>
                )
              })}
            </Grid>
          </>
        )
      })}
    </>
  )
}

export default EncountersForm
