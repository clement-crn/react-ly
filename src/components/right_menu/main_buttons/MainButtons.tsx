// MainButtons.js

import { useMainContext } from "@/context/context"
import style from "./MainButtons.module.css"
import { useDiceController } from "@/hooks/dice_controller/DiceController"
import { useEffect } from "react"

function MainButtons() {
  const {
    startingOrder,
    currentPlayerIndex,
    setCurrentPlayerIndex,
    setCurrentPlayerPlaying,
  } = useMainContext()
  const { rollDicesMainGame } = useDiceController()

  useEffect(() => {
    //humain commence
    setCurrentPlayerPlaying(0)
  }, [])

  const startPlayerTurn = () => {
    //1 lance le de et deplace le pion du joueur sur le plateau
    rollDicesMainGame()

    //2 verifie si le joueur est sur une propriete ou non
  }

  const endTurn = () => {
    const nextPlayerIndex = (currentPlayerIndex + 1) % startingOrder.length
    setCurrentPlayerIndex(nextPlayerIndex)
  }

  return (
    <div className={style.buttons_container}>
      <button onClick={() => startPlayerTurn()}>Lancer le dé</button>
      <button onClick={() => endTurn()}>joueur suivant</button>
    </div>
  )
}

export default MainButtons
