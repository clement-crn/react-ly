import React, { useEffect, useState } from "react"
import {
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice3,
  GiInvertedDice4,
  GiInvertedDice5,
  GiInvertedDice6,
} from "react-icons/gi"
import style from "./Result.module.css"

type ResultProps = {
  pairs: { a: number; b: number; sum: number }[]
}

const Result = ({ pairs }: ResultProps) => {
  const [showIcons, setShowIcons] = useState<boolean[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcons((prev) => [...prev, true])
    }, 2000) // Change delay as per your requirement

    return () => clearTimeout(timer)
  }, [])

  const getDiceIcon = (value: number) => {
    switch (value) {
      case 1:
        return <GiInvertedDice1 size={35} />
      case 2:
        return <GiInvertedDice2 size={35} />
      case 3:
        return <GiInvertedDice3 size={35} />
      case 4:
        return <GiInvertedDice4 size={35} />
      case 5:
        return <GiInvertedDice5 size={35} />
      case 6:
        return <GiInvertedDice6 size={35} />
      default:
        return null
    }
  }

  return (
    <div className={style.result_container}>
      {pairs.map((pair, index) => (
        <div
          key={index}
          className={`${style.dice_result} ${
            showIcons[index] ? style.show : ""
          }`}
        >
          <div className={style.dice_icons_wrapper}>
            {getDiceIcon(pair.a)}
            {getDiceIcon(pair.b)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Result
