import React from "react"
import { useMainContext } from "@/context/context"
const DevPanel = () => {
  const { startingOrder, currentPlayerPlaying, allPlayers, setPlayer } =
    useMainContext()
  // const context = useMainContext()
  // // console.log("Context:", JSON.stringify(context, null, 2))
  const currentPlayer = allPlayers[currentPlayerPlaying]
  const [position, setPosition] = React.useState<number>(0)
  const getCurrentPlayerUsername = () => {
    return currentPlayer ? currentPlayer.username : "Unknown"
  }
  const movePlayerTo = (newPosition: number) => {
    setPlayer(currentPlayerPlaying, {
      ...currentPlayer,
      boardPosition: newPosition,
    })
  }
  const player = allPlayers[currentPlayerPlaying]

  return (
    <div>
      <div>
        Starting order: <span>{startingOrder}</span>
      </div>
      <div>Who is playing: {getCurrentPlayerUsername()}</div>
      <div>
        His properties:
        <br />
        {player?.propertiesOwned.map((prop, index) => (
          <span key={index}>
            -{prop.name} <br />
          </span>
        ))}
      </div>

      <div>
        Move current player to
        <input
          type="number"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
        />
      </div>
      <button onClick={() => movePlayerTo(position)}>Move</button>
    </div>
  )
}

export default DevPanel
