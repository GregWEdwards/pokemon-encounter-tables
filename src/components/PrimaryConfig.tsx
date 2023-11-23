import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  Icon,
  Input,
  Label,
  Modal,
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
import { useContext, useState } from "react"
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
  const [modalOpen, setModalOpen] = useState<boolean>(false)
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Form.Field control={Button.Group}>
              <Button
                toggle
                active={tableData.percentage}
                onClick={() =>
                  dispatch({
                    type: ActionKeys.SWITCH_PERCENTAGES,
                  })
                }
              >
                {"Percentages"}
              </Button>
              <Button.Or />
              <Button
                toggle
                active={!tableData.percentage}
                onClick={() =>
                  dispatch({
                    type: ActionKeys.SWITCH_PERCENTAGES,
                  })
                }
              >
                {"Rarity"}
              </Button>
            </Form.Field>
            <Form.Field>
              <Button negative icon onClick={() => setModalOpen(true)}>
                Clear
                <Icon name='cancel' />
              </Button>
              <Modal closeIcon dimmer='blurring' open={modalOpen}>
                {/* TODO: Close button in upper corner of Modal isn't working */}
                <Modal.Header>Are you sure?</Modal.Header>
                <Modal.Content>
                  {
                    "If you continue, all the current data you have saved in this document will be lost and replaced.\nIf you do not wish to lose that data, click Back and save your data first using the Load/Save form."
                  }
                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={() => setModalOpen(false)}>Back</Button>
                  <Button
                    negative
                    onClick={() => {
                      setModalOpen(false)
                      dispatch({
                        type: ActionKeys.LOAD_TABLE_DATA,
                        dataKey: "nullData",
                      })
                    }}
                  >
                    Yes, clear it <Icon name='cancel' />
                  </Button>
                </Modal.Actions>
              </Modal>
            </Form.Field>
          </div>
          <Form.Field>
            <Label basic size='large'>
              Sections?
            </Label>
            <Checkbox
              style={{ paddingLeft: "8px", verticalAlign: "sub" }}
              /*TODO: Implement Sections, hook up this form to the table*/
            />
          </Form.Field>
        </Form>
      </Segment>
      <Segment id='secondary-config'>
        <Form>
          <Form.Field>
            <label>Games:</label>
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
