import React from "react"
import { useMainContext } from "./context/context"
import Landingpage from "./pages/landingpage/Landingpage"
import { Game } from "./pages/game"

function App() {
  const { isGameStarted } = useMainContext()
  return <>{!isGameStarted ? <Landingpage /> : <Game />}</>
}

export default App
