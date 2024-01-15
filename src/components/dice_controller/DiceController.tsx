// diceControllerUtils.js

import { useMainContext } from "@/context/context"

export const useDiceController = () => {
  const { currentPlayerIndex, allPlayers } = useMainContext()

  const rollDicesMainGame = () => {
    const randomNumber = Math.floor(Math.random() * 12) + 1
    const player = allPlayers?.[currentPlayerIndex]

    console.log(player, "player")
    console.log(randomNumber, "randomNumber")

    // Perform actions related to rolling dices
  }

  return { rollDicesMainGame }
}
