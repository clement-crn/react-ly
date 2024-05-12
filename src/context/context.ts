import { DistrictZone } from "@/components/board/types"
import { createContext, useContext } from "react"

export type MainState = {
  theme: string

  //debut du jeu
  isGameStarted: boolean
  dicesStepFinished: boolean

  //jeu principal
  dicesLaunched: boolean
  startingOrder: number[]
  isDevMode: boolean
  showPropertyModal: boolean

  //joueurs
  allPlayers: Player[]
  humanPlayer: Player
  bot2: Player
  bot3: Player
  bot4: Player
  listOfOwnedProperties: DistrictZone[]
  consecutiveJailRolls: number
  currentPlayerPlaying: number //>>> l'id du joueur

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
  setShowPropertyModal: React.Dispatch<React.SetStateAction<boolean>>
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
