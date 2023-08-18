import React from "react"
import { Grid } from "semantic-ui-react"
import { ContextWrapper } from "./DataContext"
import PrimaryConfig from "./PrimaryConfig"
import LoadSave from "./LoadSave"
import Resources from "./Resources"
import EncounterTable from "./EncounterTable"

const LeftColumn: React.FC = () => {
  return (
    <>
      <PrimaryConfig />
      <LoadSave />
      <Resources />
    </>
  )
}

const PageBody = () => {
  return (
    <ContextWrapper>
      <div className='App-body'>
        <Grid columns={2}>
          <Grid.Column>
            <LeftColumn />
          </Grid.Column>
          <Grid.Column>
            <EncounterTable />
          </Grid.Column>
        </Grid>
      </div>
    </ContextWrapper>
  )
}

export default PageBody
