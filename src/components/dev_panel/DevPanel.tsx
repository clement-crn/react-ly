import React from "react"
import { useMainContext } from "@/context/context"
const DevPanel = () => {
  const { startingOrder, currentPlayerIndex, allPlayers } = useMainContext()

  const getCurrentPlayerUsername = () => {
    const currentPlayer = allPlayers[currentPlayerIndex]
    return currentPlayer ? currentPlayer.username : "Unknown"
  }

  return (
    <div>
      <h3> ############################## dev panel ###############</h3>
      <div>
        Starting order: <span>{startingOrder}</span>
      </div>
      <div>Who is playing: {getCurrentPlayerUsername()}</div>
    </div>
  )
}

export default DevPanel
