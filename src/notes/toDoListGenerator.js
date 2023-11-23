//meant to be run in Node e.g. node toDoListGenerator .
/*
 * Script to recursively search the source files of the specified
 * directory and its subdirectories  for any TODO: strings and
 * append the results with a timestamp into the todo.txt file
 *
 * Arguments: ([extension, directory])
 */

const fs = require("fs")
const path = require("path")

const writeFileContents = {}
function dirSearch(extension, root) {
  if (!fs.lstatSync(root).isDirectory()) {
    throw Error("The root file needs to be a directory")
  }
  fs.readdirSync(root).forEach((file) => {
    const currFile = path.join(root, file)
    if (
      fs.lstatSync(currFile).isFile() &&
      path.extname(currFile) === extension
    ) {
      const currFileContents = fs.readFileSync(currFile, "utf8")
      for (const match of currFileContents.matchAll(
        /\/\*TODO\:.*\*\//gm
      )) {
        console.log(`Found TODO in ${currFile}`)
        if (
          [...Object.keys(writeFileContents)].includes(
            path.basename(currFile)
          )
        ) {
          writeFileContents[path.basename(currFile)].push(match.toString())
        } else {
          writeFileContents[path.basename(currFile)] = [match.toString()]
        }
      }
    } else if (fs.lstatSync(currFile).isDirectory()) {
      console.log(`Commencing search of subdirectory ${currFile}`)
      dirSearch(extension, currFile)
    }
  })
  return
}

const extension = process.argv[2] ?? ".tsx"
const root =
  process.argv?.[3] ??
  "C:\\Users\\bojan\\Desktop\\Dev Tools\\React\\pokemon-encounters\\src"
dirSearch(extension, root)
let stringToAppend = `\n***************${new Date(
  Date.now()
)}***************`
for (const fileKey of Object.keys(writeFileContents)) {
  let todoListStr = `\n\n\nFile: ${fileKey}\n`
  writeFileContents[fileKey].forEach((todo) => {
    todoListStr += `\nTODO: ${todo}`
  })
  stringToAppend += todoListStr
}
stringToAppend +=
  "\n\n***************************************************************************************\n"
fs.appendFileSync(
  "C:/Users/bojan/Desktop/Dev Tools/React/pokemon-encounters/src/notes/to do.txt",
  stringToAppend
)
