import React, { ReactNode, useState } from "react"
import {
  Grid,
  Header,
  Segment,
  Input,
  Checkbox,
  Radio,
  Label,
  Form,
  Dropdown,
  Button,
  Table,
  Image,
} from "semantic-ui-react"
import games, { GameType } from "../data/GameData"
import { EncountersForm } from "./EncountersForm"

const GAMES_DROPDOWN_INITIAL_VALS: Array<DropdownMenuItemType> = [
  { key: "fr", text: "FireRed", value: "FR" },
  { key: "lg", text: "LeafGreen", value: "LG" },
  { key: "hg", text: "HeartGold", value: "HG" },
]

const ENCOUNTERS_INITIAL_VALS: Array<EncountersType> = ["grass", "surf"]

export type DropdownMenuItemType = {
  key: string
  text: string
  value: string
}

export const encounterTypes = {
  grass: "Rustling Grass",
  surf: "Surfing",
  fish: "Fishing",
  interact: "Interact",
}
let NUMBER_OF_ENCOUNTER_TYPES = Object.keys(encounterTypes).length
export type EncountersType = keyof typeof encounterTypes | null

const gameDropdownOptions: DropdownMenuItemType[] = games.map(
  (game: GameType) => {
    return { key: game.key, text: game.title, value: game.display }
  }
)

//TODO: Use the below function to robustify the look of the labels in the game selection dropdown

// const renderDropdownLabel = (menuItem: DropdownItemProps) => ({
//   color: games.find((game) => (game.title = menuItem.text as string))
//     ?.color,
//   content: menuItem.value,
//   image: games.find((game) => (game.title = menuItem.text as string))?.src,
// })

const PageBody = () => {
  //TODO: Raise all of the following states to a Context and implement a reducer to make changing the state in lower-level components simpler as well as converting the data to JSON later
  const [areaName, setAreaName] = useState<string>("")
  const [gamesChosen, setGamesChosen] = useState<
    Array<DropdownMenuItemType>
  >(GAMES_DROPDOWN_INITIAL_VALS)
  const [encounters, setEncounters] = useState<Array<EncountersType>>(
    ENCOUNTERS_INITIAL_VALS
  )
  return (
    <div className='App-body'>
      <Grid columns={2}>
        <Grid.Column>
          {/*TODO: Separate these into separate files*/}
          <LeftColumn
            areaName={areaName}
            setAreaName={setAreaName}
            gamesChosen={gamesChosen}
            setGamesChosen={setGamesChosen}
            encounters={encounters}
            setEncounters={setEncounters}
          />
        </Grid.Column>
        <Grid.Column>
          <RightColumn areaName={areaName} />
        </Grid.Column>
      </Grid>
    </div>
  )
}

type LeftColumnProps = {
  areaName: string
  setAreaName: React.Dispatch<React.SetStateAction<string>>
  gamesChosen: Array<DropdownMenuItemType>
  setGamesChosen: React.Dispatch<
    React.SetStateAction<Array<DropdownMenuItemType>>
  >
  encounters: Array<EncountersType>
  setEncounters: React.Dispatch<
    React.SetStateAction<Array<EncountersType>>
  >
}

