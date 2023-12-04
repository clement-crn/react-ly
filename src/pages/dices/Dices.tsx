import React, { useEffect, useState } from "react"
import style from "./Dices.module.css"
import PlayerResult from "./player_result/PlayerResult"
import { DiceResult } from "./player_result/types"
import { useMainContext } from "@/context/context"
const Dices = () => {
  const { setDicesStepFinished, setDicesLaunched, dicesLaunched } =
    useMainContext()
  const [humanDiceResult, setHumanDiceResult] = useState<DiceResult>([1, 1])
  const [Bot2DiceResult, setBot2DiceResult] = useState<DiceResult>([1, 1])
  const [Bot3DiceResult, setBot3DiceResult] = useState<DiceResult>([1, 1])
  const [Bot4DiceResult, setBot4DiceResult] = useState<DiceResult>([1, 1])

  const launch2Dices = (
    setDiceResult: React.Dispatch<React.SetStateAction<DiceResult>>
  ) => {
    Math.floor(Math.random() * (6 - 1 + 1)) + 1
    setDiceResult([
      Math.floor(Math.random() * (6 - 1 + 1)) + 1,
      Math.floor(Math.random() * (6 - 1 + 1)) + 1,
    ])
  }
  const launchAllDices = () => {
    launch2Dices(setHumanDiceResult)
    console.log(humanDiceResult)
    launch2Dices(setBot2DiceResult)

    launch2Dices(setBot3DiceResult)

    launch2Dices(setBot4DiceResult)
    setDicesLaunched(true)
  }

  useEffect(() => {
    console.log(humanDiceResult)
    console.log(Bot2DiceResult)
    console.log(Bot3DiceResult)
    console.log(Bot4DiceResult)
  }, [humanDiceResult])

  // const launchDices = () => {
  //   //genere 4 paires de diceResult
  //   //additionne les paires puis donne startingPosition
  // }

  const playerResults: {
    diceResult: DiceResult
    name: string
    startingPosition: 1 | 2 | 3 | 4
  }[] = [
    { diceResult: humanDiceResult, name: "test", startingPosition: 1 },
    { diceResult: Bot2DiceResult, name: "test", startingPosition: 2 },
    { diceResult: Bot3DiceResult, name: "test", startingPosition: 3 },
    { diceResult: Bot4DiceResult, name: "test", startingPosition: 4 },
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
              </div>
            ))}
          </div>

          <div className={style.wrapper}>
            {!dicesLaunched ? (
              <button onClick={() => launchAllDices()}>Lancer les dés</button>
            ) : null}
            <button onClick={() => setDicesStepFinished(true)}>
              page suiv
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dices
