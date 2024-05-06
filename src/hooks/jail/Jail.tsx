import { useMainContext } from "@/context/context"

export const useJail = () => {
  const { allPlayers, currentPlayerPlaying, setPlayer } = useMainContext()

  const sendPlayerToJail = () => {
    setPlayer(currentPlayerPlaying, {
      ...allPlayers[currentPlayerPlaying],
      isPrisoner: true,
      boardPosition: 10,
    })
  }

  return { sendPlayerToJail }
}
