import React from "react"
import "./App.css"
import PageHeader from "./components/PageHeader"
import PageBody from "./components/PageBody"

const App = () => {
  //TODO: Create Context for themeing, app orientation, and device type
  return (
    <>
      <PageHeader />
      <PageBody />
    </>
  )
}

export default App
