import { DistrictZone } from "@/components/board/types"
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
  listOfOwnedProperties: DistrictZone[]
  currentPlayerPlaying: number //>>> l'id du joueur
  isDevMode: boolean
  consecutiveJailRolls: number
  setListOfOwnedProperties: React.Dispatch<React.SetStateAction<DistrictZone[]>>
  setDicesLaunched: React.Dispatch<React.SetStateAction<boolean>>
  setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>
  setTheme: React.Dispatch<React.SetStateAction<string>>
  setDicesStepFinished: React.Dispatch<React.SetStateAction<boolean>>
  setStartingOrder: React.Dispatch<React.SetStateAction<number[]>>
  setPlayer: (target: number, payload: Partial<Player>) => void //>>> via l'id du joueur
  setCurrentPlayerPlaying: React.Dispatch<React.SetStateAction<number>>
  setDevMode: React.Dispatch<React.SetStateAction<boolean>>
  setConsecutiveJailRolls: React.Dispatch<React.SetStateAction<number>>
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
