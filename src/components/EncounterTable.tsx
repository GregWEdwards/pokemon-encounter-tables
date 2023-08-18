import { useContext } from "react"
import TableDataType from "../data/TableData"
import { TableDataContext } from "./DataContext"
import { Header, Segment, Table, Image } from "semantic-ui-react"

const EncounterTable: React.FC = () => {
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

export default EncounterTable
