import { useMainContext } from "@/context/context"

export const useDiceController = () => {
  const {
    currentPlayerIndex,
    allPlayers,
    currentPlayerPlaying,
    setPlayer,
    setCurrentPlayerPlaying,
  } = useMainContext()

  const rollDicesMainGame = () => {
    const randomNumber = Math.floor(Math.random() * 12) + 1
    const player = allPlayers?.[currentPlayerIndex]

    if (player) {
      setPlayer(player.id, {
        ...player,
        boardPosition: randomNumber,
      })
      console.log(
        ">>>La position du joueur ",
        player.username,
        "est maintenant: ",
        player.boardPosition
      )
      setCurrentPlayerPlaying(player.id)
      console.log(">>>Le joueur actuel est: ", currentPlayerPlaying)
    }
  }

  return { rollDicesMainGame }
}
