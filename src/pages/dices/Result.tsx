import React from "react"
import {
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice3,
  GiInvertedDice4,
  GiInvertedDice5,
  GiInvertedDice6,
} from "react-icons/gi"
import style from "./Dices.module.css"

type ResultProps = {
  pairs: { a: number; b: number; sum: number }[]
}

const Result = ({ pairs }: ResultProps) => {
  const getDiceIcon = (value: number) => {
    switch (value) {
      case 1:
        return <GiInvertedDice1 />
      case 2:
        return <GiInvertedDice2 />
      case 3:
        return <GiInvertedDice3 />
      case 4:
        return <GiInvertedDice4 />
      case 5:
        return <GiInvertedDice5 />
      case 6:
        return <GiInvertedDice6 />
      default:
        return null
    }
  }

  return (
    <div>
      {pairs.map((pair, index) => (
        <div key={index}>
          <div className={style.dice_icons_wrapper}>
            <p>{getDiceIcon(pair.a)}</p>
            <p> {getDiceIcon(pair.b)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Result
