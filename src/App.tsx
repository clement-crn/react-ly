import { useMainContext } from "./context/context"
import Landingpage from "./pages/landingpage/Landingpage"
import { Game } from "./pages/game"
import { Suspense } from "react"
import { Loading } from "./utils"
import { Dices } from "./pages/dices"

function App() {
  const { isGameStarted, dicesDone } = useMainContext()

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div>
          {!isGameStarted ? <Landingpage /> : dicesDone ? <Game /> : <Dices />}
        </div>
      </Suspense>
    </>
  )
}

export default App
