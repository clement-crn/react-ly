// MainButtons.js

import { useMainContext } from "@/context/context"
import style from "./MainButtons.module.css"
import { useDiceController } from "@/hooks/dice_controller/DiceController"
import { useEffect } from "react"
import { useJail } from "@/hooks/jail/Jail"
import { useLuck } from "@/hooks/cards/luck/Luck"

function MainButtons() {
  const {
    startingOrder,
    currentPlayerPlaying,
    allPlayers,
    setCurrentPlayerIndex,
    setCurrentPlayerPlaying,
  } = useMainContext()
  const { rollDicesMainGame } = useDiceController()
  const { sendPlayerToJail } = useJail()
  const { payTax } = useLuck()
  const player = allPlayers?.[currentPlayerPlaying]

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
    const nextPlayerIndex = (currentPlayerPlaying + 1) % startingOrder.length
    if (allPlayers[nextPlayerIndex]?.isBankrupt) {
      endTurn()
    }
    setCurrentPlayerIndex(nextPlayerIndex)
  }

  useEffect(() => {
    console.log(">>>Le joueur est en prison: ", player?.isPrisoner)
  }, [player?.isPrisoner])

  return (
    <div className={style.buttons_container}>
      <button onClick={() => startPlayerTurn()}>Lancer le dé</button>
      <button onClick={() => endTurn()}>joueur suivant</button>
      {/* DEV */}
      <button onClick={() => sendPlayerToJail()}>Prison</button>
      <button onClick={() => payTax()}>Taxe</button>
      player: {player?.username}
      <br />
      jail: {player?.isPrisoner ? "true" : "false"}
      <br />
      position: {player?.boardPosition}
    </div>
  )
}

export default MainButtons
