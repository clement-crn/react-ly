import React from "react"
import style from "./game.module.css"
import { useMainContext } from "../../context/context"
import RightMenu from "@/components/right_menu/RightMenu"

function Game() {
  const { setIsGameStarted } = useMainContext()

  const back = () => {
    setIsGameStarted(false)
  }

  return (
    <>
      <div className={style.game_container}>
        <button className={style.back_to_landingpage} onClick={back}>
          retour
        </button>

        <RightMenu />
      </div>
    </>
  )
}

export default Game
