import React from "react"
import style from "./game.module.css"
import { useMainContext } from "../../context/context"

function Game() {
  const { setIsGameStarted } = useMainContext()

  return (
    <>
      <div className={style.game_container}>test</div>
      <button
        className={style.back_to_landingpage}
        onClick={() => setIsGameStarted(false)}
      >
        retour
      </button>
    </>
  )
}

export default Game
