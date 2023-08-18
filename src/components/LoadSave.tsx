import { Button, Dropdown, Header, Segment } from "semantic-ui-react"

const LoadSave: React.FC = () => {
  return (
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
  )
}

export default LoadSave
