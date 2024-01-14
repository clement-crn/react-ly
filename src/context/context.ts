import { createContext, useContext } from "react"

export type MainState = {
  theme: string
  isGameStarted: boolean
  dicesStepFinished: boolean
  startingOrder: number[]
  allPlayers: Player[]
  dicesLaunched: boolean
  humanPlayer: Player
  bot2: Player
  bot3: Player
  bot4: Player
  currentPlayerIndex: number
  setDicesLaunched: React.Dispatch<React.SetStateAction<boolean>>
  setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>
  setTheme: React.Dispatch<React.SetStateAction<string>>
  setDicesStepFinished: React.Dispatch<React.SetStateAction<boolean>>
  setStartingOrder: React.Dispatch<React.SetStateAction<number[]>>
  setHumanPlayer: React.Dispatch<React.SetStateAction<Player>>
  setBot2: React.Dispatch<React.SetStateAction<Player>>
  setBot3: React.Dispatch<React.SetStateAction<Player>>
  setBot4: React.Dispatch<React.SetStateAction<Player>>
  setCurrentPlayerIndex: React.Dispatch<React.SetStateAction<number>>
}

const MainContext = createContext<MainState | undefined>(undefined)

//hook personalise
const useMainContext = () => {
  const context = useContext(MainContext)
  if (!context) {
    throw new Error("useMainContext must be used within a MainProvider.")
  }
  return context
}

export { MainContext, useMainContext }
