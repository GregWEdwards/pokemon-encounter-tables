import React from "react"
import { Image, Header } from "semantic-ui-react"

const PageHeader = () => {
  return (
    <Header as='h1' inverted className='App-header'>
      <Image src='FRLGtentacruel.png' />
      <div className='test'>Pokémon Encounter Table Generator</div>
      <Image src='FRLGtentacruel.png' />
    </Header>
  )
}

export default PageHeader
