import { useMainContext } from "@/context/context"
import { useEffect } from "react"

export const useDiceController = () => {
  const { currentPlayerIndex, allPlayers, setPlayer, setCurrentPlayerPlaying } =
    useMainContext()
  const player = allPlayers?.[currentPlayerIndex]

  const rollDicesMainGame = () => {
    const randomNumber = Math.floor(Math.random() * 12) + 1
    if (!player) return
    setCurrentPlayerPlaying(player.id)
    const newPosition = (randomNumber + player.boardPosition) % 40
    setPlayer(player.id, { ...player, boardPosition: newPosition })
  }

  useEffect(() => {
    if (player) {
      console.log(">>>Le joueur actuel est: ", player.username)
      console.log(">>>Sa position est maintenant: ", player.boardPosition)
    }
  }, [player, setCurrentPlayerPlaying, setPlayer])

  return { rollDicesMainGame }
}
