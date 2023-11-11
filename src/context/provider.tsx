import React, { useState, ReactNode } from "react"
import { MainContext, MainState } from "./context"

interface MainProviderProps {
  children: ReactNode
}

const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light")
  const [username, setUsername] = useState<string>("Joueur 1")
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
  const contextValue: MainState = {
    theme,
    username,
    isGameStarted,
    setIsGameStarted,
    setTheme,
    setUsername,
  }

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  )
}

export default MainProvider