const LeftColumn: React.FC<LeftColumnProps> = ({
  areaName,
  setAreaName,
  gamesChosen,
  setGamesChosen /*TODO: This isn't being used because the Dropdown isn't controlled yet*/,
  encounters,
  setEncounters,
}) => {
  return (
    <>
      <Segment.Group vertical floated='left' id='config'>
        <Segment
          className='primary-config' /*TODO: This className isn't doing anything currently*/
        >
          <Form relaxed>
            <Form.Field>
              <Input
                label={{ basic: true, content: "Area Name" }}
                value={areaName}
                placeholder={"Route 1"}
                onChange={(e) => setAreaName(e.target.value)}
                fluid
                /*TODO: Devise a way to batch the calls to setAreaName so that the table's header doesn't change until the user is done typing*/
              />
            </Form.Field>
            <Form.Field>
              <Label basic size='large'>
                Sections?
              </Label>
              <Checkbox
                style={{ paddingLeft: "8px", verticalAlign: "sub" }}
                /*TODO: Implement Sections, hook up this form to the table*/
              />
              {/*TODO: Add Clear button, function to bring up 'Are you sure?' Modal, and data-wipe function for the 'Yes, clear' button on the Modal*/}
            </Form.Field>
            <Form.Field
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Label basic size='large'>
                Percentages
              </Label>
              <Radio
                toggle /*TODO: Control this form so that the EncountersForm toggles between numeric input and dropdown input*/
              />
              <Label basic size='large'>
                Rarity
              </Label>
            </Form.Field>
          </Form>
        </Segment>
        <Segment id='secondary-config'>
          <Form>
            <Form.Field>
              <Label
                basic
                size='large'
                style={{
                  marginRight: "8px",
                }} /*TODO: Get the Label and the Dropdown on the same line*/
              >
                Games:
              </Label>
              <Dropdown
                fluid
                multiple
                selection
                options={gameDropdownOptions}
                defaultValue={GAMES_DROPDOWN_INITIAL_VALS.map(
                  (option) => option.value
                )}
                // value={gamesChosen}
                allowAdditions
                // onChange={(e: React.ChangeEvent) => setGamesChosen(e.target.value)}
                //TODO: Add control to this Dropdown
              />
            </Form.Field>
            {/*TODO: Split the above section into its own Segment, potentially its own component and file*/}
            <Form.Field>
              <EncountersForm
                encounters={encounters}
                setEncounters={setEncounters}
                gamesChosen={gamesChosen}
              />
              {/*TODO: Move the below two Buttons into EncountersForm */}
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
                    setEncounters(Array.from(encounters).concat([null]))
                  }
                  disabled={
                    encounters.length === NUMBER_OF_ENCOUNTER_TYPES
                  }
                >
                  Add Encounter
                </Button>
                <Button
                  onClick={() =>
                    setEncounters(
                      encounters.slice(0, encounters.length - 1)
                    )
                  }
                  disabled={encounters.length === 1}
                >
                  Remove Encounter
                </Button>
              </div>
            </Form.Field>
          </Form>
        </Segment>
      </Segment.Group>
      <Segment id='loadsave'>
        <Header as='h4'>Load/Save</Header>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Dropdown
            placeholder={"Pick your table"}
            selection /*TODO: Add control, options, implement cookies*/
          />
          <Button>Load</Button>
          <Button>Save</Button>
        </div>
        <p>Here are some words</p>
        {/*TODO: Create some buttons for Examples, where Example 1 is the default template the tool loads with; uses same function as Clear button*/}
      </Segment>
      <Segment id='resources'>
        <Header as='h4'>Resources</Header>
      </Segment>
    </>
  )
}

type RightColumnProps = {
  areaName: string
}

const RightColumn: React.FC<RightColumnProps> = ({ areaName }) => {
  return (
    <Segment vertical textAlign='center' basic>
      <Header as='h2'>
        {`${areaName
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")} Encounter Table`}
      </Header>
      <Table textAlign='center'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='3' /*TODO: What the child says*/>
              This width of this table header should be determined
              dynamically by the maximum number of pokémon in any of the
              encounters
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Pidgey</Table.Cell>{" "}
            {/*TODO: Dynamically generate these Cell labels, create data files for all the available Pokémon*/}
            <Table.Cell>Rattata</Table.Cell>
            <Table.Cell>Oddish</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>50%</Table.Cell>{" "}
            {/*TODO: Dynamically generate these Cell labels from the EncountersForm and the Percentage/Rarity switch*/}
            <Table.Cell>40%</Table.Cell>
            <Table.Cell>10%</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Image centered src='FRLGpidgey.png' />{" "}
              {/*TODO: Use @pkmn/img package to fetch these images instead of hosting them*/}
            </Table.Cell>
            <Table.Cell>
              <Image centered src='FRLGrattata.png' />
            </Table.Cell>
            <Table.Cell>
              <Image centered src='FRLGoddish.png' />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Segment>
  )
}

export default PageBody
