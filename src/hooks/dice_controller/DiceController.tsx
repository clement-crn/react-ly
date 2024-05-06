import { useMainContext } from "@/context/context"
import { useJail } from "../jail/Jail"

export const useDiceController = () => {
  const { currentPlayerIndex, allPlayers, setPlayer, setCurrentPlayerPlaying } =
    useMainContext()
  const { sendPlayerToJail } = useJail()
  const player = allPlayers?.[currentPlayerIndex]
  let consecutiveLowRolls = player?.consecutiveJailRolls || 0

  const rollDicesMainGame = () => {
    if (!player) return

    setCurrentPlayerPlaying(player.id)
    const randomNumber = Math.floor(Math.random() * 12) + 1

    if (player.isPrisoner) {
      // Player is in jail
      if (randomNumber < 5) {
        // Move player out of jail
        setPlayer(player.id, {
          ...player,
          isPrisoner: false,
          boardPosition: 10,
        })
        consecutiveLowRolls = 0
      } else {
        consecutiveLowRolls++
        if (consecutiveLowRolls === 2) {
          setPlayer(player.id, { ...player, money: player.money - 200 })
          consecutiveLowRolls = 0
        }
      }
    } else {
      const newPosition = (randomNumber + player.boardPosition) % 40

      if (randomNumber < 5) {
        consecutiveLowRolls++
        if (consecutiveLowRolls === 2) {
          setPlayer(player.id, {
            ...player,
            boardPosition: player.boardPosition,
            money: player.money - 200,
            consecutiveJailRolls: 0,
          })
        }
      } else {
        consecutiveLowRolls = 0
      }

      if (consecutiveLowRolls < 2) {
        setPlayer(player.id, { ...player, boardPosition: newPosition })
      }

      if (newPosition === 30) {
        sendPlayerToJail()
        console.log(
          ">>>>>>>>Le joueur est en prison via DiceController ================"
        )
        console.log(player.isPrisoner)
      }
    }

    console.log(">>>>>>>>Le joueur a lancé: ", randomNumber)
  }

  return { rollDicesMainGame }
}
