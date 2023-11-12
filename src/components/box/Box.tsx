import React from "react"

interface BoxProps {
  name: string
  colorFamily: string
  price: number
}

function Box({ name, colorFamily, price }: BoxProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Color Family: {colorFamily}</p>
      <p>Price: ${price}</p>
    </div>
  )
}

export default Box
