import { ColorfulLabel } from "../components/PageBody"

export enum GameKeys {
  RED = "red",
  BLUE = "blue",
  YELLOW = "yellow",
  GREEN = "green",
  GOLD = "gold",
  SILVER = "silver",
  CRYSTAL = "crystal",
  RUBY = "ruby",
  SAPPHIRE = "sapphire",
  EMERALD = "emerald",
  FIRERED = "firered",
  LEAFGREEN = "leafgreen",
  DIAMOND = "diamond",
  PEARL = "pearl",
  PLATINUM = "platinum",
  HEARTGOLD = "heartgold",
  SOULSILVER = "soulsilver",
  BLACK = "black",
  WHITE = "white",
  BLACK2 = "black2",
  WHITE2 = "white2",
}
export type PossibleGensType = 1 | 2 | 3 | 4 | 5
export type GameType = {
  key: GameKeys
  title: string
  display: string
  color: string
  gen: PossibleGensType
  src?: string
}

export const getGame = (gameKey: GameKeys): GameType => {
  return games.find((game) => game.key === gameKey) as GameType //the find should succeed
}
export const getGameTitle = (gameKey: GameKeys): string => {
  return getGame(gameKey).title
}
export const getGameDisplay = (gameKey: GameKeys): string => {
  return getGame(gameKey).display
}
export const getGameColor = (gameKey: GameKeys): string => {
  return getGame(gameKey).color
}
export const getGameGen = (gameKey: GameKeys): PossibleGensType => {
  return getGame(gameKey).gen
}
export const getGameSrc = (gameKey: GameKeys): string | undefined => {
  return getGame(gameKey).src
}

export const GameLabel: React.FC<{ gameKey: GameKeys }> = ({
  gameKey,
}) => {
  return (
    <ColorfulLabel $stripped $color={getGameColor(gameKey)}>
      {getGameTitle(gameKey)}
    </ColorfulLabel>
  )
}

const games: GameType[] = [
  {
    key: GameKeys.RED,
    title: "Red",
    display: "R",
    color: "FF1111",
    gen: 1,
    src: "",
  },
  {
    key: GameKeys.BLUE,
    title: "Blue",
    display: "B",
    color: "1111FF",
    gen: 1,
    src: "",
  },
  {
    key: GameKeys.YELLOW,
    title: "Yellow",
    display: "Y",
    color: "FFD733",
    gen: 1,
    src: "",
  },
  {
    key: GameKeys.GREEN,
    title: "Green",
    display: "G",
    color: "11BB11",
    gen: 1,
    src: "",
  },
  {
    key: GameKeys.GOLD,
    title: "Gold",
    display: "G",
    color: "DAA520",
    gen: 2,
    src: "",
  },
  {
    key: GameKeys.SILVER,
    title: "Silver",
    display: "S",
    color: "C0C0C0",
    gen: 2,
    src: "",
  },
  {
    key: GameKeys.CRYSTAL,
    title: "Crystal",
    display: "S",
    color: "4FD9FF",
    gen: 2,
    src: "",
  },
  {
    key: GameKeys.RUBY,
    title: "Ruby",
    display: "R",
    color: "A00000",
    gen: 3,
    src: "",
  },
  {
    key: GameKeys.SAPPHIRE,
    title: "Sapphire",
    display: "S",
    color: "0000A0",
    gen: 3,
    src: "",
  },
  {
    key: GameKeys.EMERALD,
    title: "Emerald",
    display: "E",
    color: "00A000",
    gen: 3,
    src: "",
  },
  {
    key: GameKeys.FIRERED,
    title: "FireRed",
    display: "FR",
    color: "FF7327",
    gen: 3,
    src: "",
  },
  {
    key: GameKeys.LEAFGREEN,
    title: "LeafGreen",
    display: "LG",
    color: "00DD00",
    gen: 3,
    src: "",
  },
  {
    key: GameKeys.DIAMOND,
    title: "Diamond",
    display: "D",
    color: "AAAAFF",
    gen: 4,
    src: "",
  },
  {
    key: GameKeys.PEARL,
    title: "Pearl",
    display: "P",
    color: "FFAAAA",
    gen: 4,
    src: "",
  },
  {
    key: GameKeys.PLATINUM,
    title: "Platinum",
    display: "Pt",
    color: "999999",
    gen: 4,
    src: "",
  },
  {
    key: GameKeys.HEARTGOLD,
    title: "HeartGold",
    display: "HG",
    color: "B69E00",
    gen: 4,
    src: "",
  },
  {
    key: GameKeys.SOULSILVER,
    title: "SoulSilver",
    display: "SS",
    color: "C0C0E1",
    gen: 4,
    src: "",
  },
  {
    key: GameKeys.BLACK,
    title: "Black",
    display: "B",
    color: "444444",
    gen: 5,
    src: "",
  },
  {
    key: GameKeys.WHITE,
    title: "White",
    display: "W",
    color: "E1E1E1",
    gen: 5,
    src: "",
  },
  {
    key: GameKeys.BLACK2,
    title: "Black 2",
    display: "B2",
    color: "424B50",
    gen: 5,
    src: "",
  },
  {
    key: GameKeys.WHITE2,
    title: "White 2",
    display: "W2",
    color: "E3CED0",
    gen: 5,
    src: "",
  },
]

export default games
