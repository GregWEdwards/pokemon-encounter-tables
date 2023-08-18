import React, { useContext } from "react"
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
import TableDataType from "../data/TableData"
import {
  TableDataContext,
  ActionKeys,
  ContextWrapper,
  DispatchActionTypes,
  TableDataDispatchContext,
} from "./DataContext"

export type DropdownMenuItemType = {
  key: string
  text: string
  value: string
}

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
  return (
    <ContextWrapper>
      <div className='App-body'>
        <Grid columns={2}>
          <Grid.Column>
            {/*TODO: Separate these into separate files*/}
            <LeftColumn />
          </Grid.Column>
          <Grid.Column>
            <RightColumn />
          </Grid.Column>
        </Grid>
      </div>
    </ContextWrapper>
  )
}

const LeftColumn: React.FC /*<LeftColumnProps>*/ = () => {
  const tableData: TableDataType = useContext(TableDataContext)
  const dispatch: React.Dispatch<DispatchActionTypes> = useContext(
    TableDataDispatchContext
  )
  return (
    <>
      <Segment.Group vertical='true' floated='left' id='config'>
        <Segment
          className='primary-config' /*TODO: This className isn't doing anything currently*/
        >
          <Form>
            <Form.Field>
              <Input
                label={{ basic: true, content: "Area Name" }}
                value={tableData.areaName}
                placeholder={"Route 1"}
                onChange={(e) =>
                  dispatch({
                    type: ActionKeys.SET_AREANAME,
                    name: e.target.value,
                  })
                }
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
                toggle
                checked={!tableData.percentage}
                onClick={() =>
                  dispatch({
                    type: ActionKeys.SWITCH_PERCENTAGES,
                  })
                }
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
                value={tableData.gamesChosen.map((game) => game.display)}
                search
                allowAdditions
                // onChange={(e) => dispatch({
                //   type: ActionKeys.ADD_GAME,
                //   gameKey: e.target.value
                // })}
                //TODO: Add control to this Dropdown
              />
            </Form.Field>
            {/*TODO: Split the above section into its own Segment, potentially its own component and file*/}
            <Form.Field>
              <EncountersForm />
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

const RightColumn: React.FC = () => {
  const tableData: TableDataType = useContext(TableDataContext)
  return (
    <Segment vertical textAlign='center' basic>
      <Header as='h2'>
        {`${tableData.areaName
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
            <Table.Cell>
              {tableData.percentage ? "50%" : "common"}
            </Table.Cell>{" "}
            {/*TODO: Dynamically generate these Cell labels from the EncountersForm and the Percentage/Rarity switch*/}
            <Table.Cell>
              {tableData.percentage ? "40%" : "uncommon"}
            </Table.Cell>
            <Table.Cell>
              {tableData.percentage ? "10%" : "rare"}
            </Table.Cell>
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
