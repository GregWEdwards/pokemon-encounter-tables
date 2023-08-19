import { useContext } from "react"
import TableDataType from "../data/TableData"
import { TableDataContext } from "../data/DataContext"
import { Header, Segment, Table, Image } from "semantic-ui-react"
import { EncountersType } from "./EncountersForm"
import { GameKeys, getGameTitle } from "../data/GameData"
import PokemonInputType, {
  PokemonTypeLabel,
  getPokemon,
} from "../data/PokemonData"
import { ColorfulLabel } from "./PageBody"

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
      <Table textAlign='center' celled={false} compact>
        <>
          {tableData.encounters.map((encounter) => {
            return (
              <>
                <Table.Header>
                  <EncounterTypeHeaderRow
                    encType={encounter.type}
                    rows={3}
                  />
                </Table.Header>
                <Table.Body>
                  {encounter.data.map((datum) => {
                    return (
                      <>
                        <GameBannerBodyRow
                          gameKey={datum.game}
                          rows={datum.pokemon.length}
                        />
                        <PokemonBodyRows
                          pokemon={datum.pokemon}
                          percentage={tableData.percentage}
                        />
                      </>
                    )
                  })}
                </Table.Body>
              </>
            )
          })}
        </>
      </Table>

      <Table textAlign='center' id='exampleTable'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan={3}>
              {"Example Table"}
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell colSpan={3}>{"GRASS"}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell textAlign='left' colSpan={3}>
              {"LeafGreen"}
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Pidgey</Table.Cell>{" "}
            {/*TODO: Dynamically generate these Cell labels, create data files for all the available Pokémon*/}
            <Table.Cell>Rattata</Table.Cell>
            <Table.Cell>Oddish</Table.Cell>
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
            <Table.HeaderCell textAlign='left' colSpan={3}>
              {"FireRed"}
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Pidgey</Table.Cell>{" "}
            {/*TODO: Dynamically generate these Cell labels, create data files for all the available Pokémon*/}
            <Table.Cell>Rattata</Table.Cell>
            <Table.Cell>Bellsprout</Table.Cell>
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
              <Image centered src='FRLGbellsprout.png' />
            </Table.Cell>
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
        </Table.Body>
      </Table>
    </Segment>
  )
}

type EncounterTypeHeaderRowProps = {
  encType: EncountersType
  rows: number
}

const EncounterTypeHeaderRow: React.FC<EncounterTypeHeaderRowProps> = ({
  encType,
  rows,
}) => {
  let headerCell = null
  switch (encType) {
    case null:
      headerCell = <Table.HeaderCell colSpan={rows}>NULL</Table.HeaderCell>
      break
    case "grass":
      headerCell = (
        <Table.HeaderCell colSpan={rows}>GRASS</Table.HeaderCell>
      )
      break
    case "surf":
      headerCell = <Table.HeaderCell colSpan={rows}>SURF</Table.HeaderCell>
      break
    case "fish":
      headerCell = <Table.HeaderCell colSpan={rows}>FISH</Table.HeaderCell>
      break
    case "interact":
      headerCell = (
        <Table.HeaderCell colSpan={rows}>INTERACT</Table.HeaderCell>
      )
      break
  }
  return <Table.Row>{headerCell}</Table.Row>
}

type GameBannerBodyRowProps = {
  gameKey: GameKeys
  rows: number
}

const GameBannerBodyRow: React.FC<GameBannerBodyRowProps> = ({
  gameKey,
  rows,
}) => {
  return (
    <Table.Row>
      <Table.HeaderCell textAlign='left' colSpan={rows}>
        {getGameTitle(gameKey)}
      </Table.HeaderCell>
    </Table.Row>
  )
}

type PokemonBodyRowsType = {
  pokemon: Array<PokemonInputType>
  percentage: boolean
}

const PokemonBodyRows: React.FC<PokemonBodyRowsType> = ({
  pokemon,
  percentage,
}) => {
  return (
    <>
      <Table.Row>
        {pokemon.map((pokemon) => {
          return (
            <Table.Cell>
              <Image centered src={getPokemon(pokemon.dexNo).src} />
            </Table.Cell>
          )
        })}
      </Table.Row>
      <Table.Row>
        {pokemon.map((pokemon) => {
          return <Table.Cell>{getPokemon(pokemon.dexNo).id}</Table.Cell>
        })}
      </Table.Row>
      <Table.Row>
        {pokemon.map((pokemon) => {
          return (
            <Table.Cell>
              {getPokemon(pokemon.dexNo).priType ? (
                <PokemonTypeLabel
                  type={getPokemon(pokemon.dexNo).priType!}
                />
              ) : (
                <ColorfulLabel color={"4A5568"}>???</ColorfulLabel>
              )}
              {getPokemon(pokemon.dexNo).secType && (
                <PokemonTypeLabel
                  type={getPokemon(pokemon.dexNo).secType!}
                />
              )}
            </Table.Cell>
          )
        })}
      </Table.Row>
      <Table.Row>
        {pokemon.map((pokemon) => {
          return (
            <Table.Cell>
              {percentage
                ? pokemon.percentage
                  ? pokemon.percentage + "%"
                  : "0%"
                : pokemon.rarity ?? "?"}
            </Table.Cell>
          )
        })}
      </Table.Row>
    </>
  )
}

export default EncounterTable
