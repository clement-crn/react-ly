import React from "react"
import style from "./Box.module.css"
interface BoxProps {
  name?: string
  colorFamily?: string
  price?: number
}

function Box({ name, colorFamily, price }: BoxProps) {
  return (
    <div className={style.box}>
      <h3>{name}</h3>
      Color Family: {colorFamily}
      Price: ${price}
    </div>
  )
}

export default Box
