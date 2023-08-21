import {
  Checkbox,
  Dropdown,
  Form,
  Input,
  Label,
  Radio,
  Segment,
} from "semantic-ui-react"
import {
  ActionKeys,
  DispatchActionTypes,
  TableDataContext,
  TableDataDispatchContext,
} from "../data/DataContext"
import EncountersForm from "./EncountersForm"
import TableDataType from "../data/TableData"
import { useContext } from "react"
import games, { GameType } from "../data/GameData"

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

/*TODO: Use the below function to robustify the look of the labels in the game selection dropdown
 const renderDropdownLabel = (menuItem: DropdownItemProps) => ({
   color: getGameColor(menuItem.key)
   content: menuItem.value,
   image: getGameSrc(menuItem.key)
 })*/

const PrimaryConfig: React.FC = () => {
  const tableData: TableDataType = useContext(TableDataContext)
  const dispatch: React.Dispatch<DispatchActionTypes> = useContext(
    TableDataDispatchContext
  )

  return (
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
              /*TODO: Add control to this Dropdown*/
            />
          </Form.Field>
          {/*TODO: Split the above section into its own Segment, potentially its own component and file*/}
          <Form.Field>
            <EncountersForm />
          </Form.Field>
        </Form>
      </Segment>
    </Segment.Group>
  )
}

export default PrimaryConfig
