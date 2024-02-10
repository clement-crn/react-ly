// import React, { useEffect, useState } from "react"
import style from "./Dices.module.css"
// import PlayerResult from "./player_result/PlayerResult"
// import { DiceResult } from "./player_result/types"
import { useMainContext } from "@/context/context"

const StartingDices = () => {
  const {
    setDicesStepFinished,
    // setDicesLaunched,
    // setStartingOrder,
    // setPlayer,
    dicesLaunched,
    // startingOrder,
    // humanPlayer,
    // bot2,
    // bot3,
    // bot4,
  } = useMainContext()

  const launchDices = () => {
    const pairs: { a: number; b: number; sum: number }[] = []

    for (let i = 0; i < 4; i++) {
      let a = Math.floor(Math.random() * 6) + 1
      let b = Math.floor(Math.random() * 6) + 1
      let sum = a + b
      while (pairs.some((pair) => pair.sum === sum)) {
        a = Math.floor(Math.random() * 6) + 1
        b = Math.floor(Math.random() * 6) + 1
        sum = a + b
      }

      pairs.push({ a: a, b: b, sum: sum })
    }

    console.log(pairs)
  }

  // useEffect(() => {
  //   setPlayer("human", {
  //     ...humanPlayer,
  //     startingPosition: startingOrder[0],
  //   })
  // }, [startingOrder])

  return (
    <div>
      <div className={style.dices_container}>
        <div className={style.content}>
          <div className={style.player_result_wrapper}></div>

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
