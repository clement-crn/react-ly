import React, { useState, ReactNode, useMemo } from "react"
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
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0)

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
  const [humanPlayer, setHumanPlayer] = useState<Player>({
    username: "",
    isPlaying: false,
    money: 1000,
    isPrisoner: false,
    startingPosition: 1,
    boardPosition: 0,
  })

  const allPlayers = useMemo(() => {
    return structuredClone([humanPlayer, bot2, bot3, bot4])
  }, [humanPlayer, bot2, bot3, bot4])

  const setPlayer = (
    target: "human" | "bot2" | "bot3" | "bot4",
    player: Player | ((prevState: Player) => Player)
  ) => {
    switch (target) {
      case "human":
        setHumanPlayer(structuredClone(player))
        break
      case "bot2":
        setBot2(structuredClone(player))
        break
      case "bot3":
        setBot3(structuredClone(player))
        break
      case "bot4":
        setBot4(structuredClone(player))
        break
      default:
        console.error(`setPlayer - invalid target: ${target}`)
    }
  }

  const contextValue: MainState = {
    theme,
    allPlayers,
    isGameStarted,
    dicesStepFinished,
    startingOrder,
    dicesLaunched,
    humanPlayer,
    bot2,
    bot3,
    bot4,
    currentPlayerIndex,
    setTheme,
    setIsGameStarted,
    setDicesStepFinished,
    setStartingOrder,
    setDicesLaunched,
    setPlayer,
    setCurrentPlayerIndex,
  }

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  )
}

export default MainProvider
