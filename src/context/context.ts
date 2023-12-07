import { createContext, useContext } from "react"

export type MainState = {
  theme: string
  username: string
  isGameStarted: boolean
  playerMoney: number
  bot2Money: number
  bot3Money: number
  bot4Money: number
  dicesStepFinished: boolean
  startingOrder: number[]
  dicesLaunched: boolean
  setDicesLaunched: React.Dispatch<React.SetStateAction<boolean>>
  setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setTheme: React.Dispatch<React.SetStateAction<string>>
  setPlayerMoney: React.Dispatch<React.SetStateAction<number>>
  setBot2Money: React.Dispatch<React.SetStateAction<number>>
  setBot3Money: React.Dispatch<React.SetStateAction<number>>
  setBot4Money: React.Dispatch<React.SetStateAction<number>>
  setDicesStepFinished: React.Dispatch<React.SetStateAction<boolean>>
  setStartingOrder: React.Dispatch<React.SetStateAction<number[]>>
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
