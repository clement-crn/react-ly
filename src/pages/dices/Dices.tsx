import React from "react"
import style from "./Dices.module.css"
import PlayerResult from "./player_result/PlayerResult"
import { DiceResult } from "./player_result/types"
import { useMainContext } from "@/context/context"
const Dices = () => {
  const { dicesDone, setDicesDone } = useMainContext()
  /** object temp */
  const playerResults: {
    diceResult: DiceResult
    name: string
    startingPosition: 1 | 2 | 3 | 4
  }[] = [
    { diceResult: [4, 2], name: "test", startingPosition: 1 },
    { diceResult: [4, 3], name: "test", startingPosition: 2 },
    { diceResult: [4, 2], name: "test", startingPosition: 3 },
    { diceResult: [4, 2], name: "test", startingPosition: 4 },
  ]
  return (
    <div>
      <div className={style.dices_container}>
        <div className={style.content}>
          {playerResults.map((result, index) => (
            <div key={index}>
              <PlayerResult
                diceResult={result.diceResult}
                name={result.name}
                startingPosition={result.startingPosition}
              />
            </div>
          ))}
          <button onClick={() => setDicesDone(true)}>page suiv</button>
        </div>
      </div>
    </div>
  )
}

export default Dices
