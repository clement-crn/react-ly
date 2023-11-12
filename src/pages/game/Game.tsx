import React from "react"
import style from "./game.module.css"
import { useMainContext } from "../../context/context"

function Game() {
  const { setIsGameStarted } = useMainContext()

  const back = () => {
    setIsGameStarted(false)
  }

  return (
    <>
      <div className={style.game_container}>test</div>
      <button className={style.back_to_landingpage} onClick={back}>
        retour
      </button>
    </>
  )
}

export default Game
