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
  setPlayer: (
    target: "human" | "bot2" | "bot3" | "bot4",
    payload: Partial<Player>
  ) => void
  setCurrentPlayerIndex: React.Dispatch<React.SetStateAction<number>>
}

const MainContext = createContext<MainState | undefined>(undefined)

const useMainContext = () => {
  const context = useContext(MainContext)
  if (!context) {
    throw new Error("useMainContext must be used within a MainProvider.")
  }
  return context
}

export { MainContext, useMainContext }
