import { useMainContext } from "./context/context"
import Landingpage from "./pages/landingpage/Landingpage"
import { Game } from "./pages/game"
import { Suspense } from "react"
import { Loading } from "./utils"

function App() {
  const { isGameStarted } = useMainContext()

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div>{!isGameStarted ? <Landingpage /> : <Game />}</div>
      </Suspense>
    </>
  )
}

export default App
