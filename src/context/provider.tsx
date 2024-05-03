import React, { useState, ReactNode, useMemo } from "react"
import { MainContext, MainState } from "./context"
import { DistrictZone } from "@/components/board/types"

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
  const [listOfOwnedProperties, setListOfOwnedProperties] = useState<
    DistrictZone[]
  >([])
  const [currentPlayerPlaying, setCurrentPlayerPlaying] = useState<string>("")

  const [bot2, setBot2] = useState<Player>({
    id: 1,
    username: "bot2",

    money: 1000,
    isPrisoner: false,
    startingPosition: 1,
    boardPosition: 0,
  })
  const [bot3, setBot3] = useState<Player>({
    id: 2,
    username: "bot3",

    money: 1000,
    isPrisoner: false,
    startingPosition: 1,
    boardPosition: 0,
  })
  const [bot4, setBot4] = useState<Player>({
    id: 3,
    username: "bot4",

    money: 1000,
    isPrisoner: false,
    startingPosition: 1,
    boardPosition: 0,
  })
  const [humanPlayer, setHumanPlayer] = useState<Player>({
    id: 0,
    username: "human",

    money: 1000,
    isPrisoner: false,
    startingPosition: 1,
    boardPosition: 0,
  })

  const allPlayers = useMemo(() => {
    return structuredClone([humanPlayer, bot2, bot3, bot4])
  }, [humanPlayer, bot2, bot3, bot4])

  const setPlayer = (target: number, payload: Partial<Player>) => {
    switch (target) {
      case 0: //always
        setHumanPlayer((prev) => structuredClone({ ...prev, ...payload }))
        break
      case 1:
        setBot2((prev) => structuredClone({ ...prev, ...payload }))
        break
      case 2:
        setBot3((prev) => structuredClone({ ...prev, ...payload }))
        break
      case 3:
        setBot4((prev) => structuredClone({ ...prev, ...payload }))
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
    listOfOwnedProperties,
    currentPlayerPlaying,
    setTheme,
    setIsGameStarted,
    setDicesStepFinished,
    setStartingOrder,
    setDicesLaunched,
    setPlayer,
    setCurrentPlayerIndex,
    setListOfOwnedProperties,
    setCurrentPlayerPlaying,
  }

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  )
}

export default MainProvider
