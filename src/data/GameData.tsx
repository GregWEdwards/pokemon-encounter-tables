import { SemanticCOLORS } from "semantic-ui-react"

export type gamesType = {
  key: string
  title: string
  display: string
  color: SemanticCOLORS | "white" | "silver"
  gen: 1 | 2 | 3 | 4 | 5
  src: string
}

const games: gamesType[] = [
  {
    key: "re",
    title: "Red",
    display: "R",
    color: "orange",
    gen: 1,
    src: "",
  },
  {
    key: "bl",
    title: "Blue",
    display: "B",
    color: "blue",
    gen: 1,
    src: "",
  },
  {
    key: "ye",
    title: "Yellow",
    display: "Y",
    color: "yellow",
    gen: 1,
    src: "",
  },
  {
    key: "gr",
    title: "Green",
    display: "G",
    color: "olive",
    gen: 1,
    src: "",
  },
  {
    key: "go",
    title: "Gold",
    display: "G",
    color: "yellow",
    gen: 2,
    src: "",
  },
  {
    key: "si",
    title: "Silver",
    display: "S",
    color: "grey",
    gen: 2,
    src: "",
  },
  {
    key: "cr",
    title: "Crystal",
    display: "S",
    color: "teal",
    gen: 2,
    src: "",
  },
  {
    key: "ru",
    title: "Ruby",
    display: "R",
    color: "red",
    gen: 3,
    src: "",
  },
  {
    key: "sa",
    title: "Sapphire",
    display: "S",
    color: "blue",
    gen: 3,
    src: "",
  },
  {
    key: "em",
    title: "Emerald",
    display: "E",
    color: "green",
    gen: 3,
    src: "",
  },
  {
    key: "fr",
    title: "FireRed",
    display: "FR",
    color: "orange",
    gen: 3,
    src: "",
  },
  {
    key: "lg",
    title: "LeafGreen",
    display: "LG",
    color: "olive",
    gen: 3,
    src: "",
  },
  {
    key: "di",
    title: "Diamond",
    display: "D",
    color: "blue",
    gen: 4,
    src: "",
  },
  {
    key: "pe",
    title: "Pearl",
    display: "P",
    color: "pink",
    gen: 4,
    src: "",
  },
  {
    key: "pl",
    title: "Platinum",
    display: "Pt",
    color: "grey",
    gen: 4,
    src: "",
  },
  {
    key: "hg",
    title: "HeartGold",
    display: "HG",
    color: "yellow",
    gen: 4,
    src: "",
  },
  {
    key: "ss",
    title: "SoulSilver",
    display: "SS",
    color: "silver",
    gen: 4,
    src: "",
  },
  {
    key: "bl",
    title: "Black",
    display: "B",
    color: "black",
    gen: 5,
    src: "",
  },
  {
    key: "wh",
    title: "White",
    display: "W",
    color: "white",
    gen: 5,
    src: "",
  },
  {
    key: "b2",
    title: "Black 2",
    display: "B2",
    color: "black",
    gen: 5,
    src: "",
  },
  {
    key: "w2",
    title: "White 2",
    display: "W2",
    color: "white",
    gen: 5,
    src: "",
  },
]

export default games
