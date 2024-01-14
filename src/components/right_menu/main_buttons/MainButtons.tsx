import {
  rollDiceForPlayer,
  simulateBotDiceRolling,
} from "@/components/dice_controller/DiceController"
import { useMainContext } from "@/context/context"
import style from "./MainButtons.module.css"
import React from "react"

function MainButtons() {
  const {
    humanPlayer,
    bot2,
    bot3,
    bot4,
    currentPlayerIndex,
    startingOrder,

    setBot2,
    setBot3,
    setBot4,
    setHumanPlayer,
    setCurrentPlayerIndex,
  } = useMainContext()

  const handleHumanPlayerDiceRoll = async () => {
    await rollDiceForPlayer(humanPlayer, setHumanPlayer)
  }

  const handleBotDiceRolls = () => {
    simulateBotDiceRolling(bot2, setBot2)
    simulateBotDiceRolling(bot3, setBot3)
    simulateBotDiceRolling(bot4, setBot4)
  }

  const endTurn = () => {
    const nextPlayerIndex = (currentPlayerIndex + 1) % startingOrder.length

    // Update the state to move to the next player
    setCurrentPlayerIndex(nextPlayerIndex)
  }

  return (
    <div className={style.buttons_container}>
      <button onClick={handleHumanPlayerDiceRoll}>Lancer le dé</button>
      <button onClick={endTurn}>joueur suivant</button>
      <button onClick={handleBotDiceRolls}>
        Simuler les dés pour les bots /!\s
      </button>
    </div>
  )
}

export default MainButtons
