import React from "react"
import style from "./Dices.module.css"
import PlayerResult from "./player_result/PlayerResult"
import { DiceResult } from "./player_result/types"
import { useMainContext } from "@/context/context"
const Dices = () => {
  const { setDicesDone } = useMainContext()
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
          <div className={style.player_result_wrapper}>
            {playerResults.map((result, index) => (
              <div key={index}>
                <PlayerResult
                  key={index + 1}
                  diceResult={result.diceResult}
                  name={result.name}
                  startingPosition={result.startingPosition}
                />
                {/* key={index + 1}
              playerNameProp={player.playerName}
              playerMoneyProp={[bot2Money, bot3Money, bot4Money][index]}
              playerPictureProp={user_img} */}
              </div>
            ))}
          </div>

          <div className={style.wrapper}>
            <button onClick={() => setDicesDone(true)}>Lancer les dés</button>
            <button onClick={() => setDicesDone(true)}>page suiv</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dices
