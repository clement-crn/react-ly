import React from "react"
import { DiceResult } from "./types"
import style from "./PlayerResult.module.css"

interface PlayerResultProps {
  name: string
  diceResult: DiceResult
  startingPosition: 1 | 2 | 3 | 4
}

const PlayerResult = ({
  diceResult,
  name,
  startingPosition,
}: PlayerResultProps) => {
  const resultString = diceResult.join(", ")

  return (
    <div>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.content}>
            <p className={style.diceResult}>{resultString}</p>
            <p className={style.name}>{name}</p>
            <p className={style.startingPosition}>{startingPosition}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerResult
