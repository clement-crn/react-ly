import React from "react"
import { DiceResult } from "./types"
import style from "./PlayerResult.module.css"
import { useMainContext } from "@/context/context"

interface PlayerResultProps {
  name: string
  diceResult: DiceResult
  startingPosition: number | undefined
}

const PlayerResult = ({
  diceResult,
  name,
  startingPosition,
}: PlayerResultProps) => {
  const { dicesLaunched } = useMainContext()
  const resultString = diceResult.join(", ")

  return (
    <div>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.content}>
            <p className={style.name}>{name}</p>
            {dicesLaunched ? (
              <p className={style.diceResult}>{resultString}</p>
            ) : (
              <p> . . .</p>
            )}

            {dicesLaunched ? (
              <p className={style.startingPosition}>{startingPosition}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerResult
