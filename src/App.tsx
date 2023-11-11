import React from "react"
import { useMainContext } from "./context/context"
import Landingpage from "./pages/landingpage/Landingpage"

function App() {
  const { isGameStarted } = useMainContext()
  return <>{!isGameStarted ? <Landingpage /> : null}</>
}

export default App
