import React, { useState, ReactNode } from "react"
import { MainContext, MainState } from "./context"

interface MainProviderProps {
  children: ReactNode
}

const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light")
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
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
  const [bot2, setBot2] = useState<Player>({
    username: "Bot2",
    isPlaying: false,
    money: 1000,
    isPrisoner: false,
    startingPosition: 1,
    boardPosition: 0,
  })
  const [bot3, setBot3] = useState<Player>({
    username: "Bot3",
    isPlaying: false,
    money: 1000,
    isPrisoner: false,
    startingPosition: 1,
    boardPosition: 0,
  })
  const [bot4, setBot4] = useState<Player>({
    username: "Bot4",
    isPlaying: false,
    money: 1000,
    isPrisoner: false,
    startingPosition: 1,
    boardPosition: 0,
  })

  const contextValue: MainState = {
    theme,
    isGameStarted,
    dicesStepFinished,
    startingOrder,
    dicesLaunched,
    humanPlayer,
    bot2,
    bot3,
    bot4,
    setTheme,
    setIsGameStarted,
    setDicesStepFinished,
    setStartingOrder,
    setDicesLaunched,
    setHumanPlayer,
    setBot2,
    setBot3,
    setBot4,
  }

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  )
}

export default MainProvider
