import { useMainContext } from "./context/context"
import Landingpage from "./pages/landingpage/Landingpage"
import { Game } from "./pages/game"
import { Suspense } from "react"
import { Loading } from "./utils"
import { StartingDices } from "./pages/dices"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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
      <ToastContainer position="top-center" className="blue-toast-container" />
    </>
  )
}

export default App
