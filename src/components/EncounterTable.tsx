import { useContext } from "react"
import TableDataType from "../data/TableData"
import { TableDataContext } from "../data/DataContext"
import { Header, Segment, Table, Image } from "semantic-ui-react"
import { EncounterTypes, EncounterTypesInfo } from "./EncountersForm"
import { GameKeys, getGameColor, getGameTitle } from "../data/GameData"
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
      <>
        {tableData.encounters.map((encounter, idx) => {
          return (
            <Table
              textAlign='center'
              attached={
                idx === 0
                  ? "top"
                  : idx === tableData.encounters.length - 1
                  ? "bottom"
                  : true
              }
              celled={false}
              compact
              color={EncounterTypesInfo[encounter.type].bgColor}
            >
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
            </Table>
          )
        })}
      </>
    </Segment>
  )
}

type EncounterTypeHeaderRowProps = {
  encType: EncounterTypes
  rows: number
}

const EncounterTypeHeaderRow: React.FC<EncounterTypeHeaderRowProps> = ({
  encType,
  rows,
}) => {
  return (
    <Table.Row color={EncounterTypesInfo[encType].bgColor}>
      {/*TODO: This color property isn't really coloring the background, see GameBannerBodyRow for a good example*/}
      <Table.HeaderCell colSpan={rows}>
        {EncounterTypesInfo[encType].src && (
          <Image
            height='24px'
            width='24px'
            spaced='right'
            src={EncounterTypesInfo[encType].src}
          />
        )}
        {encType}
        {EncounterTypesInfo[encType].src && (
          <Image
            height='24px'
            width='24px'
            spaced='left'
            src={EncounterTypesInfo[encType].src}
          />
        )}
      </Table.HeaderCell>
    </Table.Row>
  )
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
      <Table.HeaderCell
        style={{
          borderRadius: "3px",
          backgroundColor: `#${getGameColor(gameKey)}`,
        }}
        textAlign='left'
        colSpan={rows}
      >
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
              {/*TODO: Use @pkmn/img package to fetch these images instead of hosting them*/}
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
