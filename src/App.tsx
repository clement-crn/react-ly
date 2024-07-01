import { Suspense, useEffect } from "react"
import { Loading } from "./utils"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Login from "./components/account_management/login/Login"
import Register from "./components/account_management/register/Register"
import { useAuth } from "./context/auth/useAuth"
import LogoutButton from "./components/account_management/logout/Logout"
import { useMainContext } from "./context/context"
import { Game } from "./pages/game"
import { StartingDices } from "./pages/dices"

function App() {
  const { dicesStepFinished } = useMainContext()
  const { isAuthenticated, authTokens } = useAuth()

  useEffect(() => {
    console.log(authTokens, "authTokens")
  }, [authTokens])

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div>
          {isAuthenticated() ? (
            <>
              <LogoutButton />
              <Game />
            </>
          ) : dicesStepFinished ? (
            <StartingDices />
          ) : (
            <>
              <Login />
              <Register />
            </>
          )}
        </div>
      </Suspense>
      <ToastContainer position="top-center" className="blue-toast-container" />
    </>
  )
}

export default App
