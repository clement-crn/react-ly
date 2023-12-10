import { useMainContext } from "./context/context"
import Landingpage from "./pages/landingpage/Landingpage"
import { Game } from "./pages/game"
import { Suspense } from "react"
import { Loading } from "./utils"
import { StartingDices } from "./pages/dices"

function App() {
  const { isGameStarted, dicesStepFinished } = useMainContext()

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div>
          {!isGameStarted ? (
            <Landingpage />
          ) : dicesStepFinished ? (
            <Game />
          ) : (
            <StartingDices />
          )}
        </div>
      </Suspense>
    </>
  )
}

export default App
