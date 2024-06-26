import { useMainContext } from "./context/context"
import { Game } from "./pages/game"
import { Suspense } from "react"
import { Loading } from "./utils"
import { StartingDices } from "./pages/dices"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Login from "./components/account_management/login/Login"
import Register from "./components/account_management/register/Register"

function App() {
  const { isGameStarted, dicesStepFinished } = useMainContext()

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div>
          {!isGameStarted ? (
            <div>
              <Login />
              <Register />
            </div>
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
