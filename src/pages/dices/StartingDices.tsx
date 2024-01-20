import React, { useEffect, useState } from "react"
import style from "./Dices.module.css"
import PlayerResult from "./player_result/PlayerResult"
import { DiceResult } from "./player_result/types"
import { useMainContext } from "@/context/context"

const StartingDices = () => {
  const {
    setDicesStepFinished,
    setDicesLaunched,
    setStartingOrder,
    setPlayer,
    dicesLaunched,
    startingOrder,
    humanPlayer,
    bot2,
    bot3,
    bot4,
  } = useMainContext()
  const [humanDiceResult, setHumanDiceResult] = useState<DiceResult>([1, 1])
  const [Bot2DiceResult, setBot2DiceResult] = useState<DiceResult>([1, 1])
  const [Bot3DiceResult, setBot3DiceResult] = useState<DiceResult>([1, 1])
  const [Bot4DiceResult, setBot4DiceResult] = useState<DiceResult>([1, 1])
  const [ranks] = useState<number[]>([0, 0, 0, 0])

  const rand = () => {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1
  }

  const launchDices = () => {
    let humanResult, bot2Result, bot3Result, bot4Result

    do {
      humanResult = [rand(), rand()]
      bot2Result = [rand(), rand()]
      bot3Result = [rand(), rand()]
      bot4Result = [rand(), rand()]
    } while (
      !(
        isUniqueResult(humanResult, [bot2Result, bot3Result, bot4Result]) &&
        isUniqueResult(bot2Result, [humanResult, bot3Result, bot4Result]) &&
        isUniqueResult(bot3Result, [humanResult, bot2Result, bot4Result]) &&
        isUniqueResult(bot4Result, [humanResult, bot2Result, bot3Result])
      )
    )

    setHumanDiceResult(humanResult)
    setBot2DiceResult(bot2Result)
    setBot3DiceResult(bot3Result)
    setBot4DiceResult(bot4Result)
    setDicesLaunched(true)
  }

  const isUniqueResult = (
    currentResult: DiceResult,
    otherResults: DiceResult[]
  ) => {
    const currentSum = currentResult[0] + currentResult[1]
    const otherSums = otherResults.map((result) => result[0] + result[1])
    return !otherSums.includes(currentSum)
  }

  useEffect(() => {
    const sumArray = [
      humanDiceResult[0] + humanDiceResult[1],
      Bot2DiceResult[0] + Bot2DiceResult[1],
      Bot3DiceResult[0] + Bot3DiceResult[1],
      Bot4DiceResult[0] + Bot4DiceResult[1],
    ]
    console.log(sumArray)
    const indices = Array.from({ length: sumArray.length }, (_, index) => index)
    const ranks = indices.map(
      (index) =>
        sumArray.filter((val, i) => i !== index && val > sumArray[index]!)
          .length + 1
    )
    /* position de depart de chaque joueur */
    setStartingOrder(ranks)
    console.log(ranks)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [humanDiceResult])

  useEffect(() => {
    setPlayer("human", {
      ...humanPlayer,
      startingPosition: startingOrder[0],
    })
  }, [startingOrder])

  const playerResults: {
    diceResult: DiceResult
    name: string
    startingPosition: number | undefined
  }[] = [
    {
      diceResult: humanDiceResult,
      name: humanPlayer.username,
      startingPosition: startingOrder[0],
    },
    {
      diceResult: Bot2DiceResult,
      name: bot2.username,
      startingPosition: startingOrder[1],
    },
    {
      diceResult: Bot3DiceResult,
      name: bot3.username,
      startingPosition: startingOrder[2],
    },
    {
      diceResult: Bot4DiceResult,
      name: bot4.username,
      startingPosition: startingOrder[3],
    },
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
              <button onClick={() => launchDices()}>Lancer les dés</button>
            ) : null}
            {dicesLaunched ? (
              <button onClick={() => setDicesStepFinished(true)}>Jouer</button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartingDices
