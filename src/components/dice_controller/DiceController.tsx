import { useMainContext } from "@/context/context"

export const useDiceController = () => {
  const { currentPlayerIndex, allPlayers, setPlayer } = useMainContext()

  const rollDicesMainGame = () => {
    const randomNumber = Math.floor(Math.random() * 12) + 1
    const player = allPlayers?.[currentPlayerIndex]

    if (player) {
      setPlayer(player.username as "human" | "bot2" | "bot3" | "bot4", {
        ...player,
        boardPosition: randomNumber,
      })
      console.log(
        "La position du joueur ",
        player.username,
        "est maintenant: ",
        player.boardPosition
      )
    }
  }

  return { rollDicesMainGame }
}
