// MainButtons.js

import { useMainContext } from "@/context/context"
import style from "./MainButtons.module.css"
import { useDiceController } from "@/components/dice_controller/DiceController"

function MainButtons() {
  const { setCurrentPlayerIndex, startingOrder, currentPlayerIndex } =
    useMainContext()
  const { rollDicesMainGame } = useDiceController()

  const endTurn = () => {
    const nextPlayerIndex = (currentPlayerIndex + 1) % startingOrder.length
    setCurrentPlayerIndex(nextPlayerIndex)
  }

  return (
    <div className={style.buttons_container}>
      <button onClick={() => rollDicesMainGame()}>Lancer le dé</button>
      <button onClick={() => endTurn()}>joueur suivant</button>
    </div>
  )
}

export default MainButtons
