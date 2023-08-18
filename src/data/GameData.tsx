import { SemanticCOLORS } from "semantic-ui-react"

const gameKeys = [
  "red",
  "blue",
  "yellow",
  "green",
  "gold",
  "silver",
  "crystal",
  "ruby",
  "sapphire",
  "emerald",
  "firered",
  "leafgreen",
  "diamond",
  "pearl",
  "platinum",
  "heartgold",
  "soulsilver",
  "black",
  "white",
  "black2",
  "white2",
] as const
export type GameKeysType = (typeof gameKeys)[number]

export type GameType = {
  key: GameKeysType
  title: string
  display: string
  color: SemanticCOLORS | "white" | "silver"
  gen: 1 | 2 | 3 | 4 | 5
  src?: string
}

export const getGameColor = (gameKey: GameKeysType) => {
  const game = games.find((game) => game.key === gameKey)
  if (gameKey === "white" || gameKey === "silver") {
    return undefined
  } else {
    return game?.color
  }
}

const games: GameType[] = [
  {
    key: "red",
    title: "Red",
    display: "R",
    color: "orange",
    gen: 1,
    src: "",
  },
  {
    key: "blue",
    title: "Blue",
    display: "B",
    color: "blue",
    gen: 1,
    src: "",
  },
  {
    key: "yellow",
    title: "Yellow",
    display: "Y",
    color: "yellow",
    gen: 1,
    src: "",
  },
  {
    key: "green",
    title: "Green",
    display: "G",
    color: "olive",
    gen: 1,
    src: "",
  },
  {
    key: "gold",
    title: "Gold",
    display: "G",
    color: "yellow",
    gen: 2,
    src: "",
  },
  {
    key: "silver",
    title: "Silver",
    display: "S",
    color: "grey",
    gen: 2,
    src: "",
  },
  {
    key: "crystal",
    title: "Crystal",
    display: "S",
    color: "teal",
    gen: 2,
    src: "",
  },
  {
    key: "ruby",
    title: "Ruby",
    display: "R",
    color: "red",
    gen: 3,
    src: "",
  },
  {
    key: "sapphire",
    title: "Sapphire",
    display: "S",
    color: "blue",
    gen: 3,
    src: "",
  },
  {
    key: "emerald",
    title: "Emerald",
    display: "E",
    color: "green",
    gen: 3,
    src: "",
  },
  {
    key: "firered",
    title: "FireRed",
    display: "FR",
    color: "orange",
    gen: 3,
    src: "",
  },
  {
    key: "leafgreen",
    title: "LeafGreen",
    display: "LG",
    color: "olive",
    gen: 3,
    src: "",
  },
  {
    key: "diamond",
    title: "Diamond",
    display: "D",
    color: "blue",
    gen: 4,
    src: "",
  },
  {
    key: "pearl",
    title: "Pearl",
    display: "P",
    color: "pink",
    gen: 4,
    src: "",
  },
  {
    key: "platinum",
    title: "Platinum",
    display: "Pt",
    color: "grey",
    gen: 4,
    src: "",
  },
  {
    key: "heartgold",
    title: "HeartGold",
    display: "HG",
    color: "yellow",
    gen: 4,
    src: "",
  },
  {
    key: "soulsilver",
    title: "SoulSilver",
    display: "SS",
    color: "silver",
    gen: 4,
    src: "",
  },
  {
    key: "black",
    title: "Black",
    display: "B",
    color: "black",
    gen: 5,
    src: "",
  },
  {
    key: "white",
    title: "White",
    display: "W",
    color: "white",
    gen: 5,
    src: "",
  },
  {
    key: "black2",
    title: "Black 2",
    display: "B2",
    color: "black",
    gen: 5,
    src: "",
  },
  {
    key: "white2",
    title: "White 2",
    display: "W2",
    color: "white",
    gen: 5,
    src: "",
  },
]

export default games
