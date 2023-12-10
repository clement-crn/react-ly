import React, { useState, ReactNode } from "react"
import { MainContext, MainState } from "./context"

interface MainProviderProps {
  children: ReactNode
}

const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light")
  const [username, setUsername] = useState<string>("Joueur 1")
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
  const [playerMoney, setPlayerMoney] = useState<number>(700)
  const [bot2Money, setBot2Money] = useState<number>(2000)
  const [bot3Money, setBot3Money] = useState<number>(3000)
  const [bot4Money, setBot4Money] = useState<number>(1200)
  const [dicesLaunched, setDicesLaunched] = useState<boolean>(false)
  const [dicesStepFinished, setDicesStepFinished] = useState<boolean>(false)
  const [startingOrder, setStartingOrder] = useState<number[]>([0, 0, 0, 0])
  const [humanPlayer, setHumanPlayer] = useState<Player>({
    username: "",
    isPlaying: false,
    money: 1000,
    isPrisoner: false,
    startingPosition: 1,
    boardPosition: 0,
  })

  const contextValue: MainState = {
    theme,
    username,
    isGameStarted,
    playerMoney,
    bot2Money,
    bot3Money,
    bot4Money,
    dicesStepFinished,
    startingOrder,
    dicesLaunched,
    humanPlayer,
    setIsGameStarted,
    setTheme,
    setUsername,
    setPlayerMoney,
    setBot2Money,
    setBot3Money,
    setBot4Money,
    setDicesStepFinished,
    setStartingOrder,
    setDicesLaunched,
    setHumanPlayer,
  }

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  )
}

export default MainProvider
