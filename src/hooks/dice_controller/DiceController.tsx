import { useMainContext } from "@/context/context"
import { useEffect } from "react"

export const useDiceController = () => {
  const {
    currentPlayerIndex,
    allPlayers,
    currentPlayerPlaying,
    setPlayer,
    setCurrentPlayerPlaying,
  } = useMainContext()
  const player = allPlayers?.[currentPlayerIndex]

  const rollDicesMainGame = () => {
    const randomNumber = Math.floor(Math.random() * 12) + 1
    if (player) {
      setCurrentPlayerPlaying(player.id)
      if (randomNumber + player?.boardPosition > 39) {
        setPlayer(player.id, {
          ...player,
          boardPosition: randomNumber + player.boardPosition - 40,
        })
      } else {
        setPlayer(player.id, {
          ...player,
          boardPosition: randomNumber + player.boardPosition,
        })
      }
    }
  }
  useEffect(() => {
    if (player) {
      console.log(">>>Le joueur actuel est: ", player.username)
      console.log(">>>Sa position est maintenant: ", player?.boardPosition)
    }
  }, [currentPlayerPlaying])

  return { rollDicesMainGame }
}
