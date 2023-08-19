import React from "react"
import { Grid, Label } from "semantic-ui-react"
import { ContextWrapper } from "../data/DataContext"
import PrimaryConfig from "./PrimaryConfig"
import LoadSave from "./LoadSave"
import Resources from "./Resources"
import EncounterTable from "./EncounterTable"
import styled from "styled-components"

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

const shouldTextBeWhite = (color: string) => {
  if (color.length !== 6) {
    throw Error(`The color string ${color} must be 6 characters long`)
  }
  const aRgbHex = color.match(/.{1,2}/g)!
  const aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ]
  return aRgb.reduce((acc, curr) => acc + curr, 0) <= 650
}

export const ColorfulLabel = styled(Label)`
  background-color: #${(props) => (props.$stripped ? "ffffff" : props.$color)} !important;
  border: 1px solid #${(props) => props.$color} !important;
  color: #${(props) => (props.$stripped ? props.$color : shouldTextBeWhite(props.$color) ? "FFFFFF" : "000000")} !important;
`

export default PageBody
