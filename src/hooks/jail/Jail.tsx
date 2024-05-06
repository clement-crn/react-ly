import { useMainContext } from "@/context/context"

export const useJail = () => {
  const { allPlayers, currentPlayerPlaying, setPlayer } = useMainContext()

  const sendPlayerToJail = () => {
    setPlayer(currentPlayerPlaying, {
      ...allPlayers[currentPlayerPlaying],
      isPrisoner: true,
    })
    setPlayer(currentPlayerPlaying, {
      ...allPlayers[currentPlayerPlaying],
      boardPosition: 10,
    })
  }

  return { sendPlayerToJail }
}
