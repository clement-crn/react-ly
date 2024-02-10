import style from "./Dices.module.css"
import { useMainContext } from "@/context/context"

import Result from "./Result"
const pairs: { a: number; b: number; sum: number }[] = []
const StartingDices = () => {
  const {
    setDicesStepFinished,
    setDicesLaunched,
    setPlayer,
    dicesLaunched,
    humanPlayer,
    bot2,
    bot3,
    bot4,
  } = useMainContext()

  const launchDices = () => {
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

    const rankArray = pairs.map((currentPair) => {
      let rank = 1
      for (const otherPair of pairs) {
        if (otherPair.sum > currentPair.sum) {
          rank++
        }
      }
      return rank
    })
    console.log(rankArray, "Rank array without sorting")

    setPlayer("human", {
      ...humanPlayer,
      startingPosition: rankArray[0],
    })
    setPlayer("bot2", {
      ...bot2,
      startingPosition: rankArray[1],
    })
    setPlayer("bot3", {
      ...bot3,
      startingPosition: rankArray[2],
    })
    setPlayer("bot4", {
      ...bot4,
      startingPosition: rankArray[3],
    })

    setDicesLaunched(true)
  }
  console.log(pairs, "----")
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
              <>
                <div className={style.result_and_button}>
                  <Result pairs={pairs} />
                  <div className={style.button_wrapper}>
                    <button
                      onClick={() => setDicesStepFinished(true)}
                      className={style.play_button}
                    >
                      Jouer
                    </button>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartingDices
