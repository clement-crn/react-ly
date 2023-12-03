import React, { useState } from "react"
import { DiceResult } from "./types"
import style from "./PlayerResult.module.css"

interface PlayerResultProps {
  playerName: string
  diceResult: DiceResult
  startingPosition: number
}

const PlayerResult = (
  playerName,
  diceResult,
  startingPosition: PlayerResultProps
) => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.content}>
          <p>Modal Content Goes Here</p>
        </div>
      </div>
    </div>
  )
}
export default PlayerResult
