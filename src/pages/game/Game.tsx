import React from "react"
import style from "./game.module.css"
import { useMainContext } from "../../context/context"
import RightMenu from "@/components/right_menu/RightMenu"
import { Board } from "@/components/board"

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
        <div className={style.rightmenu_wrapper}>
          <RightMenu />
        </div>
        <div className={style.board_wrapper}>
          <Board />
        </div>
      </div>
    </>
  )
}

export default Game
