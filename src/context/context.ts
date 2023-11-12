import { createContext, useContext } from "react"

export type MainState = {
  theme: string
  username: string
  isGameStarted: boolean
  setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setTheme: React.Dispatch<React.SetStateAction<string>>
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
