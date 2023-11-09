import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { GameContext } from "./context/context.ts"
import { INITIAL_STATE } from "./context/context.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GameContext.Provider value={{ gameState: INITIAL_STATE }}>
      <App />
    </GameContext.Provider>
  </React.StrictMode>
)
