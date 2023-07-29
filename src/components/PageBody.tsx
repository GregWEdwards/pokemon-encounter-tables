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
  SemanticCOLORS,
  DropdownItemProps,
  Button,
  Table,
  Image,
} from "semantic-ui-react"
import games, { gamesType } from "../data/GameData"

type DropdownMenuItemType = { key: string; text: string; value: string }

type TypesOfEncounters = "grass" | "surf" | "fish" | "interact"
type EncounterType = {
  index: number
  type: TypesOfEncounters | null
}

const gameDropdownOptions: DropdownMenuItemType[] = games.map(
  (game: gamesType) => {
    return { key: game.key, text: game.title, value: game.display }
  }
)

// const renderDropdownLabel = (menuItem: DropdownItemProps) => ({
//   color: games.find((game) => (game.title = menuItem.text as string))
//     ?.color,
//   content: menuItem.value,
//   image: games.find((game) => (game.title = menuItem.text as string))?.src,
// })

const PageBody = () => {
  const [areaName, setAreaName] = useState<string>("")
  //gamesChosen will need to be raised to here as well as encounters
  return (
    <div className='App-body'>
      <Grid columns={2}>
        <Grid.Column>
          <LeftColumn areaName={areaName} setAreaName={setAreaName} />
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
}

const LeftColumn: React.FC<LeftColumnProps> = ({
  areaName,
  setAreaName,
}) => {
  const [gamesChosen, setGamesChosen] = useState<
    Array<DropdownMenuItemType>
  >([
    { key: "fr", text: "FireRed", value: "FR" },
    { key: "lg", text: "LeafGreen", value: "LG" },
    { key: "hg", text: "HeartGold", value: "HG" },
  ])

  const [encounters, setEncounters] = useState<Array<EncounterType>>([
    { index: 0, type: "grass" },
    { index: 1, type: "surf" },
  ])

  const EncounterTypeTray: React.FC<{
    index: number
    type: TypesOfEncounters | null
  }> = ({ index, type }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "12px",
        }}
      >
        <p style={{ marginRight: "12px" }}>Encounter Type</p>
        <Button
          size='tiny'
          active={type === "grass"}
          onClick={() => {
            setEncounters(
              encounters
                .slice(0, index)
                .concat([{ index: index, type: "grass" }])
                .concat(encounters.slice(index + 1, encounters.length))
            )
          }}
        >
          Rustling Grass
        </Button>
        <Button
          size='tiny'
          active={type === "surf"}
          onClick={() => {
            setEncounters(
              encounters
                .slice(0, index)
                .concat([{ index: index, type: "surf" }])
                .concat(encounters.slice(index + 1, encounters.length))
            )
          }}
        >
          Surfing
        </Button>
        <Button
          size='tiny'
          active={type === "fish"}
          onClick={() => {
            setEncounters(
              encounters
                .slice(0, index)
                .concat([{ index: index, type: "fish" }])
                .concat(encounters.slice(index + 1, encounters.length))
            )
          }}
        >
          Fishing
        </Button>
        <Button
          size='tiny'
          active={type === "interact"}
          onClick={() => {
            setEncounters(
              encounters
                .slice(0, index)
                .concat([{ index: index, type: "interact" }])
                .concat(encounters.slice(index + 1, encounters.length))
            )
          }}
        >
          Interact
        </Button>
      </div>
    )
  }

  return (
    <>
      <Segment.Group vertical floated='left' id='config'>
        <Segment className='primary-config'>
          <Form relaxed>
            <Form.Field>
              <Input
                label={{ basic: true, content: "Area Name" }}
                value={areaName}
                placeholder={"Route 1"}
                onChange={(e) => setAreaName(e.target.value)}
                fluid
              />
            </Form.Field>
            <Form.Field>
              <Label basic size='large'>
                Sections?
              </Label>
              <Checkbox
                style={{ paddingLeft: "8px", verticalAlign: "sub" }}
              />
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
              <Radio toggle />
              <Label basic size='large'>
                Rarity
              </Label>
            </Form.Field>
          </Form>
        </Segment>
        <Segment id='secondary-config'>
          <Form>
            <Form.Field>
              <Label basic size='large' style={{ marginRight: "8px" }}>
                Games:
              </Label>
              <Dropdown
                fluid
                multiple
                selection
                options={gameDropdownOptions}
                defaultValue={[]}
                // value={gamesChosen}
                allowAdditions
                // onChange={(e: React.ChangeEvent) => setGamesChosen(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              {encounters.map<ReactNode>((encounter) => {
                return (
                  <>
                    <EncounterTypeTray
                      index={encounter.index}
                      type={encounter.type}
                    />
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
                    encounters.length < 4
                      ? setEncounters(
                          Array.from(encounters).concat([
                            { index: encounters.length, type: null },
                          ])
                        )
                      : null
                  }
                >
                  Add Encounter
                </Button>
                <Button
                  onClick={() =>
                    encounters.length > 1
                      ? setEncounters(
                          encounters.slice(0, encounters.length - 1)
                        )
                      : null
                  }
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
          <Dropdown placeholder={"Pick your table"} selection />
          <Button>Load</Button>
          <Button>Save</Button>
        </div>
        <p>Here are some words</p>
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
      <Header as='h2'>{`${areaName
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")} Encounter Table`}</Header>
      {/* <pre>{JSON.stringify(gameDropdownOptions, null, 20)}</pre> */}

      <Table textAlign='center'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              This width of this table header should be determined
              dynamically by the maximum number of pokémon in any of the
              encounters
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Pidgey</Table.Cell>
            <Table.Cell>Rattata</Table.Cell>
            <Table.Cell>Oddish</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>50%</Table.Cell>
            <Table.Cell>40%</Table.Cell>
            <Table.Cell>10%</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Image centered src='FRLGpidgey.png' />
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
